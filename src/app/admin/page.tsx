'use client'
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

function Page(): JSX.Element {
  // Access the user object from the authentication context
  const { user } = useAuthContext() as { user: any }; // Use 'as' to assert the type as { user: any }
  const router = useRouter();

  useEffect( () => {
    // Redirect to the home page if the user is not logged in
    if ( user == null ) {
      router.push( "/" );
    }
    // }, [ user ] );
  }, [ user, router ] ); // Include 'router' in the dependency array to resolve eslint warning

  const handleSignOut = async () => {
    try {
      const res = await signOut(auth);
      router.push("/signin")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>

    <h1>Only logged-in users can view this page</h1>
    {JSON.stringify(user)}
    <button onClick={handleSignOut}>Logout</button>
    </main>
  );
}

export default Page;
