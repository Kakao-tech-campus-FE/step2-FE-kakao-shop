import Breadcrumb from "./Breadcrumb.jsx";

export default {
  title: "week 1/Breadcrumb",
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
