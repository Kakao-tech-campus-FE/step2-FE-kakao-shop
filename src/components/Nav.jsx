import { Link } from "react-router-dom";
import React from "react";

import '../styles/Nav.css'

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <Link className="navbarMenu" to={'/'}>메인 화면</Link>
                <Link className="navbarMenu" to={'/Page1'}>페이지1</Link>
                <Link className="navbarMenu" to={'/Page2'}>페이지2</Link>
                <Link className="navbarMenu" to={'/Page3'}>페이지3</Link>
                <Link className="navbarMenu" to={'/Page4'}>페이지4</Link>
                <Link className="navbarMenu" to={'/ComponentsTest'}>컴포넌트 테스팅</Link>
            </div>
        </>
    )
}

export default Nav;