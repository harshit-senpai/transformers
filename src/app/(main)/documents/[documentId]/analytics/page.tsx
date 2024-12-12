"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnalyticsButton } from "@/constants";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function AnalyticsPage() {
  const params = useParams();
  const [analysisType, setAnalysisType] = useState("");
  const [analysisData, setAnalysisData] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const { documentId } = params;
  const handleAnalytics = async () => {
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
          analysisType: analysisType,
        }),
      }
    );
    const analysisResult = await analysisResponse.json();
    setIsLoading(false);
    setAnalysisData(analysisResult.geminiResponse);
    console.log(analysisResult);
  };
  return (
    <main className="h-full">
      <h2 className="text-4xl font-bold">Analytics of Citizens Data</h2>
      <section className="mt-4">
        <Textarea
          className="w-full h-52 bg-background/40 border-border resize-none select-none cursor-default ring-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          readOnly
          value={analysisData}
        />
        <div className="flex items-center gap-2 mt-2">
          <Select onValueChange={setAnalysisType}>
            <SelectTrigger className="w-[180px]">
              <span>{analysisType || "Select Analysis"}</span>
            </SelectTrigger>
            <SelectContent>
              {AnalyticsButton.map((item) => (
                <SelectItem key={item.title} value={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleAnalytics}>
            {isLoading ? "Analyzing..." : "Analyze"}
          </Button>
        </div>
      </section>
    </main>
  );
}
