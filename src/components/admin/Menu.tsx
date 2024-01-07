import React from "react";
import Image from "next/image";

interface menuInterface {
  url: string;
  name: string;
  price: number;
}
export default function Menu({ url, name, price }: menuInterface) {
  return (
    <div className="flex items-start bg-slate-100 gap-3 p-2 rounded-[14px] shadow-sm">
      <Image
        alt="menu"
        width={100}
        height={100}
        src={url}
        priority
        className="rounded-[6px] w-[100px] h-[100px] object-cover"
      />
      <div>
        <h3 className="text-navy text-md font-semibold">{name}</h3>
        <p className="text-navy text-md">Rp{price}</p>
      </div>
    </div>
  );
}
