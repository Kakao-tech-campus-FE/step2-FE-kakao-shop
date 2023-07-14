import OptionList from "../atoms/OptionList";

const OptionColumn = ({ product }) => {
  // hr = 선, 구분선
  return (
    <div className="option-column">
      <h3>옵션선택</h3>
      <OptionList />
      <div className="delivery-info">
        <div className="delivery-info-method">
          <h3>배송방법</h3>
          <p>택배배송</p>
        </div>
        <div className="delivery-info-deliveryprice">
          <h3>배송비</h3>
          <p>무료</p>
        </div>
      </div>
      <hr />
      <div className="total-price">
        <sapn>총 수량</sapn>
        <span>총 상품금액</span>
      </div>
      <div className="button-group"></div>
    </div>
  );
};

export default OptionColumn;
