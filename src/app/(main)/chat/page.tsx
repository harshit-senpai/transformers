// "use client"

// import { useChat } from "ai/react";
// import { ChatInput } from "../chat/_components/ChatInput";
// import { MessageBox } from "./_components/MessageBox";

// export default function ChatPage() {
//   const { messages, input, handleInputChange, handleSubmit, isLoading } =
//     useChat({
//       api: "api/chat",
//     });

//   console.log("Messages from server:", messages);

//   return (
//     <main className="h-full">
//       <h2 className="text-2xl font-bold text-center">Query for Citizen Data</h2>
//       <section className="mx-auto container lg:px-8 px-4 py-5 max-w-2xl flex flex-col md:h-[70vh] h-[70vh] justify-end overflow-auto">
//         <div className="flex flex-col flex-1"></div>
//         <div className="flex flex-col gap-4">
//           {messages.map((m, idx) => {
//             console.log(m.content);
//             return <MessageBox key={idx} role={m.role} content={m.content} />;
//           })}
//         </div>
//         <ChatInput
//           value={input}
//           onChange={handleInputChange}
//           onSubmit={handleSubmit}
//           isLoading={isLoading}
//         />
//       </section>
//     </main>
//   );
// }


"use client";

import { useChat } from "ai/react";
import { ChatInput } from "../chat/_components/ChatInput";
import { MessageBox } from "./_components/MessageBox";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "api/chat",
    });

  console.log("Messages from server:", messages);

  
  // const [messages, setMessages] = useState([]);
  const [initialMessageVisible, setInitialMessageVisible] = useState(true); 
  const [suggestionsVisible, setSuggestionsVisible] = useState(true); 
  const suggestions = ["What is insurance?", "How to file a claim?"];
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    const message = "How can I help you?";
    let currentIndex = 0;

    const typeMessage = () => {
      if (currentIndex < message.length) {
        setTypedMessage((prev) => message.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeMessage, 50);
      }
    };

    typeMessage();
  }, []);

  return (
    <main className="h-full">
      <h2 className="text-2xl font-bold text-center mb-4">Query for Citizen Data</h2>
      <section className="mx-auto container lg:px-8  max-w-2xl flex flex-col h-[70vh] justify-end overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col w-[40vw] flex-1 gap-4 max-h-[70vh] overflow-x-auto">
          
        <div className="text-3xl font-semibold flex justify-center h-[70vh] mb-4 items-center">{typedMessage}</div>

          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`p-4 flex rounded-lg w-full mx-auto mt-4 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              style={{
                maxWidth: m.role === "user" ? "100%" : "100%",
                wordWrap: "break-word",
              }}
            
            >
              <MessageBox role={m.role} content={m.content} />
            </div>
          ))}
        </div>
        <ChatInput
          value={input}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </section>
    </main>
  );
}
