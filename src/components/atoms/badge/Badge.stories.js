import Badge from "@/components/atoms/badge/Badge.jsx";

export default {
  title: "atoms/Badge",
  tags: ["autodocs"],
  component: Badge,
  args: {
    children: { control: "text" },
  },
};

export const Default = {
  args: {
    children: "badge",
  },
};
