"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import Profile from "@/components/Profile";

function Page(): JSX.Element {
  const { user } = useAuthContext() as { user: any };
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user, router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center mx-auto px-5">
      <h1>Only logged-in users can view this page</h1>
      <Profile />
      <button onClick={handleSignOut}>Logout</button>
    </main>
  );
}

export default Page;
