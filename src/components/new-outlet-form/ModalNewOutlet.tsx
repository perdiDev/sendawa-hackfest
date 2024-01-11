import React from "react";
import BottomModal from "../BottomModal";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ModalNewOutlet({isOpen}:{isOpen: boolean}) {
  return (
    <BottomModal isOpen={isOpen}>
      <div className="flex flex-col justify-between h-full gap-10 mt-10">
        <div>
          <h1 className="font-semibold text-2xl">
            Congrats!👍 First Step is Done
          </h1>
          <p className="text-slate-600 w-full lg:w-[80%]">
            Nice folks, we will process your outlet. Please check the{" "}
            <span className="font-semibold">email of the outlet</span> you
            registered.
          </p>
        </div>
        <div className="flex flex-col gap-2">
         
          <Link href={"/admin"}>
            <Button>Dashboard</Button>
          </Link>
        </div>
      </div>
    </BottomModal>
  );
}
