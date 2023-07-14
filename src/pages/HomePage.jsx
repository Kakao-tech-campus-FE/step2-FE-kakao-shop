import { useSelector } from "react-redux";
import Gnb from "../components/organisms/Gnb";
import MainProductTemplate from "../components/templates/MainProductTemplate";

const HomePage = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Gnb>{state ? "로그아웃" : "로그인"}</Gnb>
      <MainProductTemplate />
    </>
  );
};

export default HomePage;
