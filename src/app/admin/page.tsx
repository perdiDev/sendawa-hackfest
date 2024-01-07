"use client";
import dynamic from 'next/dynamic'
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
// import Profile from "@/components/Profile";
import ActivitesList from "@/components/admin/Activites";
import MenuSection from "@/components/admin/MenuSection";
import Skeleton from '@/components/pages/Admin/profile/Skeleton';

const Profile = dynamic(() => import('../../components/Profile'), {
  loading: () => <Skeleton />,
})

function Page(): JSX.Element {
  const { user } = useAuthContext() as { user: any };
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="mx-auto w-full">
      <Profile />
      <ActivitesList />
      
      <MenuSection />
      <button onClick={handleSignOut}>Logout</button>
    </main>
  );
}

export default Page;
