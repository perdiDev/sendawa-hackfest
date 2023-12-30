"use client";
import { useAuthContext } from "@/context/AuthContext";
import getDataRealtime from "@/firebase/realtime/getData";
import { useEffect, useState } from "react";

export default function Profile() {
  const [data, setData] = useState({});
  const { user } = useAuthContext() as { user: any };
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getDataRealtime(`${user.uid}/outlet`);
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>
    <h2>{user.uid}</h2>
    {isLoading ? "Loading nih" : JSON.stringify(data)}</div>;
}
