"use client";
import { useAuthContext } from "@/context/AuthContext";
import getDocumentFirestore from "@/firebase/firestore/getData";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./ui/Loading";
import { MdLocationPin } from "react-icons/md";
import Skeleton from "./pages/Admin/profile/Skeleton";

interface typeData {
  address_brand: string;
  images: string;
  name_brand: string;
  name_owner: string;
  ovo_brand: string;
  phone_brand: string;
  phone_owner: string;
  profile: string;
}

export default function Profile() {
  const [data, setData] = useState<any | null>(null);
  const { user } = useAuthContext() as { user: any };
  // const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    // setIsLoading(true);

    try {
      const { result } = await getDocumentFirestore(`${user.uid}`, "outlet");
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data) {
    return (
      <div className="w-full">
        {data?.images && (
          <Image
            src={data.images}
            width={100}
            height={100}
            className="w-[100vw] h-[200px] object-cover"
            alt={data.name_brand}
          />
        )}

        {data?.profile && (
          <Image
            src={data.profile}
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-full object-cover -mt-[50px] ml-5 md:ml-10"
            alt={data.name_brand}
          />
        )}

        <h3 className="mt-3 font-semibold ml-5 md:ml-10 text-md">
          {data.name_brand}
        </h3>
        <h3 className="text-slate-600 ml-5 md:ml-10 text-sm flex gap-2">
          <span>
            <MdLocationPin />
          </span>
          {data.address_brand}
        </h3>
      </div>
    );
  }
}
