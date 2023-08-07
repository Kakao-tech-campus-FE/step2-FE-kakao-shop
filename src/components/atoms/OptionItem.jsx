import * as S from '../../styles/atoms/OptionItem';

const OptionItem = ({ items }) => {
  return (
    <S.Container>
      {items.map((item) =>
        item.quantity ? (
          <div key={item.id}>
            <S.Option>
              <span className="title">옵션</span>
              <span className="productOption">{item.optionName}</span>
            </S.Option>
            <S.Quantity>
              <span className="title">구매 수량</span>
              <span className="optionQuantity">{item.quantity}</span>
            </S.Quantity>
            <S.Price>
              <span className="title">금액</span>
              <span>{item.price * item.quantity}</span>
            </S.Price>
          </div>
        ) : null
      )}
    </S.Container>
  );
};

export default OptionItem;
