//import Container from "../atoms/Container";
import Header from "../molecules/Header";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { removeLocalStorageItem } from "../../utils/localStorage";

const MainShop = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const onClick = () => {
        if(user) {
            dispatch(setEmail({
                user: null,
            }));
            removeLocalStorageItem("user");
            window.location.reload();
        };
    };

    return(
        <>
            <Header user={user} onClick={onClick}/>
        </>
    );
};

export default MainShop;