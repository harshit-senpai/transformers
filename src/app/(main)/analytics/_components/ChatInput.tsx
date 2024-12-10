import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";

export const ChatInput = () => {
  return (
    <div className="max-w-xl gap-5 relative">
      <div className="grid w-full gap-3">
        <Label className="text-muted-foreground">Yor Prompt</Label>
        <div className="relative">
          <Textarea
            placeholder="Describe your image..."
            spellCheck={false}
            required
            rows={4}
            className="focus-visible:ring-offset-0 transition-colors focus-visible:ring-0 resize-none bg-background/40"
          />
          <Button className="absolute right-2 bottom-2">
            <SendIcon className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};
