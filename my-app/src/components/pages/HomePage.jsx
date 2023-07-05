import { styled } from "styled-components";
import GlobalNavBar from "../organisms/GlobalNavBar";

const Box = styled.div`
  height: 3000px;
`;

const HomePage = () => {
  return (
    <Box>
      <GlobalNavBar />
    </Box>
  );
};

export default HomePage;
