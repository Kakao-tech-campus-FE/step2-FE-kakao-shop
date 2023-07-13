import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

import "../styles/Layout.css";

function Layout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;
