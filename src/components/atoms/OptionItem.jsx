import styled from "styled-components";
import { comma } from "../../utils/convert";

const Container = styled.div``;

const OptionItem = ({ items }) => {
  return (
    <>
      {items.map((item, idx) => {
        return (
          <Container key={item.id} className="flex flex-col gap-2">
            <div className="font-bold text-sm">옵션 {idx + 1}.</div>
            <p className="text-lg text-gray-400">{item.optionName}</p>
            <div className="font-bold text-sm">구매 수량</div>
            <p className="text-lg text-gray-400">{item.quantity}</p>
            <div className="font-bold text-sm">금액(옵션 금액 * 수량)</div>
            <p className="text-lg text-gray-400">
              {comma(item.price * item.quantity)}
            </p>
          </Container>
        );
      })}
    </>
  );
};

export default OptionItem;
