import LabeledInput from "./LabeledInput.jsx";

export default {
  title: "molecules/Labeled Input",
  tags: ["autodocs"],
  component: LabeledInput,
  argTypes: {
    label: { control: "text" },
    id: { control: "text" },
    type: {
      control: "select",
      options: ["text", "number", "password"],
    },
    placeholder: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    label: "아이디",
    id: "userId",
    type: "text",
    placeholder: "abc123",
  },
};
