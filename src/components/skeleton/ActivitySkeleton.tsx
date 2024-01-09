import React from "react";
import { Rectangle } from "./Loading";

export default function ActivitySkeleton() {
  return (
    <div className="flex gap-5 justify-center px-5 my-10">
      <Rectangle className="h-[120px]" />
      <Rectangle className="h-[120px]" />
    </div>
  );
}
