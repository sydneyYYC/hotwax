import React, { useEffect } from "react";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import Playlists from "./Playlists";

export default function Spotify() {
  // useStateProvider()
  // useEffect(() => {

  // }, [dispatch, token])
  return <main className="max-w-screen min-h-screen bg-green-100">
    <div className="m-4">Spotify</div>
    <Playlists />
    <Footer></Footer>
    </main>
}

