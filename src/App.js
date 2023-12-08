import Login from './components/Login';
import React, {useEffect} from 'react';
import { useStateProvider } from './utils/StateProvider';
import Spotify from './components/Spotify';
import { reducerCases } from './utils/Constants';

function App() {
  const [{ token }, dispatch ] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      // this splits the access token from its string
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({type:reducerCases.SET_TOKEN, token})
    }
  },[dispatch])
  return <div>
    { token ? <Spotify /> : <Login />}
  </div> 
  } 

export default App;

// left off at 26:50 in https://www.youtube.com/watch?v=ajVcLGEw8Xw
