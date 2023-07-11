import React from 'react';

// children : Box 내부에 표시할 내용을 전달받음
// className : Box에 적용할 CSS를 위한 className
const Box = ({children, className = "" }) => {
    return (
        <>
            <div className={`box ${className}`}>{children}</div>
        </>
    );
};

export default Box;