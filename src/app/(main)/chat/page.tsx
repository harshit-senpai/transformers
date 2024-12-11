"use client";

import { ChatInput } from "../chat/_components/ChatInput";
import { useChat } from "ai/react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "api/chat",
    });

  return (
    <main className="h-full">
      <h2 className="text-2xl font-bold text-center">Query for Citizen Data</h2>
      <section className="mx-auto container lg:px-8 px-4 py-5 max-w-2xl flex flex-col md:h-[70vh] h-[70vh] justify-end overflow-auto">
        <div className="flex flex-col flex-1"></div>
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
