"use client"

import { useChat } from "ai/react";
import { ChatInput } from "../chat/_components/ChatInput";
import { MessageBox } from "./_components/MessageBox";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "api/chat",
    });

  console.log("Messages from server:", messages);

  return (
    <main className="h-full">
      <h2 className="text-2xl font-bold text-center">Query for Citizen Data</h2>
      <section className="mx-auto container lg:px-8 px-4 py-5 max-w-2xl flex flex-col md:h-[70vh] h-[70vh] justify-end overflow-auto">
        <div className="flex flex-col flex-1"></div>
        <div className="flex flex-col gap-4">
          {messages.map((m, idx) => {
            console.log(m.content);
            return <MessageBox key={idx} role={m.role} content={m.content} />;
          })}
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
