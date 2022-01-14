import React from 'react'
import PropTypes from "prop-types";
import './Search.css'
import {IoSearchOutline } from "react-icons/io5";

export const Search = ({ label, ...props }) => {
    return <input icon={ IoSearchOutline } className='search' placeholder='Artists, songs, or podcasts'/>
}

Search.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

Search.defaultProps = {
    onChange: undefined,
}