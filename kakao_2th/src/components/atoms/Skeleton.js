import React from "react";
import "../../styles/Atoms/Skeleton.css";

const Skeleton = () => {
    return (
        <div className="skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
        </div>
    );
};

export default Skeleton;
