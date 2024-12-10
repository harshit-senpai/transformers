"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardCards } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user?.id) {
      redirect("/sign-in");
    }
  }, [user, loading, router]);

  if (!user?.id) {
    return null;
  }

  return (
    <main className="h-full">
      <h2 className="text-4xl font-bold">Ministry Dashboard</h2>
      <section className="grid sm:grid-cols-4 grid-cols-1 gap-4 mt-4">
        {DashboardCards.map((card, idx) => (
          <Card key={idx} className="bg-background/40">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <card.icon />
                  <span className="text-lg font-semibold">
                    {card.cardTitle}
                  </span>
                </div>
              </CardTitle>
              <CardDescription>{card.cardDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">200</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <div className="h-4"></div>
      <section>
        <h2 className="text-2xl font-bold">Recent Documents</h2>
      </section>
    </main>
  );
}
