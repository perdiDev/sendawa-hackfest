import React from "react";
import { Circle, Rectangle } from "@/components/skeleton/Loading";

export default function ProfilSkeleton() {
  return (
    <div className="w-full">
      <Rectangle />
      <Circle className="-mt-[50px] ml-5 bg-slate-400" />

      <Rectangle className="h-4 ml-5 w-[120px] mt-3" />
      <Rectangle className="h-4 ml-5 w-[150px] mt-3" />
    </div>
  );
}
