import React, { useEffect } from "react";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import Playlists from "./Playlists";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import Navbar from "./NavBar";


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
  // this is where the page is compiled when users are logged in 
  return <main className="max-w-screen min-h-screen bg-baseblack">
    <div className =" grid grid-col-12 grid-row-3">
      <div className="col-start-1 col-span-3 z-10 row-start-1">
        <Navbar />
      </div>
      <div className="min-w-screen col-start-1 col-span-full justify-self-center row-start-1 mx-4">
        <img src="./assets/console.png" alt="a record player" />
      </div>
      <div className="col-start-1 row-start-1 justify-self-end row-start-1 z-10">
      <Playlists />
      </div>
      <div className="m-auto">
      <Footer />
      </div>
    </div>
    </main>
}


