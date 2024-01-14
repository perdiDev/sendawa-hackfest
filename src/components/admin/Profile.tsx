"use client";
import { useAuthContext } from "@/context/AuthContext";
import getDocumentFirestore from "@/firebase/firestore/getData";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import ProfilSkeleton from "../skeleton/ProfileSkeleton";
import { useQuery } from "@tanstack/react-query";

import dashborIlustration from "@public/img/dashbor-il.png"

export default function Profile() {
  const { user } = useAuthContext() as { user: any };

  const {isLoading, isError, data, error} = useQuery({
    queryKey: ["profile"],
    queryFn:async () => {
      const {result} = await getDocumentFirestore(`${user.uid}`, "outlet");
      return result
    }
  })

  if(isLoading){
    return <ProfilSkeleton />
  }
  if(isError){
    console.log("Error", error)
  }

  if (data) {
    return (
      <div className="w-full">
          <Image
            src={dashborIlustration}
            width={1000}
            height={1000}
            className="w-[100vw] h-[200px] object-cover rounded-br-[3rem]"
            alt="dashbor image"
            quality="100"
          />

        {data?.profile && (
          <Image
            src={data.profile}
            width={100}
            height={100}
            className="w-[100px] h-[100px] rounded-full object-cover -mt-[50px] ml-5 md:ml-10"
            alt={data.name_brand}
          />
        )}

        <h3 className="mt-2 font-bold ml-5 md:ml-10 text-xl text-navy">
          {data.name_brand}
        </h3>
        <h3 className="text-slate-600 ml-5 md:ml-10 text-sm flex gap-2 items-baseline">
          <span className="h-12 aspect-square">
            <MdLocationPin size={14}/>
          </span>
          {data.address_brand}
        </h3>
      </div>
    );
  }
}
