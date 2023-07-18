import CheckList from "./CheckList.jsx";

export default {
  title: "Check List",
  tags: ["autodocs"],
  component: CheckList,
  argTypes: {
    options: { control: "object" },
    highlightColor: { control: "color" },
  },
};

export const Default = {
  args: {
    options: ["React", "Javascript", "Typescript", "Node.js", "Recoil"],
    highlightColor: "#535bf2",
  },
};
