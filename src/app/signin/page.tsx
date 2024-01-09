"use client";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VscError } from "react-icons/vsc";
import { Message } from "@/components/Message";
import { Button } from "@/components/ui/button";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import Image from "next/image";

function Page(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erorrMessage, setError] = useState("Sandi salah");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { result } = await signIn(email, password);
      console.log(result);
      router.push("/admin");
    } catch (err) {
      const error = err as Error;
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const handleSignUpGoogle = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/admin");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleForm}
          className="bg-white shadow-[-20_0_16px_0_rgba(0,0,0,0.08)] rounded pt-6 pb-8 mb-4"
        >
          <h1 className="text-3xl font-bold mb-2 text-primary-green pb-2 border-b-2 border-primary-green">
            Sign In
          </h1>
          <p>
            Sign in to enjoy easy entrepreneurship and access to other features!
          </p>
          <div className="my-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="fayzul@gmail.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-5">
            <Button type="submit">
              {isLoading ? "Loading..." : "Sign In"}
            </Button>
          </div>
        </form>
        <button
          className="text-center leading-normal cursor-pointer transition-all duration-300 ease-in focus:outline-none focus:text-current w-full align-middle py-2 px-4 rounded-md border border-gray border-solid hover:bg-gray flex items-center gap-4"
          onClick={handleSignUpGoogle}
        >
          <Image
            src="https://assets.kitabisa.cc/images/auth/google.png"
            alt="google"
            width={24}
            height={24}
          />
          <span className="font-semibold mx-auto">Masuk Dengan Google</span>
        </button>
      </div>
    </div>
  );
}

export default Page;
