import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/BreadcrumbEx.css';
import Breadcrumb from "../components/Breadcrumb";

const routes = [
    { path: '/BreadcrumbEx', name: '브레드크럼', exact: 'true' },
];

const BreadcrumbEx = () => {
    const fontStyle = ({ isActive }) => {
        return {
            color: isActive ? "green" : "gray",
            fontWeight: isActive ? "bold" : "normal"
        };
    };

    return (
        <div>
            <h2>브레드크럼</h2>
            <Breadcrumb routes={routes} />
            <div>
                브레드크럼 테스트 페이지입니다! 아래 페이지를 눌러 이동할 수 있습니다.
            </div>
            <div>
                <NavLink to="/BreadcrumbEx/A" style={fontStyle}>
                    A로 이동
                </NavLink>
            </div>
            <div>
                <NavLink to="/BreadcrumbEx/B" style={fontStyle}>
                    B로 이동
                </NavLink>
            </div>
        </div>
    );
};

export default BreadcrumbEx;
