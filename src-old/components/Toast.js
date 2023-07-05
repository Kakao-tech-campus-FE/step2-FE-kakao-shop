import React, { useState, useEffect } from 'react';

const Toast = ({ message, duration, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration]);

    const handleClose = () => {
        setVisible(false);
        onClose();
    };

    return visible ? (
        <div className="toast-container">
            <div className="toast-message">{message}</div>
            <button className="toast-close" onClick={handleClose}>
                &times;
            </button>
        </div>
    ) : null;
};

export default Toast;
