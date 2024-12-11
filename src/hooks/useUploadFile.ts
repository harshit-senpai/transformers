"use client";

import * as React from "react";
import AWS from "aws-sdk";
import type { UploadedFile } from "@/types";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/handleError";

// AWS S3 configuration
const s3 = new AWS.S3({
  accessKeyId: "AKIA4RCAN77QZVNTDFOU",
  secretAccessKey: "2jtGXThxTBadb8QB0gFhlzvSZujuC8NNu0Y",
  region: "ap-south-1",
});

interface UseUploadFileOptions {
  headers?: Record<string, string>;
  onUploadBegin?: (files: File[]) => void;
  onUploadProgress?: (progress: { file: File; progress: number }) => void;
  defaultUploadedFiles?: UploadedFile[];
}

export function useUploadFile({
  defaultUploadedFiles = [],
  ...props
}: UseUploadFileOptions = {}) {
  const [uploadedFiles, setUploadedFiles] =
    React.useState<UploadedFile[]>(defaultUploadedFiles);
  const [progresses, setProgresses] = React.useState<Record<string, number>>(
    {}
  );
  const [isUploading, setIsUploading] = React.useState(false);
  const [convertingFileId, setConvertingFileId] = React.useState<string | null>(null);

  async function onUpload(files: File[]) {
    setIsUploading(true);
    try {
      if (props.onUploadBegin) props.onUploadBegin(files);

      const uploadPromises = files.map(async (file) => {
        const reader = new FileReader();
        const fileContent = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });

        const response = await fetch("http://localhost:8000/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileName: file.name,
            fileType: file.type,
            fileContent,
          }),
        });

        const { data } = await response.json();
        console.log(data);
        return data;
      });
      const uploadedFiles = await Promise.all(uploadPromises);
      setUploadedFiles((prev) =>
        prev ? [...prev, ...uploadedFiles] : uploadedFiles
      );
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setProgresses({});
      setIsUploading(false);
    }
  }

  const convertFile = async (fileKey: string) => {
    setConvertingFileId(fileKey);
    try {
      const response = await fetch("http://localhost:8000/api/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileKey }),
         credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        setUploadedFiles((prev) =>
          prev.map((file) =>
            file.key === fileKey ? { ...file, isMachineReadable: true } : file
          )
        );
        toast.success("File converted successfully");
      }
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setConvertingFileId(null);
    }
  };

  return {
    onUpload,
    uploadedFiles,
    progresses,
    isUploading,
    convertFile,
  };
}
