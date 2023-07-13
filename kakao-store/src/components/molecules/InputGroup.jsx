import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";
import PropTypes from "prop-types";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
}) => {
  return (
    <Box className={className}>
      <Label htmlfor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
};

InputGroup.propTypes = {
  id: PropTypes.string, // input 요소의 ID
  name: PropTypes.string, // input 요소의 이름 속성
  type: PropTypes.string, //  input 요소의 타입 (예: "username", "email", "password" 등)
  value: PropTypes.string, // input 요소의 값
  onChange: PropTypes.func, // input 값 변경 이벤트 핸들러
  className: PropTypes.string, // CSS 클래스
  label: PropTypes.string, // label 요소의 텍스트
  placeholder: PropTypes.string, // input 요소의 플레이스홀더 텍스트
};

export default InputGroup;
