import React from 'react';
import PropTypes from "prop-types";

export default function Title(props) {
    return (
        <h1>Hello, {props.name}</h1>
    )
}

Title.propTypes = {
    name: PropTypes.string,
}
Title.defaultProps = {
    name: 'Name!'
}