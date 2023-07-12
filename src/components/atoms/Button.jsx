import React from 'react';

// onClick : 사용자의 클릭 이벤트에 대한 감지 기능
// children : Button 내부에 표시할 내용을 전달받음
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