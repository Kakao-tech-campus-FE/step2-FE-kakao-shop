import React from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import { useSelector, useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import "../../styles/Molecules/Gnb.css";

const GNB = ({ showRegisterButton }) => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.user.email);

    const handleLogout = () => {
        // 로그아웃 처리 로직
    };

    const handleRegister = () => {
        dispatch(setEmail({ email: "example@example.com" }));
    };

    return (
        <nav className="gnb">
            <div className="gnb__left">
                <Link to="/">카카오 쇼핑</Link>
            </div>
            <div className="gnb__right">
                <Button onClick={handleLogout}>장바구니</Button>
                {email ? (
                    <Button onClick={handleLogout}>로그아웃</Button>
                ) : (
                    <>
                        {showRegisterButton && (
                            <Link to="/signup">
                                <Button onClick={handleRegister}>회원가입</Button>
                            </Link>
                        )}
                        {!showRegisterButton && (
                            <Link to="/login">
                                <Button>로그인</Button>
                            </Link>
                        )}
                    </>
                )}
            </div>
        </nav>
    );
};

export default GNB;
