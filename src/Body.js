import React from "react";
import './Body.css'
import Header from './Header'
export default function Body({ spotify }){
    return (
        <div className='body'>
            <Header spotify={spotify} />
        </div>
    )
}