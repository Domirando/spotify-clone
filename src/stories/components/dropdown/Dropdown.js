import {IoOpenOutline} from "react-icons/io5";
import React from "react";
import './dropdown.css'

export const DropdownMenu = (args) => {
    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    return (
        <div className="dropdown">
            {/*<CSSTransition timeout={500}>*/}
            <DropdownItem>Account</DropdownItem>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Upgrade to Premium</DropdownItem>
            <DropdownItem>Private Session</DropdownItem>
            <DropdownItem rightIcon={<IoOpenOutline />}>Settings</DropdownItem>
            <DropdownItem>Log out</DropdownItem>
            {/*</CSSTransition>*/}
        </div>
    )

}
