import { styled } from "styled-components";

interface Props {
  // style을 받는 prop
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
}

const AuthContainer = ({ width, height, margin, padding, children }: Props) => {
  return (
    <StyledContainer
      width={width}
      height={height}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledContainer>
  );
};

export default AuthContainer;

const StyledContainer = styled.div<Props>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  border: 1px solid rgba(0, 0, 0, 0.12);
`;
