import { styled } from "styled-components";

interface Props {
  // style을 받는 prop과 data처리를 위한 htmlFor
  color?: string;
  fontSize?: string;
  htmlFor?: string;
  children: React.ReactNode;
}

const Label = ({ color, fontSize, htmlFor, children }: Props) => {
  return (
    <Wrapper color={color} fontSize={fontSize} htmlFor={htmlFor}>
      {children}
    </Wrapper>
  );
};

export default Label;

const Wrapper = styled.label<Props>`
  color: ${({ color }) => color || "black"};
  min-width: fit-content;
  padding: 0;
  font-size: ${({ fontSize }) => fontSize || "14px"};
  line-height: 20px;
  cursor: pointer;
`;
