import React from "react";
import CurrentTrack from "./CurrentTrack";
import Volume from "./Volume";
import PlayerControls from "./PlayerControls";

export default function Footer() {
  return <div class="max-w-min border-[3px] text-white border-myred flex space-around items-center mx-[3rem] p-4 rounded-lg justify-center">

    <CurrentTrack />

    <PlayerControls />

    <Volume />
    </div>
}