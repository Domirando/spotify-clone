import React from 'react';
import avatar from '../../assets/avatar.png'
import { Header } from './Header';

export default {
  title: 'Spotify/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Domirando',
    avatar: avatar,
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
