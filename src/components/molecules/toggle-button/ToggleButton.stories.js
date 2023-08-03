import ToggleButton from "./ToggleButton.jsx";

export default {
  title: "week 1/Toggle Button",
  tags: ["autodocs"],
  component: ToggleButton,
  argTypes: {
    isTrue: { control: "boolean" },
    color: { control: "color" },
  },
};

export const Default = {
  args: {
    isTrue: true,
    color: "forestgreen",
  },
};
