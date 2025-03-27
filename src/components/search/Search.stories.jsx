import { QueryClient, QueryClientProvider } from "react-query"
import { Search } from "./Search"
import { ProviderContext } from "../../context/ProductContext"

const queryClient = new QueryClient()

export default {
    title: 'Components/Search',
    component: Search,
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <ProviderContext>
                    <Story />
                </ProviderContext>
            </QueryClientProvider>
        )
    ]
}

const Template = (args) => <Search {...args} />

export const Default = Template.bind({})
Default.args ={}