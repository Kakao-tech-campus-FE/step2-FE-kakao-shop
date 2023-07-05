import InputBox from "../atoms/InputBox";
import InputLabel from "../atoms/InputLabel";
import Input from "../atoms/Input";
import Error from "../atoms/Error";

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
