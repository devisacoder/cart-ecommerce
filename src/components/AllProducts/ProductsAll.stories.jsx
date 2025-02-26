import { BrowserRouter } from "react-router-dom";
import { ProviderContext } from "../../context/ProductContext";
import { AllProducts } from "./ProductsAll"

export default {
    title: 'Components/ProductsAll',
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