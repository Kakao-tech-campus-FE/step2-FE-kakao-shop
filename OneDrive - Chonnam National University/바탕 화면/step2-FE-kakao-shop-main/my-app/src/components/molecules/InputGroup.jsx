import PropTypes from 'prop-types';
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const InputGroup = ({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
  error,
  errorMsg,
}) => {
  return (
    <Box className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
      {error ? errorMsg : ""}
    </Box>
  );
};

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default InputGroup;

//id : input과 label을 바인딩해 줄 값
//name : event.target에서 체크하기 위한 값 

// Input과 Label을 연결해주는 Box 컴포넌트
// Input의 onChange 이벤트가 발생하면 name에 해당하는 value의 값이 바뀌도록 설정이 필요함