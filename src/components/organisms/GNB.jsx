import { Link } from "react-router-dom";
import Container from "../atoms/Container";
import GNBMenuMy from "../molecules/GNBMenuMy";

const GNB = () => {
  return (
    <Container>
      <div>
        <Link to={"/"}>MainPage</Link>
      </div>
      <GNBMenuMy />
    </Container>
  );
};

export default GNB;
