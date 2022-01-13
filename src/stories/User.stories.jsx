import User from './User'
import './assets/flow.svg';
import './assets/repo.svg';
import './user.css'

let avatars = ['./assets/flow.svg', './assets/repo.svg']
let users = ['Shakhzod Undef']

export default {
    title: 'User',
    component: User,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <User {...args} />;
export const Logged = Template.bind({});
Logged.args = {
    logged: true,
    avatar: avatars[1],
    name: users[0],
}

const unlogged = (args) => <User {...args} />;
export const UnLogged = Template.bind({});
UnLogged.args = {
    logged: false,
    avatar: avatars[0],
    name: 'Log in',
}



