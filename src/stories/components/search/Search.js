import React from 'react'
import PropTypes from "prop-types";
import './Search.css'
import { IoSearchOutline } from "react-icons/io5";

export const Search = ({ label, ...props }) => {
    return (
        <div className='search'>
            <IoSearchOutline size='24px' className='search_icon'/>
            <input className='search_input'
                   placeholder='Artists, songs, or podcasts'/>
        </div>
    )
}

Search.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

Search.defaultProps = {
    onChange: undefined,
}