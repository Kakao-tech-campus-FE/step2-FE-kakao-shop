import OptionList from "../atoms/OptionList";

const OptionColumn = ({ product }) => {
  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      <OptionList /> {/* 옵션 담기 */}
      <hr /> {/* hr은 선, 구분선 */}
      <div className="total-price">
        <span>총 상품금액</span>
      </div>
      {/* 담긴 옵션이 표기 */}
      <div className="button-group"></div>
    </div>
  );
};

export default OptionColumn;