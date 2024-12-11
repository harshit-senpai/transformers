// "use client";

// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";

// import { Textarea } from "@/components/ui/textarea";
// import { CornerDownLeft, Loader2, SendIcon } from "lucide-react";
// import { ChangeEvent } from "react";

// export const ChatInput = ({
//   value,
//   onChange,
//   onSubmit,
//   isLoading
// }: {
//   value: string;
//   onChange: (
//     e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
//   ) => void;
//   onSubmit: (event: React.FormEvent, data?: any) => void;
//   isLoading: boolean;
// }) => {
//   console.log(value);
//   return (
//     <div className="max-w-xl gap-5 relative">
//       <div className="grid w-full gap-3">
//         <Label className="text-muted-foreground">Your Prompt</Label>
//         <div className="relative">
//           <form
//             onSubmit={(event) => {
//               event.preventDefault();
//               console.log("Form submitted with value:", value);
//               onSubmit(event, {
//                 data: {
//                   value: value as string
//                 },
//               });
//             }}
//             className="flex justify-between items-center gap-3"
//           >
//             <Textarea
//               placeholder="Describe your image..."
//               spellCheck={false}
//               value={value}
//               onChange={onChange}
//               required
//               rows={4}
//               className="focus-visible:ring-offset-0 transition-colors focus-visible:ring-0 resize-none bg-background/40 p-2"
//             />
//            <Button
//             disabled={isLoading}
//             type="submit"
//             size="sm"
//             className="ml-auto"
//           >
//             {isLoading ? "Analysing..." : "Ask"}
//             {isLoading ? (
//               <Loader2 className="size-3.5 animate-spin" />
//             ) : (
//               <CornerDownLeft className="size-3.5" />
//             )}
//           </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };



"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CornerDownLeft, Loader2 } from "lucide-react";
import { ChangeEvent } from "react";

export const ChatInput = ({
  value,
  onChange,
  onSubmit,
  isLoading,
}: {
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (event: React.FormEvent, data?: any) => void;
  isLoading: boolean;
}) => {
  console.log(value);
  return (
    <div className="max-w-xl gap-5 relative">
      <div className="grid w-full gap-3">
        <Label className="text-muted-foreground">Your Prompt</Label>
        <div className="relative">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("Form submitted with value:", value);
              onSubmit(event, {
                data: {
                  value: value as string,
                },
              });
            }}
            className="flex justify-between items-center gap-3"
          >
            <Textarea
              placeholder="Ask me something..."
              spellCheck={false}
              value={value}
              onChange={onChange}
              required
              rows={4}
              className="focus-visible:ring-offset-0 transition-colors focus-visible:ring-0 resize-none bg-background/40 p-2"
            />
            <Button
              disabled={isLoading}
              type="submit"
              size="sm"
              className="ml-auto"
            >
              {isLoading ? "Analysing..." : "Ask"}
              {isLoading ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : (
                <CornerDownLeft className="size-3.5" />
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
