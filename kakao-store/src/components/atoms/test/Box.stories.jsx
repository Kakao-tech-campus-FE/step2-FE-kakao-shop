import Box from "../Box";

export default {
  title: "components/atoms/Box",
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Box",
  className: " bg-blue-500 font-bold p-2",
};
