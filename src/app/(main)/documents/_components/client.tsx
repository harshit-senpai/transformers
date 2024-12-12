import { Heading } from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { columns } from "./Column";
import { DataTable } from "@/components/DataTable";

export const DocumentClient = ({ data }: any) => {
  const length = data.documents.length;
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Documents (${length})`}
          description="Manage your documents"
        />
      </div>
      <Separator />
      <DataTable searchKey="fileUrl" columns={columns} data={data.documents} />
    </>
  );
};
