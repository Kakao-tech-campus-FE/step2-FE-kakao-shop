import { styled } from "styled-components";
import Title from "../atoms/Title";
import PublicNav from "../molecules/PublicNav";

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

const PublicLayout = () => {
  return (
    <Header>
      <Title>글로벌 내비게이션 바</Title>
      <PublicNav />
    </Header>
  );
};

export default PublicLayout;
