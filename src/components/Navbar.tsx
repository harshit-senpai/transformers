"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Logout } from "./Logout";

export const Navbar = () => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <header className="w-full h-16 bg-background backdrop:blur flex items-center sm:px-8 px-4 border-b border-border">
      <div className="flex items-center justify-center">Logo</div>
      <div className="flex items-center justify-center ml-auto">
        {user ? (
          <Logout />
        ) : (
          <Button onClick={() => router.push("/sign-up")}>Sign Up</Button>
        )}
      </div>
    </header>
  );
};
