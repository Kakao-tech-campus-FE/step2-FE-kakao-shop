const OptionColumn = () => {
  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      <OptionList />
      <hr />
      <div className="totalPrice">
        <span>총 상품금액</span>
      </div>
      <div className="button-group"></div>
    </div>
  );
};

export default OptionColumn;
