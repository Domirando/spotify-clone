import React from 'react'
import './dropdown.css'
import {DropdownMenu} from "./Dropdown";

export default {
    title: 'Spotify/Dropdown',
    component: DropdownMenu,
}

const Template = (args) => <DropdownMenu {...args} />

export const User = Template.bind({})
User.args = {}