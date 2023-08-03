import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../component/atoms/Footer";
import GNB from "../component/atoms/GNB";

function RequiredAuthLayout() {
    const staticServerUri = process.env.REACT_APP_PATH || "";

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") === null ) {
            alert("로그인이 필요합니다.");
            navigate(staticServerUri + "/login");
        }
    }, [navigate]);

    return (
        <>
            <GNB/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default RequiredAuthLayout;