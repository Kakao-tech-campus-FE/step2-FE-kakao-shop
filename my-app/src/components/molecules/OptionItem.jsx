import { comma } from "../../utils/convert";
import Container from "../atoms/Container";

const OptionItem = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Container key={item.id} className="flex flex-col gap-2 border py-2">
          <div className="font-bold text-sm">옵션 {index + 1}</div>
          <p className="font-medium">{item.optionName}</p>
          <div className="font-bold text-sm">구매 수량</div>
          <p className="font-medium">{item.quantity}개</p>
          <div className="font-bold text-sm">금액</div>
          <p className="font-medium">{comma(item.price * item.quantity)}원</p>
        </Container>
      ))}
    </>
  );
};

export default OptionItem;
