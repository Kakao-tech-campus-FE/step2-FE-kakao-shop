import Stars from "@/components/atoms/stars/Stars.jsx";

export default {
  title: "atoms/Logo Button",
  tags: ["autodocs"],
  component: Stars,
  argTypes: {
    starCount: { control: "number" },
  },
};

export const Default = {
  args: {
    starCount: 2,
  },
};
