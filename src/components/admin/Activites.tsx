import React from "react";
import { FaWallet } from "react-icons/fa";
import Activity from "./Activity";

export default function ActivitesList() {
  return (
    <div className="mt-10 flex justify-center gap-5 px-5">
      <Activity tag="Balance" value="Rp12000" icon={<FaWallet />}/>
      <Activity tag="Balance" value="Rp12000" icon={<FaWallet />}/>
    </div>
  );
}
