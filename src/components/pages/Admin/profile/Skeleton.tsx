import React from "react";
import { Circle, Rectangle } from "@/components/skeleton/Loading";

export default function Skeleton() {
  return (
    <div className="w-full">
      <Rectangle />
      <Circle className="-mt-[50px] ml-5 bg-slate-400" />

      <Rectangle className="h-4 ml-5 w-[120px] mt-3" />
      <Rectangle className="h-4 ml-5 w-[150px] mt-3" />

      {/* <div className="flex gap-5 justify-center px-5 my-10">
        <Rectangle className="h-[120px]" />
        <Rectangle className="h-[120px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5">
        {Array.from({ length: 10 }).map((item, i) => (
          <Rectangle
            key={i}
            className="h-[100px]"
          />
        ))}
      </div> */}
    </div>
  );
}
