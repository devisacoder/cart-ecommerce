import { Search } from "./Search"

export default {
    title: 'Components/Search',
    component: Search,
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}

const Template = (args) => <Search {...args} />

export const Default = Template.bind({})
Default.args ={}