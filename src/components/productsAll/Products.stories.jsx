import { BrowserRouter } from "react-router-dom";
import { ProviderContext } from "../../context/ProductContext";
import { AllProducts } from "./Products"

export default {
    title: 'Components/Products',
    component: AllProducts,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <ProviderContext>
                    <Story />
                </ProviderContext>
            </BrowserRouter>
        )
    ]
}

const Template = (args) => <AllProducts {...args} />

export const Default = Template.bind({})
Default.args = {}