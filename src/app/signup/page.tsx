"use client";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import addData from "@/firebase/firestore/addData";

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

      router.push("/admin");
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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleForm}
          className="bg-white shadow-[-20_0_16px_0_rgba(0,0,0,0.08)] rounded pt-6 pb-8 mb-4"
        >
          <h1 className="text-3xl font-bold mb-2 text-primary-green pb-2 border-b-2 border-primary-green">
            Sign Up
          </h1>
          <p>Your Success Journey starts here</p>
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
            <button
              type="submit"
              className="w-full bg-primary-green text-white font-semibold py-2 rounded-lg hover:bg-secondary-green"
            >
              Next Step
            </button>
            {erorrMessage && (
              <div className="text-black bg-red-100 shadow border-l-4 border-red-500 p-2 w-full">
                <p className="text-red-500 font-bold">There is a problem</p>
                {erorrMessage}
              </div>
            )}
          </div>
        </form>
        {/*  */}
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
          <span className="font-semibold mx-auto">Daftar Dengan Google</span>
        </button>
      </div>
    </div>
  );
}

export default Page;
