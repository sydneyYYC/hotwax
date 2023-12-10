import React from "react";
import CurrentTrack from "./CurrentTrack";
import Volume from "./Volume";
import PlayerControls from "./PlayerControls";

export default function Footer() {
  return <div class="min-w-screen bg-slate-100">
    <CurrentTrack />
    Footer
    <PlayerControls />
    <Volume />
    </div>
}