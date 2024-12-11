import Image from "next/image";
import { FileText, Loader2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { EmptyCard } from "./../../../../components/EmptyCard";

export function UploadedFilesCard({
  uploadedFiles,
  onConvert,
}: {
  uploadedFiles: any[];
  onConvert: (file: any) => void;
}) {
  return (
    <Card className="bg-background/40">
      <CardHeader>
        <CardTitle>Selected files</CardTitle>
        <CardDescription>View the selected files here</CardDescription>
      </CardHeader>
      <CardContent>
        {uploadedFiles.length > 0 ? (
          <ScrollArea className="pb-4">
            <div className="flex w-max space-x-2.5">
              {uploadedFiles.map((file: any) => (
                <div key={file.key} className="relative aspect-video w-72">
                  <div className="w-full h-full flex items-center justify-center bg-muted rounded-md">
                    <FileText className="w-16 h-16 text-muted-foreground" />
                  </div>

                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded ${
                      file.isMachineReadable ? "bg-green-500" : "bg-red-500"
                    } text-white text-sm`}
                  >
                    {file.isMachineReadable ? "Readable" : "Not Readable"}
                  </div>
                  {!file.isMachineReadable && (
                    <button
                      onClick={() => onConvert(file.key)}
                      className="absolute bottom-10 right-2 bg-blue-500 hover:bg-blue-500/80 text-white px-3 py-1 rounded text-sm"
                    >
                     Convert
                    </button>
                  )}
                  <p className="text-sm text-muted-foreground mt-2 text-center truncate px-2">
                    {file.fileName}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          <EmptyCard
            title="No files uploaded"
            description="Upload some files to see them here"
            className="w-full"
          />
        )}
      </CardContent>
    </Card>
  );
}
