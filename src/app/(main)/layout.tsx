"use client";

import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import { Logout } from "@/components/Logout";
import { ModeToggle } from "@/components/ModeToggle";
import { PanelRightInactive } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="m-2 w-full">
        <div className="flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar p-2 px-4 shadow">
          <div className="flex items-center">
            <SidebarTrigger />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <ModeToggle />
            <Logout />
          </div>
        </div>
        <div className="h-4"></div>
        <div className="h-[calc(100vh-8.5rem)] overflow-y-auto rounded-md border border-sidebar-border bg-sidebar p-4 shadow">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
