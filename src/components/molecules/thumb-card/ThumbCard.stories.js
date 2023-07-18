import ThumbCard from "@/components/molecules/thumb-card/ThumbCard.jsx";

export default {
  title: "molecules/Thumb Card",
  tags: ["autodocs"],
  component: ThumbCard,
  argTypes: {
    badge: { control: "text" },
    imgSrc: { control: "text" },
    imgAlt: { control: "text" },
  },
};

export const Default = {
  args: {
    badge: "badge",
    imgSrc: "/images/1.jpg",
    imgAlt: "alt",
  },
};
