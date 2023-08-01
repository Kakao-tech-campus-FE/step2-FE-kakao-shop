import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../store/slices/userSlice";
import MainProductTemplate from "../components/templates/MainProductTemplate";
import Carousel from "../components/atoms/Carousel";

const MainPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    useEffect(() => {
        try {
            const isLogin = JSON.parse(localStorage.getItem("user"));
            if (isLogin) {
                dispatch(setUser({
                    user: isLogin.value,
                }));
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
        }
    }, [user, dispatch]);
    return (
        <>
            <Carousel />
            <MainProductTemplate />
        </>
    );
};

export default MainPage;