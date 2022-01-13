import React from "react";
import PropTypes from "prop-types";

export const User = ({ username, logged, avatar,...props }) => {
    return (
        <details>
            <summary>
                <img src={avatar} alt='avatar'/>
                <p>{username}</p>
            </summary>
            <ol>
                <li>smth1</li>
                <li>smth2</li>
                <li>smth3</li>
            </ol>
        </details>
    )
}

User.propTypes = {
    username: PropTypes.string,
    logged: PropTypes.bool,
    avatar: PropTypes.string,
    onClick: PropTypes.func,
}
User.defaultProps = {
    username: null,
    logged: null,
    avatar: null,
    onClick: undefined,
}