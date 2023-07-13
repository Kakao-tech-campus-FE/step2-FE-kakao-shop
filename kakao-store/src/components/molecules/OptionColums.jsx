import OptionList from "../atoms/OptionList.jsx";

const OptionColums = ({ product }) => {
  return (
    <div className="option-columns">
      <h3>옵션 선택</h3>
      <OptionList />
      <hr />
      <div className="total-price">
        <span>총 상품금액</span>
      </div>
      <div className="button-group"></div>
    </div>
  );
};

export default OptionColums;
