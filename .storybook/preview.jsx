/** @type { import('@storybook/react').Preview } */

import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme.js";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyle from "../src/styles/GlobalStyle.js";

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
];

export default preview;
