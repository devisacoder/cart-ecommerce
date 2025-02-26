import { DropDown } from './Categories.jsx'
import { ProviderContext } from '../../context/ProductContext.jsx';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/DropDown',
  component: DropDown,
  decorators: [
    (Story) => (
    <BrowserRouter>
      <ProviderContext>
        <Story />
      </ProviderContext>
    </BrowserRouter>
    ),
  ],
};

const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {};
