import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Gnb from "../components/organisms/Gnb";
import Footer from "../components/organisms/Footer";

const RequiredAuthLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token") === null) {
            alert("로그인이 필요한 서비스입니다.");
            navigate("/login");
        }
    }, [navigate]);

    return (
        <>
            <Gnb />
            <Outlet />
            <Footer />
        </>
    );
}

export default RequiredAuthLayout;