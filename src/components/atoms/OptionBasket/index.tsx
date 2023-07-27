import { CloseIcon } from "@components/Icons";
import { SelectedOption } from "@components/molecules/ProductOption";
import Counter from "@components/atoms/Counter";
import { comma } from "@utils/regex";
import { styled } from "styled-components";

interface Props {
  option: SelectedOption;
  setProductOptions: React.Dispatch<React.SetStateAction<SelectedOption[]>>;
}

const OptionBasket = ({ option, setProductOptions }: Props) => {
  const { id, quantity, price, optionName } = option;

  const handleOnChange = (count: number) => {
    setProductOptions((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            quantity: count,
          };
        }
        return el;
      });
    });
  };

  const handleOnClick = () => {
    setProductOptions((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  return (
    <Wrapper>
      <IconWrapper>
        <CloseIcon onClick={handleOnClick} />
      </IconWrapper>
      <p>{optionName}</p>
      <CountItem>
        <Counter init={1} onChange={(count) => handleOnChange(count)} />
        <span>{comma(quantity * price)}원</span>
      </CountItem>
    </Wrapper>
  );
};

export default OptionBasket;

const Wrapper = styled.div`
  position: relative;
  margin-top: 10px;
  padding: 19px 20px 15px 18px;
  border: 0 none;
  border-radius: 3px;
  background-color: #fafafa;

  & > p {
    font-size: 14px;
    padding-top: 1px;
  }
`;

const IconWrapper = styled.div`
  svg {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

const CountItem = styled.div`
  padding-top: 11px;
  position: relative;
  & > span {
    position: absolute;
    top: 17px;
    right: 3px;
  }
`;
