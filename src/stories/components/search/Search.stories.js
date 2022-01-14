import React from 'react'
import './Search.css';
import {Search} from "./Search";

export default {
    title: 'Spotify/Search',
    component: Search,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}

const Template = (args) => <Search {...args} />

export const Primary = Template.bind({});
Primary.args = {
    label: 'Search'
}