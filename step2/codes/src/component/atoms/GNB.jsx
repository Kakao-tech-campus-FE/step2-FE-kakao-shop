import { useDispatch, useSelector } from "react-redux";
import "../../styles/atoms/GNB.css";
import { Link } from "react-router-dom";
import { setEmail } from "../../store/slices/userSlice"
import { useEffect } from "react";

function GNB() {
    const email = useSelector((state) => state.user.email);
    const dispatch = useDispatch();
    
    // 로그아웃 버튼 클릭 시 상태 초기화
    const handleLogout = () => {
      dispatch(setEmail({ email: "" }));
      localStorage.removeItem("email"); // 로컬 스토리지에서도 제거
      localStorage.removeItem("token");
    }


    useEffect(()=> {
        dispatch(setEmail({ setEmail: email}))
    }, [email])

    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img className = "logoImg" src={"/logoKakao.png"} alt="logoKakao.png" height={30}/>
                </Link>
                <nav>
                    <div className="navigation">
                        <span className="menu_util">
                            {/* 장바구니 버튼 */}
                            <Link to="/cart">
                                <img className = "cartImg" src={"/cart.png"} alt="cart.png" height={30}/>
                            </Link>
                        </span>
                        <span></span>
                        <span>
                            {/* 로그인 버튼 */}
                        {email ? (
                                <Link className = "logButton" onClick={handleLogout} to="/"  style = {{textDecoration: "none", color: "black"}}>
                                    {" "}로그아웃
                                    {" "}
                                </Link>
                             ) : (
                                 <Link className = "logButton" to="/login" style = {{textDecoration: "none", color: "black"}}>
                                 {" "}로그인
                                 {" "}
                                 </Link>
                             )}
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default GNB;