import React from "react";

interface activitesInterface  {
  icon?: any
  tag: string
  value: string
}

export default function Activity({icon, tag, value}: activitesInterface) {
  return (
    <div className="bg-slate-100 px-[30px] py-5 w-full rounded-md shadow">
      <h3 className="text-navy font-bold flex gap-3 items-baseline text-sm md:text-md">
        <span>
          {icon}
        </span>
        {tag}
      </h3>
      <h2 className="text-slate-800 text-lg">{value}</h2>
    </div>
  );
}
