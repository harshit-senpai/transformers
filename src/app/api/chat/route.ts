import { NextRequest } from "next/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { queryPineconeVectorStore } from "@/utils/util";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText, Message, StreamData, streamText } from "ai";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const google = createGoogleGenerativeAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
  apiKey: process.env.GEMINI_API_KEY,
});

const model = google("models/gemini-1.5-pro-latest", {
  safetySettings: [
    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
  ],
});

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  console.log(reqBody);

  const messages: Message[] = reqBody.messages;
  const userQuestion = `${messages[messages.length - 1].content}`;
  console.log(userQuestion);

  const query = `Represent this for searching relevant passages: \n\n${userQuestion}`;

  const retrievals = await queryPineconeVectorStore(
    pc,
    "transformers",
    "chat-bot",
    query
  );

  const finalPrompt = `Here is a summary of a patient's clinical report, and a user query. Some generic clinical findings are also provided that may or may not be relevant for the report.
Go through the clinical report and answer the user query.
Ensure the response is factually accurate, and demonstrates a thorough understanding of the query topic and the clinical report.
Before answering you may enrich your knowledge by going through the provided clinical findings. 
The clinical findings are generic insights and not part of the patient's medical report. Do not include any clinical finding if it is not relevant for the patient's case.

\n\n**Patient's Clinical report summary:** . 
\n**end of patient's clinical report** 

\n\n**User Query:**\n${userQuestion}?
\n**end of user query** 

\n\n**Generic Clinical findings:**
\n\n${retrievals}. 
\n\n**end of generic clinical findings** 

\n\nProvide thorough justification for your answer.
\n\n**Answer:**
`;

  const result = await streamText({
    model: model,
    prompt: finalPrompt,
  });

  return result.toDataStreamResponse();
}
