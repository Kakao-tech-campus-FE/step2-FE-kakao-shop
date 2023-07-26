import Toast from "./Toast.jsx";

export default {
  title: "week 1/Toast",
  tags: ["autodocs"],
  component: Toast,
  argTypes: {
    label: {
      control: "text",
    },
    notification: {
      control: "text",
    },
    time: {
      control: "number",
    },
    position: {
      options: ["Top-Left", "Top-Right", "Bottom-Left", "Bottom-Right"],
      control: { type: "select" },
    },
    color: {
      control: { type: "color" },
    },
  },
};

export const Default = {
  args: {
    label: "Button",
    notification: "notification",
    time: 1000,
    position: "Top-Left",
    color: "blue",
  },
};

export const TopLeft = {
  args: {
    label: "Top Left",
    notification: "Top-Left notification",
    time: 1000,
    position: "Top-Left",
    color: "red",
  },
};

export const TopRight = {
  args: {
    label: "Top Right",
    notification: "Top-Right notification",
    time: 1000,
    position: "Top-Right",
    color: "green",
  },
};

export const BottomLeft = {
  args: {
    label: "Bottom-Left",
    notification: "Bottom-Left notification",
    time: 1000,
    position: "Bottom-Left",
    color: "purple",
  },
};

export const BottomRight = {
  args: {
    label: "Bottom Right",
    notification: "Bottom-Right notification",
    time: 1000,
    position: "Bottom-Right",
    color: "black",
  },
};
