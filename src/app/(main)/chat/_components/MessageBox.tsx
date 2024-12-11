import { Card, CardContent } from "@/components/ui/card";

interface MessageBoxProps {
  role: string;
  content: string;
}

export const MessageBox = ({ role, content }: MessageBoxProps) => {
  return (
    <Card
      className={role === "assistant" ? "bg-background/40" : "bg-background/80"}
    >
      <CardContent className="flex items-center">
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};
