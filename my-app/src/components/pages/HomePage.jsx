import { styled } from "styled-components";
import PrivateLayout from "../organisms/PrivateLayout";
import PublicLayout from "../organisms/PublicLayout";
import { useSelector } from "react-redux";

const Box = styled.div`
  height: 3000px;
`;

const HomePage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return <Box>{isLoggedIn ? <PrivateLayout /> : <PublicLayout />}</Box>;
};

export default HomePage;
