// className(CSS 적용 위한 클래스명)
// props: id(Label 구분자), name(훅에서 타Input 구분용 이름), type(입력 종류),
// onChange(변화(입력) 이벤트 함수), onKeyUp(특정 키입력 이벤트 함수),
// placeholder(임시 텍스트), value(Input내용)
export default function Input({ className = null, ...props }) {
  return <input className={className} {...props} />;
}
