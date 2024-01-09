import React from "react";
import { Rectangle } from "./Loading";

export default function MenuList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-5">
      {Array.from({ length: 10 }).map((item, i) => (
        <Rectangle
          key={i}
          className="h-[100px]"
        />
      ))}
    </div>
  );
}
