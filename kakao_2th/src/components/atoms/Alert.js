import React from "react";
import "../../styles/Atoms/Alert.css";

const Alert = ({ message }) => {
    return <div className="alert">{message}</div>;
};

export default Alert;
