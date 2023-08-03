import { useParams } from "react-router-dom";
import OptionItem from "../atoms/OptionItem";

const OrderList = ({ items }) => {
  const { id } = useParams();

  return (
    <div className="text-sm border p-2 w-[50rem]">
      <OptionItem options={items.productName}>상품명</OptionItem>
      <OptionItem options={id}>주문번호</OptionItem>
      <OptionItem
        options={items?.items.map((item) => {
          return <div key={id + 1}>{item.optionName}</div>;
        })}
      >
        옵션
      </OptionItem>
    </div>
  );
};

export default OrderList;
