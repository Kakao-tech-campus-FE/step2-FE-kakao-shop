import styled, {css} from "styled-components";

export const ToggleBtn = styled.button`
    margin: 0 auto;
    margin-top: 50px;
    width: 130px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: ${(props) => (!props.toggle ? "rgb(241, 144, 144)" : "rgb(242, 214, 178)")};
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
`

export const Circle = styled.div`
    background-color: white;
    width: 38px;
    height: 38px;
    border-radius: 50px;
    trasition: all 0.5s ease-in-out;
    position: absolute;
    left: 5%;
    ${(props) => props.toggle ? 
        css`
            transform:translate(80px, 0);
            transition: all 0.5s ease-in-out;
        ` :
        css`
        transform:translate(0px, 0);
        transition: all 0.5s ease-in-out;`
    }
`

export const Text = styled.div`
    margin-top: 10px;
    font-size: 0.8em;
    text-align: center;
`