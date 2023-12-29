"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Form1 from "@/components/Form1";

export default function Page(): JSX.Element {
  const { user } = useAuthContext() as { user: any };
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user, router]);

  console.log(user)

  return (
    <>
      <div className="flex flex-col items-center gap-3 mx-auto px-5">
        <div className="items-self-center mt-5 flex gap-5 items-baseline"> 
          <h2 className="text-primary-green font-bold text-3xl">
            <span className="text-3xl md:text-4xl font-extrabold">1</span>/3
          </h2>
          <h3 className="text-lg md:text-xl">Fill all information about your outlet</h3>
        </div>
        <Form1 userId={user.uid}/>
      </div>
    </>
  );
}
