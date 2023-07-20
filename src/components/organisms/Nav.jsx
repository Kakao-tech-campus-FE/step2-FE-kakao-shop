import Swal from 'sweetalert2'
import { logoutMessage, clearTokens } from '../../utils/constants';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../styles/Nav.css";

const Nav = () => {
    const logout = () => {
        clearTokens();
        Swal.fire(logoutMessage)
        .then(() => {
            window.location.href = "/";
        })
    }

    const email = useSelector((state) => state.user.email);
    const token = localStorage.getItem("token");

    return (
      <div className="navbar">
        {email 
        ? <span className="navbarMenu">{email}님 안녕하세요!</span> 
        : <></>}
        <Link className="navbarMenu" to={"/"}>메인 화면</Link>
        <Link className="navbarMenu" to={"/ComponentsPage"}>컴포넌트 테스팅</Link>
        <Link className="navbarMenu" to={"/register"}>회원가입</Link>
        {token 
        ? <Link className="navbarMenu" onClick={logout}>로그아웃</Link> 
        : <Link className="navbarMenu" to={"/login"}>로그인</Link>}
      </div>
    );
};

export default Nav;
