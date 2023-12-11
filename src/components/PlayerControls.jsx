import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from 'axios';
import { reducerCases } from "../utils/Constants";

export default function PlayerControls(){
  const [{token, playerState}, dispatch]= useStateProvider();
  const changeTrack = async (type) => {
     await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {},
    {
      headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  }
  // note running into bug where it is displaying the previous song instead of the one playing
  ); 
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
} else 
  dispatch({ type:reducerCases.SET_PLAYING, currentlyPlaying:null });
  };
  const changeState = async () => {
    const state = playerState ? "pause" : "play" ;  
    await axios.put(`https://api.spotify.com/v1/me/player/${state}`, {},
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
    ); 
    dispatch({ type:reducerCases.SET_PLAYER_STATE, playerState: !playerState });
  };
  return <div className="flex items-end p-2 max-h-max">
    <div onClick={()=> changeTrack("previous")} className="p-4 text-xl hover:bg-myred mx-4 rounded-lg">PREV</div>
    <div className="state">{playerState ? <button className=" bg-white w-[40px] h-auto text-xl" onClick={changeState}><img src="./assets/pause.svg" alt="pause"/>PAUSE</button>
     : 
     <button onClick={changeState} className="w-[40px] h-auto text-xl rounded-lg"><img src="./assets/play.svg" alt="play"/>PLAY</button>}</div>
    <div onClick={()=> changeTrack("next")} className="p-4 text-xl hover:bg-myred mx-4 rounded-lg">NEXT</div>
  </div>
};