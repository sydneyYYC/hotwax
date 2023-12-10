import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

export default function Volume() {
  const [{token}]= useStateProvider();
  const setVolume = async(e) => {
    await axios.put(`https://api.spotify.com/v1/me/player/volume`, {},
    {
      params:{
        volume_percent: parseInt(e.target.value)
      },
      headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }
  // note running into bug where it is displaying the previous song instead of the one playing
  ); 
  };
  
  return <div>
    <input type="range" min={0} max={100} onMouseUp={(e => setVolume(e))} />
  </div>
}