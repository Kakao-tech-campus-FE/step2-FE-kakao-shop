import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = ({ children, style }) => {
    return (
        <div className={`breadcrumb`} style={style}>
            {React.Children.map(children, (child, i) => {
                if (child.type === "a") {
                    return i !== React.Children.count(children) - 1 ? (
                        <>
                            <a {...child.props}></a>
                            <span className="material-symbols-outlined breadcrumb-next">
                                navigate_next
                            </span>
                        </>
                    ) : (
                        <a className="breadcrumb-current" {...child.props}></a>
                    );
                }
            })}
        </div>
    );
};

export default Breadcrumb;
