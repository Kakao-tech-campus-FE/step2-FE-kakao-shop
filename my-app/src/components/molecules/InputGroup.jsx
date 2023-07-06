import InputBox from "../atoms/InputBox";
import InputLabel from "../atoms/InputLabel";
import Input from "../atoms/Input";
import Error from "../atoms/Error";

// error: 유효한 값이 오면 false, 유효하지 않은 값이 오면 true
// errorMessage: error가 true일 때 띄울 메시지

const InputGroup = ({
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  error,
  errorMessage,
}) => {
  return (
    <InputBox>
      <InputLabel htmlFor={id} />
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error ? <Error>{errorMessage}</Error> : null}
    </InputBox>
  );
};

export default InputGroup;
