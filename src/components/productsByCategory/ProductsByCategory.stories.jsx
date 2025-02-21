import { ProductsByCategory } from "./ProductsByCategory.jsx";
import { ProviderContext } from "../../context/ProductContext.jsx";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export default {
    title: 'Components/ProductsByCategory',
    component: ProductsByCategory,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/category/Salas']}>
                <ProviderContext>
                    <Routes>
                        <Route path="/category/:categories" element={<Story />} />
                    </Routes>
                </ProviderContext>
            </MemoryRouter>
        )
    ]
}

const Template = (args) => <ProductsByCategory {...args} />

export const Default = Template.bind({});
Default.args = {}