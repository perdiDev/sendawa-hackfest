import React from "react";
import { twMerge } from "tailwind-merge";

interface skeletonInterface {
  className?: string;
}

const skeletonStyle = "w-full animate-pulse bg-slate-300 h-[200px]";

export function Circle({ className }: skeletonInterface) {
  return <div className={twMerge(skeletonStyle,"w-[100px] h-[100px] rounded-full", className)}></div>;
}

export function Rectangle({ className }: skeletonInterface) {
  return <div className={twMerge(skeletonStyle, className)}></div>;
}
