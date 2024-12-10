import { Card } from "@/components/ui/card";
import { FileUploader } from "./_components/FileUploader";

export default function UploadPage() {
  return (
    <main className="h-full">
      <h2 className="text-4xl font-bold">Upload Citizen Documents</h2>
      <Card className="mt-4 h-1/2 w-full p-4 bg-background/40">
        <FileUploader
          maxFileCount={4}
          maxSize={4 * 1024 * 1024}
        />
      </Card>
    </main>
  );
}
