/*eslint-disable react/prop-types */
import styled from "styled-components";
import { comma } from "../../utils/convert";

/*
return
|_Container
| |_div(옵션)
| |_p(옵션 실제 이름)
| |_div(구매수량)
| |_p(실제 구매수량)
| |_div(금액)
| |_p(실제 계산된 금액)

*/

//입력받은 매개변수에 대해 내부의 아이템을 순회하며 옵션 아이템의 정보를 표시
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
