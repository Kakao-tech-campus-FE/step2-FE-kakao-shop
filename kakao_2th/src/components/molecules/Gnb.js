import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../store/slices/userSlice";
import { setEmail } from "../../store/slices/userSlice";
import "../../styles/Molecules/Gnb.css";

const GNB = ({ showRegisterButton }) => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);
    const token = useSelector((state) => state.user.token)


    const handleLogout = () => {
        localStorage.removeItem("token")
        dispatch(setToken(null))
        alert("정상적으로 로그아웃되었습니다.")
    };

    const handleRegister = () => {
        dispatch(setEmail({ email: "example@example.com" }));
    };

    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img src={"/logoKakao.png"} alt="logoKakao.png" height={30} />
                </Link>
                <nav>
                    <div className="navigation">
                        <span>
                            <Link to="/cart">
                                <img src={"/cart.png"} alt="cart.png" height={30} />
                            </Link>
                        </span>
                        <span>|</span>
                        <span>
                            {email ? (
                                <Link
                                    to="/login"
                                    onClick={handleLogout}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    {" "}
                                    로그아웃{" "}
                                </Link>
                            ) : (
                                <Link
                                    to="/login"
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    {" "}
                                    로그인{" "}
                                </Link>
                            )}
                        </span>
                    </div>
                </nav>
            </div>
        </header>
        // <nav className="gnb">
        //     <div className="gnb__left">
        //         <Link to="/">카카오 쇼핑</Link>
        //     </div>
        //     <div className="gnb__right">
        //         <Button onClick={handleLogout}>장바구니</Button>
        //         {email ? (
        //             <Button onClick={handleLogout}>로그아웃</Button>
        //         ) : (
        //             <>
        //                 {showRegisterButton && (
        //                     <Link to="/signup">
        //                         <Button onClick={handleRegister}>회원가입</Button>
        //                     </Link>
        //                 )}
        //                 {!showRegisterButton && (
        //                     <Link to="/login">
        //                         <Button>로그인</Button>
        //                     </Link>
        //                 )}
        //             </>
        //         )}
        //     </div>
        // </nav>
    );
};

export default GNB;
