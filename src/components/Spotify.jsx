import React, { useEffect } from "react";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import Playlists from "./Playlists";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import Navbar from "./NavBar";
import CurrentTrack from "./CurrentTrack";

export default function Spotify() {
  const [{token}, dispatch]= useStateProvider();
  useEffect(() => {
    const getUserInfo = async ()=> {
      const {data} = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      }});
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      dispatch({type:reducerCases.SET_USER, userInfo})
    };
    getUserInfo();
  }, [dispatch, token])
  // this is where the page is compiled
  return <main className="max-w-screen min-h-screen bg-green-100">
    <div className="m-4">Spotify</div>
    <Navbar />
    <Playlists />
    <CurrentTrack />
    </main>
}


