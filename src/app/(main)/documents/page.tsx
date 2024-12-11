import { db } from "@/lib/db";
import { DocumentClient } from "./_components/client";
import { apiClient } from "@/utils/apiClient";

export default async function DocumentsPage() {
  const data = await apiClient.getDocs();

  return (
    <main className="h-full">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <DocumentClient data={data} />
      </div>
    </main>
  );
}
