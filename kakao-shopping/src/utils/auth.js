import { userLogout } from "../store/userSlice";

const runLogoutTimer = (dispatch, timer) => {
    setTimeout(() => {
        dispatch(userLogout());
    }, timer);
};

export default runLogoutTimer;
