import User from './User'

let avatars = ['./assets/flow.svg', './assets/repo.svg']
let users = ['Shakhzod Undef']

export default {
    title: 'User-0',
    component: User,
}

const logged = (args) => <User {...args} />;
export const Logged = logged.bind({});
Logged.args = {
    logged: true,
    avatar: avatars[1],
    name: users[0],
}

const unlogged = (args) => <User {...args} />;
export const UnLogged = unlogged.bind({});
UnLogged.args = {
    logged: false,
    avatar: avatars[0],
    name: 'Log in',
}



