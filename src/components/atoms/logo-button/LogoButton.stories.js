import LogoButton from "./LogoButton.jsx";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  title: "atoms/Logo Button",
  tags: ["autodocs"],
  component: LogoButton,
  decorators: [withRouter],
};

export const Default = {};
