import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

/**
 * 입력 필드와 라벨이 묶인 그룹
 *
 * @param {string} id - 입력 필드의 id
 * @param {string} name - 입력 필드의 이름
 * @param {string} type - 입력 필드 타입
 * @param {string} value - 입력 필드의 값
 * @param {function} onChange - 입력 필드 값 변경 이벤트 핸들러
 * @param {string} className - 입력 필드에 추가할 클래스
 * @param {string} label - 입력 필드의 라벨
 * @param {string} placeholder - 입력 필드의 placeholder
 * @returns {JSX.Element} - 입력 필드와 라벨이 묶인 그룹
 */

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

export default InputGroup;
