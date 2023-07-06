//import Container from "../atoms/Container";
import Header from "../molecules/Header";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { removeLocalStorageItem } from "../../utils/localStorage";

const MainShop = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);

    const onClick = () => {
        if(email) {
            dispatch(setEmail({
                email: null,
            }));
            removeLocalStorageItem("email");
            window.location.reload();
        };
    };

    return(
        <>
            <Header email={email} onClick={onClick}/>
        </>
    );
};

export default MainShop;