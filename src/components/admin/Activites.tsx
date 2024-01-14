"use client"

import React from "react";
import Activity from "./Activity";
import { MdOutlinePivotTableChart } from "react-icons/md";
import { HiMiniQueueList } from "react-icons/hi2";
import { IconContext } from "react-icons";

export default function ActivitesList() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5">
      <IconContext.Provider value={{size:"2em",}}>
        <Activity link="/meja" tag="Meja" icon={<MdOutlinePivotTableChart />}/>
        <Activity link="/antrian" tag="Antrian" icon={<HiMiniQueueList />}/>
      </IconContext.Provider>
    </div>
  );
}
