import MainShop from "../components/organisms/MainShop";
import { getLocalStorage } from "../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setEmail } from "../store/slices/userSlice";

const MainPage = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);
    useEffect(() => {
        const isLogin = JSON.parse(getLocalStorage("email"));
        if(isLogin) {
            dispatch(setEmail({
                email: isLogin.value,
            }));
        };
    }, [email]);

    return(
        <MainShop />
    );
};

export default MainPage;