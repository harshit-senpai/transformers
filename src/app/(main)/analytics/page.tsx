import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnalyticsButton } from "@/constants";

export default async function AnalyticsPage() {
  return (
    <main className="h-full">
      <h2 className="text-4xl font-bold">Analytics of Citizens Data</h2>
      <section className="mt-4">
        <Textarea
          className="w-full h-52 bg-background/40 border-border resize-none select-none cursor-default ring-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          readOnly
        />
        <div className="mt-8 flex gap-8">
          {AnalyticsButton.map((buttons, idx) => (
            <Button key={idx} className="flex gap-3">
              <buttons.icon />
              {buttons.title}
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
