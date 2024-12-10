"use client";

import { apiClient } from "@/utils/apiClient";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await apiClient.logout();
      toast.success("Logged out successfully");
      router.push("/sign-in");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };
  return (
    <Button onClick={handleLogout} className="font-semibold ">
      Logout
    </Button>
  );
};
