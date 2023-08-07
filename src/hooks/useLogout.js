import { useDispatch } from "react-redux";
import { clearUserReducer } from "reducers/loginSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  dispatch(clearUserReducer());
}

export default useLogout