"use client"

import React from "react";
import { auth } from "@/firebase";
import { signOut } from "@firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function Logout() {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={handleSignOut} type="button">Logout</Button>;
}
