import React from 'react';
import '../../styles/Player.css'
import Sidebar from '../sidebar/Sidebar'
import Body from './Body'
import Footer from "../footer/Footer";

export default function Player({ spotify }){
    return (
        <div className='player'>
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}