import { CategoryProducts } from "./ProductsByCategory.jsx";
import { ProviderContext } from "../../context/ProductContext.jsx";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default {
    title: 'Components/CategoryProducts',
    component: CategoryProducts,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/category/promotions']}>
                <QueryClientProvider client={queryClient}>
                    <ProviderContext>
                        <Routes>
                            <Route path="/category/:categories" element={<Story />} />
                        </Routes>
                    </ProviderContext>
                </QueryClientProvider>
            </MemoryRouter>
        )
    ]
}

const Template = (args) => <CategoryProducts {...args} />

export const Default = Template.bind({});
Default.args = {}