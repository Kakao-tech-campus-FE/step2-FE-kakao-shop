import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme.js";
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
    options: {
      storySort: {
        order: ["atoms", "molecules", "organisms", "templates", "week 1", "*"],
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </HelmetProvider>
  ),
  withRouter,
];

export default preview;
