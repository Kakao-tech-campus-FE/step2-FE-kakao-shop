import { Link } from "react-router-dom";
import React from "react";

import '../../styles/Nav.css'

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <Link className="navbarMenu" to={'/'}>메인 화면</Link>
                <Link className="navbarMenu" to={'/ComponentsPage'}>컴포넌트 테스팅</Link>
                <Link className="navbarMenu" to={'/login'}>로그인</Link>
                <Link className="navbarMenu" to={'/register'}>회원가입</Link>
            </div>
        </>
    )
}

export default Nav;