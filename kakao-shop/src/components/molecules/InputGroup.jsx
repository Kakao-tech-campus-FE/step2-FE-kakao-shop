import Label from "../atoms/Label";
import Input from "../atoms/Input";

/**
 * 입력 그룹 컴포넌트
 * 입력 필드와 라벨을 묶어서 보여주는 컴포넌트
 *
 * @param {string} className - 그룹을 묶는 박스에 적용될 클래스
 * @param {string} label - 라벨에 보여질 텍스트
 * @param {string} id - input의 id
 * @param {string} name - input의 name
 * @param {string} value - input의 value
 * @param {function} onChange - input의 onChange 이벤트 핸들러 함수
 * @param {function} onFocus - input의 onFocus 이벤트 핸들러 함수
 * @param {function} onBlur - input의 onBlur 이벤트 핸들러 함수
 * @param {string} type - input의 type
 * @param {string} placeholder - input의 placeholder
 * @param {string} labelClassName - 라벨에 적용될 클래스. 라벨 스타일링을 할 필요성을 느껴서 추가함.
 * @returns {JSX.Element} - 입력 그룹 컴포넌트의 JSX 요소
 */
const InputGroup = ({
  className = "", // 그룹에 적용될 클래스
  label = "", // 라벨 텍스트
  id, // input의 id
  name, // input의 name
  value, // input의 value
  onChange, // input의 onChange
  onFocus, // input의 onFocus
  onBlur, // input의 onBlur
  type, // input의 type
  placeholder, // input의 placeholder
  labelClassName = "", // 라벨에 적용될 클래스. 라벨 스타일링을 할 필요성 느껴서 추가함.
}) => {
  return (
    <div className={className}>
      <Label className={labelClassName} htmlFor={id}>
        {label}
      </Label>
      <Input
        className=""
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
