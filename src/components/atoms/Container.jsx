import React from 'react';

// children : Container 내부에 표시할 내용을 전달받음
// className : Container에 적용할 CSS를 위한 className(여기서는 container외에 여러 className 부여를 위함)
const Container = ({children, className = ''}) => {
    return (
        <>
            <div className={`container ${className}`}>{children}</div>
        </>
    );
};

export default Container;