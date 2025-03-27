import {  QueryClient, QueryClientProvider } from "react-query";
import { UploadYourProducts } from "./UploadYourProducts";

const queryClient = new QueryClient()

export default {
    title: 'Componente/UploadYourProducts',
    component: UploadYourProducts,
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <Story/>
            </QueryClientProvider>
        )
    ]
}

const Template = (args) => <UploadYourProducts {...args} />

export const Default = Template.bind({})
Default.args = {}