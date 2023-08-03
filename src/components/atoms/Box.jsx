import styled from "styled-components";

const BoxCss = styled.div`
    height: auto;

    display: flex;
    flex-direction:column;

    position: relative;
    width: 20rem;

`

//inputGroup의 컴포넌트를 감싸는 박스 컴포넌트. 

const Box = ({ children }) => {
    return (

        <BoxCss>{children}</BoxCss>
    )
}

export default Box;