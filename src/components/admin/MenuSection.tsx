import React from "react";
import Menulist from "./Menulist";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MenuSection() {
  return (
    <div className="mt-10">
      <h2 className="text-navy font-bold text-2xl pl-5">Menu</h2>
      <Button>
        <Link href={"new-menu"}>Tambahkan menu</Link>
      </Button>
      <Menulist />
    </div>
  );
}
