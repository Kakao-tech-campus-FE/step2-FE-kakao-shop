import Logo from "../atoms/Logo";
import MenuUtil from "../molecules/GNB/MenuUtil";
import MenuAccount from "../molecules/GNB/MenuAccount";
import "../../style/molecules/GNB.css";

const GNB = () => {
  return (
    <div className="gnb">
      <Logo />
      <MenuUtil />
      <MenuAccount />
    </div>
  );
};

export default GNB;
