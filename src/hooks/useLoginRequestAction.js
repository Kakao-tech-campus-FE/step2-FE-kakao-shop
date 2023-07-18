import { useDispatch } from "react-redux";
import { loginRequest } from "../store/slices/userSlice";

const useLoginRequestAction = () => {
  const dispatch = useDispatch();

  const login = async (data) => {
    return dispatch(loginRequest(data));
  };

  return login;
};

export default useLoginRequestAction;
