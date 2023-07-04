import React from 'react';

const Button = ({onClick, children}) => {
    return (
        <>
            {/* button 컴포넌트를 만들때는 버튼의 기본 동작을 막아야 하는 경우가 많음 */}
            <button onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
            {children}
            </button>
        </>
    );
};

export default Button;