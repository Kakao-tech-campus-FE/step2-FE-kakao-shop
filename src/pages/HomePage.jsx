import { useDispatch } from "react-redux";
import GNB from "../components/organisms/GNB";
import { getUserCookie } from "../services/cookie";
import { setUserInfo } from "../store/slices/userSlice";

const HomePage = () => {
  // HomePage가 렌더링 될 때, 쿠키에 저장된 사용자 정보를 리덕스 스토어에 저장
  const dispatch = useDispatch();
  dispatch(setUserInfo(getUserCookie()));
  return <GNB />;
};
export default HomePage;
