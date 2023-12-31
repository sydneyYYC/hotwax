import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from 'axios';
import { reducerCases } from "../utils/Constants";

export default function Playlists(){
  const [{token, playlists}, dispatch]= useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', 
      {
        headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      }}); 
      const {items} = response.data;
      const playlists = items.map(({name,id}) =>{
        return {name,id};
      });
       dispatch({ type:reducerCases.SET_PLAYLISTS, playlists });
      };
    getPlaylistData();
  }, [token, dispatch]);
  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type:reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return <div className="text-white flex flex-col mt-2 justify-center items-center">
    <div className="">
      <ul> {
        playlists.map(({name, id})=> {
          return (
            <li className="border-[2px] border-darkred mb-2 text-sm mr-4 px-2" key={id} onClick={()=>changeCurrentPlaylist(id)}>{name}</li>
          )
        })
        }
      </ul> 
    </div>
  </div>
}