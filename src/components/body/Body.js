import React from "react";
import '../../styles/Body.css'
import Header from './Header'
import {useDataLayerValue} from "../../../store/DataLayer";
import SongRow from './SongRow'
import {Favorite, MoreHoriz, PlayCircleFilled} from "@material-ui/icons";


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
            <div className="body_songs">
                <div className="body__icons">
                    <PlayCircleFilled className='body__shuffle' />
                    <Favorite />
                    <MoreHoriz />
                </div>
                {daily_mix?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}