import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

import "../../styles/atoms/GNB.css";
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";

function GNB(){
    //const [isLogin, setIsLogin]=useState(false);
    const email= useSelector((state)=> state.user.email)
    const dispatch = useDispatch();
//state안에 isLogin을 만들어 처리

    useEffect(()=>{
        if(localStorage.getItem("token")!=null) setIsLogin(true);
    }, [isLogin]);
    
    const handleLogout=()=>{
        localStorage.removeItem("token");
        dispatch(setEmail(null));
        alert("정상적으로 로그아웃되었습니다.");
    };
    return(
        <header className="header">
            <div className="contents">
                <Link to="/">
                   <img src={"/logoKakao.png"} alt="카카오 쇼핑 로고" height={30}/>
                </Link>
                <nav>
                    <div className="navigation">
                        <span>
                            {/* 장바구니 버튼 */}
                            <Link to="/cart">
                                <img src={"/cart.png"} alt="장바구니 버튼" height={30}/>
                                {/* <span style={{}}>장바구니 버튼</span>
                                <ReactIcon.Card/> */}
                            </Link>
                        </span>
                        <span></span>
                        <span>
                            {/* 장바구니 버튼 */}
                            {token ? (
                                <Link
                                to="/login"
                                onClick={handleLogout}
                                style={{textDecortation:"none", color:"black"}}
                                >
                                    {" "}
                                    로그아웃(" ")
                                </Link>
                            ):(
                                <Link
                                to="/login"
                                style={{textDecoration:"none", color:"black"}}
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
    )
}