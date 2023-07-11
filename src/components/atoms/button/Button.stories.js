import Button from "./Button.jsx";

export default {
  title: "atoms/button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    type: {
      control: "select",
      options: ["submit", "button"],
    },
    color: { control: "color" },
    children: { control: "text" },
  },
};

export const Default = {};
