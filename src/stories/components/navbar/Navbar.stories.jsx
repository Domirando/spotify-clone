import React from 'react';
import avatar from '../../assets/avatar.png'
import { Navbar } from './Navbar';

export default {
  title: 'Spotify/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Domirando',
    avatar: avatar,
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const Search = Template.bind({});
Search.args = {
  search: true
};
