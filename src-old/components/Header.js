import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Header.css";

function Header() {
    const fontStyle = ({ isActive }) => {
        return {
            color: isActive ? "green" : "black",
            fontWeight: isActive ? "bold" : "normal"
        };
    };

    return (
        <header className="header">
            <nav className="navigation">
                <div>
                    <NavLink to="/" style={fontStyle}>
                        MAIN
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/BreadcrumbEx" style={fontStyle}>
                        브레드크럼
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/CarouselEx" style={fontStyle}>
                        캐러셀
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/ChecklistEx" style={fontStyle}>
                        체크리스트
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/RadioButtonEx" style={fontStyle}>
                        라디오버튼
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/ToastEx" style={fontStyle}>
                        토스트
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/ToggleButtonEx" style={fontStyle}>
                        토글버튼
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
