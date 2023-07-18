import ProductInfoCard from "@/components/organisms/product-info-card/ProductInfoCard.jsx";

export default {
  title: "organisms/Product Info Card",
  tags: ["autodocs"],
  component: ProductInfoCard,
  argTypes: {
    id: { control: "number" },
    productName: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    price: { control: "number" },
  },
};

export const Default = {
  args: {
    id: 1,
    productName: "첫 번째 상품을 아주 저렴한 가격에 판매 중",
    description: "",
    image: "/images/1.jpg",
    price: 50000,
  },
};
