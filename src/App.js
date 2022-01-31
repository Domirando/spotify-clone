import './App.css';
import "./Login"
import Login from "./Login";
import {useEffect, useState} from "react";
import {getTokenUrl} from "./spotify";
function App() {
    const [token, setToken] = useState(null)
    useEffect( () => {
        let hash = getTokenUrl()
        window.location.hash = '';
        const _token = hash.access_token;
        if(_token) {
            setToken(_token)
        }
    }, [])
  return (
      <div>{token ? <h1>hi there</h1> : <Login />}</div>
  )
}

export default App;
