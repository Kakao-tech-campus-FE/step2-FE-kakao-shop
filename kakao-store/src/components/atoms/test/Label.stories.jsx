import Label from "../Label";

export default {
  title: "components/atoms/Label",
  component: Label,
  argTypes: {
    children: {
      control: "text",
    },
    htmlfor: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
};

const Template = (args) => <Label {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "라벨",
  htmlfor: "input",
  className: "text-red-500",
};
