import React from "react";
import './Body.css'
import Header from './Header'
import {useDataLayerValue} from "./DataLayer";
export default function Body({ spotify }){
    const [{ daily_mix }, dispatch] = useDataLayerValue()
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={daily_mix?.images[0]?.url} alt=''/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Daily Mix</h2>
                    <p>{daily_mix?.description}</p>
                </div>
            </div>
        </div>
    )
}