import { ProviderContext } from "../../context/ProductContext.jsx";
import { MemoryRouter } from "react-router-dom";
import { Slider } from "./Slider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();


export default {
  title: "Components/Slider",
  component: Slider,
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

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {};
