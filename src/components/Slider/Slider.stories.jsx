import { ProviderContext } from "../../context/ProductContext";
import { Slider } from "./Slider";

export default {
    title: 'Components/Slider',
    component: Slider,
    decorators: [
        (Story) => (
            <ProviderContext>
                <Story />
            </ProviderContext>
        )
    ]
}

const Template = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {}