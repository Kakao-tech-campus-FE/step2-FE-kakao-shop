import GlobalNavBar from "./GlobalNavBar.jsx";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "organisms/Global Navigation Bar",
  tags: ["autodocs"],
  component: GlobalNavBar,
  decorators: [withRouter],
  args: {
    isStorybookMode: true,
  },
};

export const Default = {};
