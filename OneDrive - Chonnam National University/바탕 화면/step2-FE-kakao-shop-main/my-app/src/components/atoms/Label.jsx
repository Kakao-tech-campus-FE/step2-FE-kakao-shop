const Label = ({children, htmlFor, className}) => {
    return (
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
    )
  }
  
  export default Label;
  
  // - label은 폼의 양식에 이름 붙이는 태그이다.
  // - 주요 속성은 for이다. label의 for의 값과 양식의 id의 값이 같으면 연결된다.
  // - label을 클릭하면, 연결된 양식에 입력할 수 있도록 하거나, 체크를 하거나, 체크를 해제한다.
  
  // > for은 기본키로 설정되어있기 때문에 htmlFor을 사용한다.