import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function RequiredAuthLayout() {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            alert("로그인이 필요한 서비스입니다.")
            navigate("/login")
        }
    }, [navigate])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default RequiredAuthLayout