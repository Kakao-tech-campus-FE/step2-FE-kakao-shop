import styled from "styled-components";

const ContainerCss = styled.div`

   /* width: 25rem; */
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

`

//inputGroup들 전체를 감싸는 컴포넌트.
const Container = ({ children }) => {
    return (

        <ContainerCss>{children}</ContainerCss>
    )
}

export default Container;