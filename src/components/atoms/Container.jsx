import styled from "styled-components";

const StyledDiv = styled.div`
    width: 500px;
    height: 100%;
    margin: 0 auto;
`;

// children : container에 삽입할 요소
const Container = ({ children, className="" }) => {
    return <StyledDiv className={`container ${className}`}>{children}</StyledDiv>
}

export default Container;