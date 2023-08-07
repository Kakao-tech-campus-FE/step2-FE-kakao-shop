import React from "react";
import logokakao from "../../img/logoKakao.png"
import cart from '../../img/cart.png';
import { useSelector, useDispatch } from "react-redux";
// import { clearUser } from "../../store/slices/userSlice";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const staticServerUrl = "https://user-app.krampoline.com/k9d43d0d3ffc5a/"

const GNB=()=>{
    //const [isLogin, setIsLogin]=useState(false);
    const email = useSelector((state) => state.user.email);
    const dispatch = useDispatch();
//state안에 isLogin을 만들어 처리
const [isLogin, setIsLogin] = useState(false);

    // useEffect(()=>{
    //     if(localStorage.getItem("token")!=null) setIsLogin(true);
    // const checkExpiration = () => {
    //     if (user.expirationTime && user.expirationTime < new Date().getTime()) {
    //       dispatch(clearUser());
    //       localStorage.removeItem("user");
    //     }
    //   };

    // const interval = setInterval(checkExpiration, 1000);
    // return () => {
    //     clearInterval(interval);
    //   };
    // }, [user.expirationTime, isLogin]);

    const handleLogout=()=>{
        localStorage.removeItem("token");
        // dispatch(clearUser);
        setIsLogin(false)
        alert("정상적으로 로그아웃되었습니다.");
    };
    return(
        <header className="header flex justify-center items-center">
            <div className="flex justify-center items-center">
            <h1 className="navigation flex justify-center items-center">
                <Link to href="/">
                   <img src={logokakao} alt="카카오 쇼핑 로고" height={30}/>
                </Link>
            </h1>
                <nav>
                    <div className="navigation row">
                        
                            {/* 장바구니 버튼 */}
                            <Link to={staticServerUrl + "/cart"}>
                                <img src={cart} alt="장바구니 버튼" height={30}/>
                                {/* <span style={{}}>장바구니 버튼</span>
                                <ReactIcon.Card/> */}
                            </Link>
                        
                        <span>
                            {!isLogin ? (
                                <Link
                                to={staticServerUrl + "/login"}
                                onClick={handleLogout}
                                style={{textDecortation:"none", color:"black"}}
                                >
                                    {" "}
                                    로그아웃
                                </Link>
                            ):(
                                <Link
                                to={staticServerUrl + "/login"}
                                style={{textDecoration:"none", color:"black"}}
                                >
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