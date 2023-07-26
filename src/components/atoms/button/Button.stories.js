import Button from "./Button.jsx";

export default {
  title: "atoms/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    type: {
      control: "select",
      options: ["submit", "button"],
    },
    backgroundColor: { control: "color" },
    children: { control: "text" },
  },
};

export const Default = {};
