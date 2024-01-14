"use client";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { Button } from "@/components/ui/button";
import Link from "next/link";


import logoSendawa from "../../../public/logo-sendawa.svg"
import siginIl from "../../../public/img/login-il.png"

function Page(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorrMessage, setError] = useState("");
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const { result } = await signUp(email, password);
      console.log(result);

      router.push("/new-outlet");
    } catch (err) {
      const error = err as Error;
      console.log(error.message);
    }
  };

  const handleSignUpGoogle = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      router.push("/new-outlet");

    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="bg-navy w-full h-32 rounded-br-[3rem] absolute top-0 flex justify-center items-center">
        <Image src={logoSendawa} alt="sendawa logo" width={24} height={24} className="w-24 aspect-square" />
      </div>
      <div className="w-full flex flex-col items-center justify-center h-screen px-4">
        <form
          onSubmit={handleForm}
          className="shadow-[-20_0_16px_0_rgba(0,0,0,0.08)] rounded w-full"
        >
          <h1 className="text-center font-bold text-3xl text-navy">Daftar</h1>
          <div className="my-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              className="rounded py-4 px-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="rounded py-4 px-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-5">
            <Button type="submit">
              Selanjutnya
            </Button>
          </div>
        </form>
        <p className="text-center py-4">Sudah terdaftar? <Link href="/signin" className="text-blue-900 hover:text-blue-950">Login</Link></p>
        <button
          className="text-center leading-normal cursor-pointer transition-all duration-300 ease-in focus:outline-none focus:text-current w-full py-3 px-4 rounded-md bg-white border-solid hover:bg-slate-200 flex items-center  justify-end"
          onClick={handleSignUpGoogle}
        >
          <Image
            src="https://assets.kitabisa.cc/images/auth/google.png"
            alt="google"
            width={24}
            height={24}
            className="w-fit"
          />
          <span className="font-semibold mx-auto w-fit">Masuk Dengan Google</span>
        </button>
      </div>
      <Image src={siginIl} alt="Ilustrasi login page" width={400} height={400} className="w-full h-fit absolute bottom-0 sm:hidden" />
    </div>
  );
}

export default Page;
