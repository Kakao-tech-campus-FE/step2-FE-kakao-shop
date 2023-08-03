import React from 'react';

// children : Title 내부에 표시할 내용을 전달받음
const Title = ({children}) => {
    return (
        <>
             <h3>{children}</h3>
        </>
    );
};

export default Title;