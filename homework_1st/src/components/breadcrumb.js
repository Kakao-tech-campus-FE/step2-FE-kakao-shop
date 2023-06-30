import React from 'react';
import '../styles/breadcrumb.css';

const Breadcrumb = () => {
    return (
        <nav>
            <ol className="breadcrumb-items">
                <li className="breadcrumb-item">
                    <a href="#">First</a>
                </li>
                <li className="breadcrumb-item">
                    <a href="#">Second</a>
                </li>
                <li className="breadcrumb-item">
                    <a href="#">Third</a>
                </li>
                <li className="breadcrumb-item">
                    Fourth
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;
