import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function CurrentTrack () {
  const [{token, currentlyPlaying}, dispatch]= useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', 
      {
        headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
    ); 
    console.log("response is", response);
    if(response.data !== ""){
      const {item} = response.data;
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist)=>artist.name),
        image: item.album.images[2].url,
      };
      dispatch({ type:reducerCases.SET_PLAYING, currentlyPlaying });
    }
  };
  getCurrentTrack();
  }, [token, dispatch]);
  console.log("this is", currentlyPlaying);
  return <div>
    {currentlyPlaying && (
      <div className="current track">
        <div className="ml-2 w-[80px] h-auto">
          <img src={currentlyPlaying.image} alt="album cover art"/>
        </div>
        <div className="track info">
          <h4 className="min-w-max">{currentlyPlaying.name}</h4>
          <h6>{currentlyPlaying.artists.join(", ")}</h6>
        </div>
      </div>
    )}
  </div>
}