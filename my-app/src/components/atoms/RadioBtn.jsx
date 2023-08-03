// children: RadioButton의 text
// value: 구분할 값
// name: 그룹을 짓기 위한 독립된 이름
// defaultChecked: 페이지가 랜더링 되었을 때 먼저 체크되어 있을 값 -> 현재 사용 안 함
// disabled: 사용 못하게 막는 용도 -> 현재 사용 안 함
// onChange: change 핸들러
const RadioBtn = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
  onChange,
  onClick,
}) => {
  return (
    <>
      <label>
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          onClick={onClick}
        />
        {children}
      </label>
    </>
  );
};

export default RadioBtn;
