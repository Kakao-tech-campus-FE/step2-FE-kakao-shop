/** @type { import('@storybook/react').Preview } */

import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme.js";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyle from "../src/styles/GlobalStyle.js";
import { HelmetProvider } from "react-helmet-async";
import { withRouter } from "storybook-addon-react-router-v6";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: { theme },
    defaultTheme: theme,
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle,
  }),
  (Story) => (
    <HelmetProvider>
      <Story />
    </HelmetProvider>
  ),
  withRouter,
];

export default preview;
