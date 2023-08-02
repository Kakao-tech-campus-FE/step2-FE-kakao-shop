/**
 *
 * @param id 해당 input의 id입니다. input의 유일성을 위해 사용됩니다.
 * @param type 해당 input의 type입니다.
 * @param value 해당 input의 value입니다.
 * @param placeholder 해당 input의 placeholder입니다.
 * @param onChange 해당 input의 onChange입니다. handler을 이용하여, 해당 input의 value를 변경하는 함수를 넣어주세요.
 * @param onBlur 해당 input의 onBlur입니다. value를 감지 후 에러 메시지를 띄우는 함수를 넣어주세요.
 * @returns {JSX.Element} Input
 * @constructor
 */
const Input = ({
  id,
  type,
  value,
  placeholder,
  onChange,
  onBlur = () => {},
}) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => {
      onChange(e);
    }}
    onBlur={onBlur}
    className={`input ${id} w-full border border-gray-300 p-2`}
  />
);

export default Input;
