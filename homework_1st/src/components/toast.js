import React, { useEffect } from 'react';
import '../styles/toast.css';

function Toast() {
    useEffect(() => {
        const slideUpElement = document.querySelector('.toast');
        slideUpElement.style.bottom = '1rem';

        const slideDown = () => {
            slideUpElement.style.bottom = '-12.5rem';
        };

        setTimeout(() => {
            slideDown();
        }, 3000);

        // Clean up the timeout
        return () => clearTimeout();
    }, []);

    return (
        <div className="toast"></div>
    );
}

export default Toast;
