import React from "react";
import { useStateProvider } from "../utils/StateProvider";


export default function Navbar() {
  const [{userInfo}]= useStateProvider();
  return <div>Navbar
    <div>Icon</div>
    <div>
     Hello { userInfo?.userName }
    </div>
  </div>
}