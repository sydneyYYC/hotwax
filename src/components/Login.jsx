import React from "react";

const  {REACT_APP_spotifyClientId} = process.env
// this is our login page

export default function Login() {
  const handleClick = () => {
    const clientId=`${REACT_APP_spotifyClientId}`;
    const redirectUri = "http://localhost:3000";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = ['user-read-email','user-read-private', 'user-modify-playback-state', 'user-read-playback-state', 'user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-position', 'user-top-read'];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
   };
  return (
    <div className=" flex flex-col max-w-screen min-h-screen bg-baseblack bg-gradient-to-t from-baseblack to-darkred">
      <div className=" justify-self-center grid grid-cols-2 grid-rows-1 m-auto self-center p-6 max-w-max rounded-md justify-items-center">
      <h1 className=" self-center z-10 col-span-full row-start-1 font-bold text-white tracking-widest text-4xl p-2 bg-baseblack">HOT WAX</h1>
      <img className="col-span-full row-start-1"src="/assets/record.svg" alt="a placeholder" />
      </div>
      <button onClick={handleClick} className=" m-4 p-4 bg-myred  rounded-md text-white font-semibold max-w-max self-center">Connect to Spotify</button>
    </div>
  )
}
