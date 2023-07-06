import Breadcrumb from "./Breadcrumb.jsx";

export default {
  title: "Breadcrumb",
  tags: ["autodocs"],
  component: Breadcrumb,
  argTypes: {
    path: {
      control: "object",
    },
  },
};

export const Default = {
  args: {
    path: ["Home", "storybook"],
  },
};
