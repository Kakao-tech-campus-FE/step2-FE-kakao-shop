import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../../styles/atoms/GNB.css"

function GNB() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage. getItem("token") != null) setIsLogin(true);
    }, [isLogin]);
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        alert ("정상적으로 로그아웃되었습니다.");
    };

    return (
        <header className="header"> 
            <div className="contents">
                <Link to="/">
                    <img src={"/logoKakao.png"} alt= "logoKakao.png" height={30} />
                </Link>
                <nav>
                    <div calssName="navigation">
                        <span>
                            <Link to="/cart">
                            <img src={"/cart.png"} alt= "logoKakao.png" height={30} />
                            </Link>
                        </span>
                        <span></span>
                        <span>
                            {isLogin ? (
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
    );
};