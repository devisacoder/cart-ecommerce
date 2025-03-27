import { DropDown } from './Categories.jsx'
import { ProviderContext } from '../../context/ProductContext.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();


export default {
  title: 'Components/DropDown',
  component: DropDown,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ProviderContext>
            <Story />
          </ProviderContext>
        </QueryClientProvider>
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {};
