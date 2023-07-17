import RadioButton from "./RadioButton.jsx";

export default {
  title: "week 1/Radio Button",
  tags: ["autodocs"],
  component: RadioButton,
  argTypes: {
    options: { control: "object" },
    highlightColor: { control: "color" },
  },
};

export const Default = {
  args: {
    options: ["프론트엔드", "백엔드", "기획", "디자이너"],
    highlightColor: "#535bf2",
  },
};
