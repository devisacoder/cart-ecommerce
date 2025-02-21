import { SlideItem } from './SliderItem'

export default {
    title: 'Components/SliderItem',
    component: SlideItem,
    decorators: [
        (Story) => (
            <Story />
        )
    ]
}

const Template = (args) => <SlideItem {...args} />

export const Default = Template.bind({})
Default.args = {}