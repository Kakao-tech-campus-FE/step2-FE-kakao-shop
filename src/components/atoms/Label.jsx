import styled from "styled-components";

const LabelCss = styled.label`
    text-align : start;
    `

const Label = ({ htmlFor, child }) => {
    return (
        <LabelCss htmlFor={htmlFor}>{child}</ LabelCss>
    )
}

export default Label;