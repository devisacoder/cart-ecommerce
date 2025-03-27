import { BrowserRouter } from "react-router-dom"
import { Header} from './Header'
import { QueryClient, QueryClientProvider } from "react-query"
import { ProviderContext } from "../../context/ProductContext"

const queryClient = new QueryClient()

export default {
    title: 'Components/Header',
    component: Header,
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ProviderContext>
                        <Story />
                    </ProviderContext>
                </BrowserRouter>
            </QueryClientProvider>
        )
    ]
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}