import styled from "styled-components";

const ContainerCss = styled.div`

    width: 25rem;
    height: 45rem;

    display: flex;
    flex-direction: column;
    align-items: center;

`



const Container = ({ children }) => {
    return (

        <ContainerCss>{children}</ContainerCss>
    )
}

export default Container;