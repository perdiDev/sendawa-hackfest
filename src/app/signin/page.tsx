"use client";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { VscError } from "react-icons/vsc";

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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleForm}
          className="bg-white shadow-[-20_0_16px_0_rgba(0,0,0,0.08)] rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-3xl font-bold mb-2 text-primary-green pb-2 border-b-2 border-primary-green">
            Sign In
          </h1>
          <p>Sign in to enjoy easy entrepreneurship and access to other features!</p>
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
              {isLoading ? "Loading..." : "Sign In"}
            </button>
            {erorrMessage && (
              <div className="text-black bg-red-100 shadow border-l-4 border-red-500 p-2 w-full flex justify-start gap-3 items-center">
                <div>
                  <VscError size={32} color="red" className="text-red-500"/>
                </div>
                <div>
                  <p className="text-red-500 font-bold">There is a problem</p>
                  {erorrMessage}
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
