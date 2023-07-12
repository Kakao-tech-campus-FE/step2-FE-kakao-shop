import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components";
import "../App.css"
import cookies from "react-cookies";

const GNB = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1100;
    // width: 1280px;
    width: 100%;
    height: 79px;
    background-color: white;
    border-bottom: 1px solid #E5E5E5;
    // margin: 0 auto;
    // padding: 0 150px;
    display: flex;
    justify-content: space-between;
`;

const SignLink = styled.a`
    display: block;
    text-decoration: none;
    color: black;
    padding: 12px 0;
    font-size: 14px;
    
`;
export default function RootLayout() {
    const loginBtn = <SignLink href="/login">로그인</SignLink>;
    const logoutBtn = <SignLink onClick={() => {
        alert("logout");

        cookies.remove('token');

        window.location.reload();
    }}>로그아웃</SignLink>
    return (
        <div className="root-layout">
            <header>
                <GNB>
                    <div className="logoKakao">
                        <NavLink to="/">
                            <img src={`${process.env.PUBLIC_URL}\logoKakao.png`} style={{width: "90px"}}/>
                        </NavLink>
                    </div>
                    <div className="menu-util" >
                        <NavLink to="cart">
                            <img src={`${process.env.PUBLIC_URL}\cart.png`} style={{width: "28px", padding: "12px"}}/>
                        </NavLink>
                    </div>
                    <div className="menu_my">
                        { cookies.load('token') ? logoutBtn : loginBtn}
                    </div>
                </GNB>
                
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}