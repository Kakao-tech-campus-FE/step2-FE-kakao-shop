import Button from "../Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    console.log("Button Clicked");
  },
  children: "Button",
  className: "font-bold",
};
