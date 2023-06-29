import React from 'react'
import './Toast.css';

const Toast = ( {title, children} ) =>  {
    const [active, setCheck] = React.useState(false);

    const handleClose = () => {
        setCheck((prev) => !prev)
    }

    const Title = () => {

    }

    return (
        <div className="toast">
            <button class="material-symbols-outlined toast-close"
                onClick={handleClose}>
                    close
            </button>
            <div>{title}</div>
            <div>{children}</div>
        </div>
    );
}

export default Toast;