import './App.css';
import "./Login"
import Login from "./Login";
import {useEffect} from "react";
import {getTokenUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue()

    useEffect( () => {
        let hash = getTokenUrl()
        window.location.hash = '';
        const _token = hash.access_token;

        if(_token) {
            spotify.setAccessToken(_token)
            spotify.getMe().then(user => {
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
                dispatch({
                    type: 'SET_TOKEN',
                    token: _token
                })
            })
            spotify.getUserPlaylists().then(playlists => {
                dispatch({
                    type: 'SET_PLAYLIST',
                    playlists: playlists
                })
            })
        }
    }, [])
    console.log('user: ', user)
    console.log('token: ', token)
  return (
        <div>{token ? <Player spotify={spotify} /> : <Login />}</div>
  )
}

export default App;
