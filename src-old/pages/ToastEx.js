import React, { useState, useEffect } from 'react';
import '../styles/ToastEx.css';
import Toast from "../components/Toast";

const ToastEx = () => {
    const [toasts, setToasts] = useState([]);
    const [message, setMessage] = useState('');

    const handleShowToast = () => {
        if (message.trim() !== '') {
            const newToast = {
                id: Date.now(),
                message: message,
                duration: 3000,
            };
            console.log('토스트 생성:', newToast);
            setToasts((prevToasts) => [...prevToasts, newToast]);
            setMessage('');
        }
    };

    const handleCloseToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleShowToast();
        }
    };

    return (
        <div>
            <h2>토스트</h2>
            <div className="input-wrapper">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="메시지를 입력하세요"
                />
                <button onClick={handleShowToast}>생성</button>
            </div>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    duration={toast.duration}
                    onClose={() => handleCloseToast(toast.id)}
                    className="toast"
                />
            ))}
            <p>엔터키를 눌러도 생성되며, 생성 위치는 우측 하단입니다.</p>
        </div>
    );
}


export default ToastEx;
