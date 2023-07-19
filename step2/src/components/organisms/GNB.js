import Logo from "../atoms/Logo";
import MenuAccount from "../molecules/MenuAccount";

const GNB = () => {
  return (
    <div className="gnb">
      <Logo />
      <a style={{"margin": 10}}></a>
      <MenuAccount />
    </div>
  );
};

export default GNB;