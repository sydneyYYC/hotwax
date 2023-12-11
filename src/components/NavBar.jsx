import React from "react";
import { useStateProvider } from "../utils/StateProvider";


export default function Navbar() {
  const [{userInfo}]= useStateProvider();
  return <div className="max-w-[30vw] bg-baseblack opacity-75 flex-none max-h-min">
    <div className="text-white text-xl p-4">
     Hello, { userInfo?.userName }
    </div>
  </div>
}