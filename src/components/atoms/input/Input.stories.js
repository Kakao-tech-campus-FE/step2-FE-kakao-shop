import Input from "./Input.jsx";

export default {
  title: "components/atoms/Input",
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "number", "password"],
    },
    placeholder: { control: "text" },
  },
};

export const Default = {
  args: {
    type: "text",
    placeholder: "text",
  },
};
Default.storyName = "Text Input";

export const Password = {
  args: {
    type: "password",
    placeholder: "password",
  },
};
Password.storyName = "Password Input";

export const Number = {
  args: {
    type: "num",
    placeholder: "number",
  },
};
Number.storyName = "Number Input";
