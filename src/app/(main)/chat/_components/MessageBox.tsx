import { Card, CardContent } from "@/components/ui/card";

interface MessageBoxProps {
  role: string;
  content: string;
}

export const MessageBox = ({ role, content }: MessageBoxProps) => {
  return (
    <Card
      className={`${
        role === "assistant"
          ? " bg-transparent text-black ml-0 self-start"
          : " bg-gray-800 text-white rounded-md mr-1 self-end"
      } max-w-xs p-0 rounded-lg shadow-md`}
    >
      <CardContent className="flex items-center p-3">
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};