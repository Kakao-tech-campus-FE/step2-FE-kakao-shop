import React from 'react';
import { NavLink } from 'react-router-dom';

const fontStyle = ({ isActive }) => {
    return {
        color: isActive ? "green" : "gray",
        fontWeight: isActive ? "bold" : "normal"
    };
};

const Breadcrumb = ({ routes }) => {
    const breadcrumbItems = routes.map((route, index) => (
        <li key={index}>
            <NavLink exact={route.exact} to={route.path} style={fontStyle}>
                {route.name}
            </NavLink>
            {index < routes.length - 1 && <span className="breadcrumb-arrow">{' > '}</span>}
        </li>
    ));

    return (
        <nav className="breadcrumb">
            <ul>{breadcrumbItems}</ul>
        </nav>
    );
};


export default Breadcrumb;
