// htmlFor : label과 연결시킬 input의 id
// children : label의 내용으로 사용할 요소
const Label = ({ htmlFor, children, className="" })=> {
    return (
        <label
            htmlFor={htmlFor}
            className={className}
        >{children}</label>
    )
}

export default Label;