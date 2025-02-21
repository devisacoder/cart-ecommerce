/** @type { import('@storybook/react-vite').StorybookConfig } */
import react from '@vitejs/plugin-react-swc';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    // Removemos el plugin react-swc para evitar la inyección duplicada del runtime
    config.plugins = config.plugins.filter(
      (plugin) => plugin.name !== "vite:react-swc"
    );
    return config;
  },
};

export default config;
