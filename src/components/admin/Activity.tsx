import Link from "next/link";
import React from "react";

interface activitesInterface  {
  icon?: any
  tag: string
  link: string
}

export default function Activity({icon, tag, link}: activitesInterface) {
  return (
    <Link href={link} className="bg-white px-[30px] py-5 w-full rounded-md shadow flex justify-center items-center text-navy font-bold gap-3 text-2xl">
        <span>
          {icon}
        </span>
        {tag}
    </Link>
  );
}
