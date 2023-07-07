import styled from "styled-components";

const BoxCss = styled.div`
    height: 6.5rem;

    display: flex;
    flex-direction:column;

    position: relative;

`


const Box = ({ children }) => {
    return (

        <BoxCss>{children}</BoxCss>
    )
}

export default Box;