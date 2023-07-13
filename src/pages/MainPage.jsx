import MainShop from "../components/organisms/MainShop";
import { getLocalStorage } from "../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../store/slices/userSlice";

const MainPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    useEffect(() => {
        const isLogin = JSON.parse(getLocalStorage("user"));
        if(isLogin) {
            dispatch(setUser({
                user: isLogin.value,
            }));
        };
    }, [user, dispatch]);

    return(
        <MainShop />
    );
};

export default MainPage;