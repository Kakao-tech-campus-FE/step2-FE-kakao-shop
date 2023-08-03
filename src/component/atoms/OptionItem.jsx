import { Container } from "postcss"
import styled from "styled-component"
const Container = styled.div`;`


const OptionLabel = styled.div `
font=weight: bold;
margin=bottom:0.5rem;`

const OptionItem = ( {item})=> {
    return(
        <Container>
        <div className="label"> 옵션 {idx +1}.</div>

        <div className="label"> 옵션 {idx +1}.</div>

        <div className="label"> 옵션 {idx +1}.</div>




        </Container>
    )
}