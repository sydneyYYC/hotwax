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
  return <div>
    <div>Shuffle</div>
    <div onClick={()=> changeTrack("previous")}>previous</div>
    <div className="state">{playerState ? <button onClick={changeState}>"pause"</button> : <button onClick={changeState}>"play"</button>}</div>
    <div onClick={()=> changeTrack("next")}>next</div>
    <div>repeat</div>
  </div>
};