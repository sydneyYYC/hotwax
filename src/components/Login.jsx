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
    <div>
    <img src="/logo.svg" alt="a placeholder" />
    <button onClick={handleClick} className="bg-slate-200">Connect</button>
    </div>
  )
}