import styled from "styled-components";

const LabelCss = styled.label`
    text-align : start;
    `
// 박스 위에 박스의 이름을 명시해주는 라벨
//htmlFor 은 클릭 시 focus 될 아이디 값을 넘겨준다.
const Label = ({ htmlFor, child }) => {
    return (
        <LabelCss htmlFor={htmlFor}>{child}</ LabelCss>
    )
}

export default Label;