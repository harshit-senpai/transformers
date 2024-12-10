import * as React from "react";
import AWS from 'aws-sdk';
import type { UploadedFile } from "@/types";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/handleError";

// AWS S3 configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

interface UseUploadFileOptions {
  headers?: Record<string, string>;
  onUploadBegin?: (files: File[]) => void;
  onUploadProgress?: (progress: { file: File, progress: number }) => void;
  skipPolling?: boolean;
  defaultUploadedFiles?: UploadedFile[];
}

export function useUploadFile({
  defaultUploadedFiles = [],
  ...props
}: UseUploadFileOptions = {}) {
  const [uploadedFiles, setUploadedFiles] = React.useState<UploadedFile[]>(defaultUploadedFiles);
  const [progresses, setProgresses] = React.useState<Record<string, number>>({});
  const [isUploading, setIsUploading] = React.useState(false);

  async function onUpload(files: File[]) {
    setIsUploading(true);
    try {
      if (props.onUploadBegin) props.onUploadBegin(files);

      const uploadPromises = files.map(file => {
        const params = {
          Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME as string,
          Key: `uploads/${file.name}`,
          Body: file,
          ContentType: file.type,
        };
        return s3.upload(params).promise().then(data => ({
          name: data.Key,
          url: data.Location,
          size: file.size,
          type: file.type,
          key: data.Key,
        }));
      });

      const uploadedFiles = await Promise.all(uploadPromises);

      setUploadedFiles(prev => (prev ? [...prev, ...uploadedFiles] : uploadedFiles));
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setProgresses({});
      setIsUploading(false);
    }
  }

  return {
    onUpload,
    uploadedFiles,
    progresses,
    isUploading,
  };
}