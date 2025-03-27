import { QueryClient, QueryClientProvider } from "react-query";
import { UploadForm } from "./UploadForm";

const queryClient = new QueryClient()

export default {
    title: 'Component/UploadForm',
    component: UploadForm,
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <Story/>
            </QueryClientProvider>
        )
    ]
}

const Template = (args) => <UploadForm {...args} />

export const Default = Template.bind({})
Default.args ={}