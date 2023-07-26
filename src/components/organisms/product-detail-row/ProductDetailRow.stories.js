import ProductDetailRow from "@/components/organisms/product-detail-row/ProductDetailRow.jsx";

export default {
  title: "molecules/Product Detail Row",
  tags: ["autodocs"],
  component: ProductDetailRow,
  argTypes: {
    imgSrc: { control: "text" },
    starCount: { control: "number" },
    productName: { control: "text" },
    price: { control: "number" },
  },
};

export const Default = {
  args: {
    imgSrc: "/images/1.jpg",
    starCount: 4,
    productName: "상품 이름",
    price: 50000,
  },
};
