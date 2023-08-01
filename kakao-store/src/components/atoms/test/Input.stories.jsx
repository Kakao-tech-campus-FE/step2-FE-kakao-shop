import Input from "../Input";

export default {
  title: "components/atoms/Input",
  component: Input,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "password", "number", "email"],
      },
    },
  },
};

const Template = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: "text",
  value: "",
  name: "input",
  placeholder: "입력해주세요",
  className: "font-bold",
  onChange: () => {
    console.log("Input Changed");
  },
};
