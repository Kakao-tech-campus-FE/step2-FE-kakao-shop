import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";

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
    <Box className={className}>
      <Label className={labelClassName} htmlFor={id}>
        {label}
      </Label>
      <Input
        className="w-4/5"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default InputGroup;
