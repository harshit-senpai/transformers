"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { selectContent } from "@/constants";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const DocumentPage = () => {
  const params = useParams();
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [loading, setLoading] = useState(false);
  const [originalText, setOriginalText] = useState(
    "This is some extracted text from a PDF."
  );

  const handleTranslate = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: originalText,
          source_language_code: "en-IN",
          target_language_code: `${targetLang}-IN`,
          speaker_gender: "Female",
          mode: "formal",
          model: "mayura:v1",
          enable_preprocessing: true,
        }),
      });
      const data = await response.json();
      if (data.translated_text) {
        setTranslatedText(data.translated_text);
      } else {
        console.error(data.error || "Unknown error");
        alert("Failed to translate text.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during translation.");
    } finally {
      setLoading(false);
    }
  };

  const handleSummary = async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:8000/api/documents/get-document/${params.documentId}`,
      {
        method: "GET",
        cache: "no-store",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { document } = await response.json();

    const analysisResponse = await fetch(
      "http://localhost:8000/api/analytics/get-analysis",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: document.fileData,
          analysisType: "descriptive",
        }),
      }
    );

    const analysisResult = await analysisResponse.json();
    setIsLoading(false);
    console.log(analysisResult);
    setOriginalText(analysisResult.geminiResponse);
    setSummary(analysisResult.geminiResponse);
  };

  return (
    <main className="h-full">
      <section className="w-full h-full flex gap-8">
        <div className="h-full w-1/2">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            Summarized Text
          </h2>
          <Textarea
            className="h-3/5 w-full resize-none mt-4"
            readOnly
            value={summary}
            placeholder="Your summary will be displayed here..."
          />
          <Button className="mt-2" onClick={handleSummary}>
            {isLoading ? (
              <div className="flex gap-3">
                <span> Loading...</span>{" "}
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            ) : (
              "Summerise"
            )}
          </Button>
        </div>
        <Separator orientation="vertical" className="h-full" />
        <div className="h-full w-1/2">
          <h2 className="text-3xl font-bold tracking-tighter text-center">
            Translate Text
          </h2>
          <Textarea
            className="h-3/5 w-full resize-none mt-4"
            readOnly
            value={translatedText}
            placeholder="select language to translate"
          />
          <div className="flex items-center justify-between">
            <Button className="mt-2" onClick={handleTranslate}>
              {loading ? (
                <div className="flex gap-3">
                  <span>Translating...</span>
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              ) : (
                "Translate"
              )}
            </Button>
            <Select onValueChange={setTargetLang}>
              <SelectTrigger className="w-[180px]">
                <span>{targetLang || "Select Language"}</span>
              </SelectTrigger>
              <SelectContent>
                {selectContent.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DocumentPage;
