import './App.css';
import "./Login"
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null)
    const [{}, dispatch] = useDataLayerValue()
    useEffect( () => {
        let hash = getTokenUrl()
        window.location.hash = '';
        const _token = hash.access_token;
        if(_token) {
            setToken(_token)
            spotify.setAccessToken(_token)
            spotify.getMe().then(user => {
                console.log('🧑', user)
            })
            dispatch({
                type: ''
            })
        }
    }, [])
  return (
        <div>{token ? <Player /> : <Login />}</div>
  )
}

export default App;
