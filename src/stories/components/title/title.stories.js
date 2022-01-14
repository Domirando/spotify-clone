import Title from './title'

export default {
    title: 'Title',
    component: Title,
}

const Template = (args) => <Title {...args} />;
export const maftuna = Template.bind({})
maftuna.args = {
    name: 'Maftuna',
}

export const nick = Template.bind({})
nick.args = {
    name: 'Domirando',
}
export const sis = Template.bind({})
sis.args = {
    name: 'Odina',
}