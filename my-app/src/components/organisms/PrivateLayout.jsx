import { styled } from "styled-components";
import Title from "../atoms/Title";
import PrivateNav from "../molecules/PrivateNav";

const Header = styled.header`
  position: sticky;
  top: 0;
  padding-left: 32px;
  padding-right: 32px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrivateLayout = () => {
  return (
    <Header>
      <Title>글로벌 내비게이션 바</Title>
      <PrivateNav />
    </Header>
  );
};

export default PrivateLayout;
