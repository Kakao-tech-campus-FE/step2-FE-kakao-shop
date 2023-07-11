import { useSelector } from "react-redux";
import Gnb from "../components/organisms/Gnb";

const HomePage = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Gnb>{state ? "로그인" : "로그아웃"}</Gnb>
      <h1>메인페이지</h1>
    </>
  );
};

export default HomePage;
