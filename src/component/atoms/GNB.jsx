import { useDispatch, useSelector } from "react-redux";
import "../../styles/atoms/GNB.css";
import { Link, useNavigate } from "react-router-dom";
import { setEmail } from "../../store/slices/userSlice"
import { useEffect } from "react";
import Button from "./Button";

function GNB() {

    const email = useSelector((state) => state.user.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // 로그아웃 버튼 클릭 시 상태 초기화
    const handleLogout = () => {
        localStorage.removeItem("email"); // 로컬 스토리지에서도 제거
        dispatch(setEmail({ email: "" }));
        localStorage.removeItem("token");
        alert("정상적으로 로그아웃 되었습니다.");
    }

    useEffect(()=> {
        dispatch(setEmail({ setEmail: email}))
    }, [dispatch, email])

    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img className = "logoImg" src={"/logoKakao.png"} alt="logoKakao.png" height={30}/>
                </Link>
                <nav>
                    <div className="navigation">
                        <span className="menu_util">
                            {/* 장바구니 버튼 *s/}
                            <Link to="/cart">
                                <img className = "cartImg" src={"/cart.png"} alt="cart.png" height={30}/>
                            </Link>
                        </span>
                        <span></span>
                        <span>
                            {/* 로그인 버튼 */}
                        {email ? (
                                <Button className = "logButton" onClick={handleLogout} style = {{textDecoration: "none", color: "black"}}>
                                    {" "}로그아웃
                                    {" "}
                                </Button>
                             ) : (
                                 <Button className = "logButton" onClick={() => {navigate("/login")}} style = {{textDecoration: "none", color: "black"}}>
                                 {" "}로그인
                                 {" "}
                                 </Button>
                             )}
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default GNB;