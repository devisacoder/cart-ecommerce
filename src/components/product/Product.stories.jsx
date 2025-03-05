import { MemoryRouter } from 'react-router-dom';
import { Product } from './Product.jsx';
import { ProviderContext } from '../../context/ProductContext.jsx';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default {
    title: 'Components/Product',
    component: Product,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/product/12']}>
                <QueryClientProvider client={queryClient}>
                    <ProviderContext>
                        <Routes>
                            <Route path="/product/:id" element={<Story/>} />
                        </Routes>
                    </ProviderContext>
                </QueryClientProvider>
            </MemoryRouter>
        )
    ]
}


const Template = (args) => <Product {...args} />

export const Default = Template.bind({})
Default.args = {}