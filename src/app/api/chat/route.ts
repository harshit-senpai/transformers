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
  console.log("API route hit");
  const reqBody = await req.json();
  console.log("Request body:", reqBody);

  console.log(reqBody)

  const messages: Message[] = reqBody.messages;
  const userQuery = messages[messages.length - 1].content;

  const searchQuery = userQuery.toLowerCase();

  const retrievals = await queryPineconeVectorStore(
    pc,
    "transformers",
    "chat-bot",
    searchQuery
  );

  console.log("User Query:", userQuery);
  console.log("Search Results:", retrievals);

  const finalPrompt = `Here is a summary of a patient's clinical report, and a user query. Some generic clinical findings are also provided that may or may not be relevant for the report.
  Go through the clinical report and answer the user query.
  Ensure the response is factually accurate, and demonstrates a thorough understanding of the query topic and the clinical report.
  Before answering you may enrich your knowledge by going through the provided clinical findings. 
  The clinical findings are generic insights and not part of the patient's medical report. Do not include any clinical finding if it is not relevant for the patient's case.
  
  \n\n**User Query:**\n${searchQuery}?
  \n**end of user query** 
  `;

  const data = new StreamData();
  data.append({
    retrievals: retrievals,
  });

  const result = await streamText({
    model: model,
    prompt: finalPrompt,
    onFinish() {
      data.close();
    },
  });

  console.log(result);

  return result.toDataStreamResponse({ data });
}
