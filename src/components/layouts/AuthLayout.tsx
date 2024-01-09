"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { ReactElement } from "react";
import { redirect } from "next/navigation";

interface authLayout {
  children: ReactElement;
}

export default function AuthLayout({ children }: authLayout) {
  const { user } = useAuthContext() as { user: any };
  useEffect(() => {
    if (user == null) {
      redirect("/signin");
    }
  }, [user]);

  return children;
}
