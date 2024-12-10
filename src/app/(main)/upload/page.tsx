"use client";

import { Card } from "@/components/ui/card";
import { FileUploader } from "./_components/FileUploader";
import { useUploadFile } from "@/hooks/useUploadFile";
import { UploadedFilesCard } from "./_components/UploadedFileCard";

export default function UploadPage() {
  const { onUpload, uploadedFiles, isUploading, convertFile } = useUploadFile({});
  return (
    <main className="h-full">
      <h2 className="text-4xl font-bold">Upload Citizen Documents</h2>
      <Card className="mt-4 h-1/2 w-full p-4 bg-background/40">
        <FileUploader
          maxFileCount={4}
          maxSize={4 * 1024 * 1024}
          onUpload={onUpload}
        />
      </Card>
      <UploadedFilesCard
        uploadedFiles={uploadedFiles}
        onConvert={convertFile}
      />
    </main>
  );
}
