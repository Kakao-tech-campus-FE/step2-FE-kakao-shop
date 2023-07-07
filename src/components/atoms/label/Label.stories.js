import Label from "./Label.jsx";

export default {
  title: "atoms/Label",
  tags: ["autodocs"],
  component: Label,
  argTypes: {
    htmlFor: { control: "text" },
    fontSize: { control: "text" },
    children: { control: "text" },
    color: { control: "color" },
    fontWeight: { control: "select", options: [500, 600, 700] },
  },
};

export const Default = {
  args: {
    htmlFor: "input",
    children: "label",
    fontSize: "0.9rem",
    color: "#222222",
    fontWeight: 500,
  },
};
Default.storyName = "Medium Label";

export const Big = {
  args: {
    htmlFor: "input",
    children: "Strong",
    fontSize: "1rem",
    color: "#000000",
    fontWeight: 700,
  },
};
Big.storyName = "Big Label";
