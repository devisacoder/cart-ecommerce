import { BrowserRouter } from "react-router-dom"
import { Header} from './Header'

export default {
    title: 'Components/Header',
    componentL: Header,
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        )
    ]
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}