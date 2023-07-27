import { Option } from "@components/organisms/ProductForm";
import { comma } from "@utils/regex";
import { styled } from "styled-components";

interface Props {
  options?: Option[];
  onClick: (option: Option) => void;
}

const OptionList = ({ options, onClick }: Props) => {
  return (
    <Wrapper>
      <OptionHeader>구성</OptionHeader>
      <ol>
        {options?.map((option, index) => (
          <li key={option.id} onClick={() => onClick(option)}>
            <p>{option.optionName}</p>
            <p>{comma(option.price)}원</p>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export default OptionList;

const Wrapper = styled.div`
  border: 1px solid #888;
  border-radius: 3px 3px 0 0;

  li {
    padding: 11px 19px 11px 14px;
    border-top: 1px solid #d5d5d5;
    cursor: pointer;
    & > p {
      font-size: 14px;
      padding-top: 1px;
    }
  }
`;

const OptionHeader = styled.div`
  padding: 11px 40px 12px 14px;
  background-color: #fafafa;
  color: #222;
`;
