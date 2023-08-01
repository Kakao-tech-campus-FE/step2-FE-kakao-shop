import InputGroup from "../InputGroup";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/molecules/InputGroup",
  component: InputGroup,
};

const Template = (args) => <InputGroup {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: "text",
  value: "",
  name: "input",
  placeholder: "입력해주세요",
  className: "font-bold",
  onChange: action("Input Changed"),
  label: "라벨",
  htmlfor: "input",
  labelClassName: "text-red-500",
  boxClassName: " bg-blue-500 font-bold p-2",
  buttonClassName: "font-bold",
  buttonText: "Button",
  onClick: action("Button Clicked"),
};
