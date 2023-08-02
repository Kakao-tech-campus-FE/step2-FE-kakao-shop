import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Container from "../atoms/Container";

/**
 *
 * @param id 해당 요소의 id, input입력에 사용되어 유일해야 합니다.
 * @param value 해당 요소의 value, input입력에 사용됩니다.
 * @param label 해당 요소의 label
 * @param type 해당 input의 input type
 * @param placeholder 해당 input의 placeholder
 * @param onChange 해당 input의 onChange, handler을 이용하여, 해당 input의 value를 변경하는 함수를 넣어주세요.
 * @param errorMsg 해당 요소의 input 입력에 대한 에러 메시지
 * @param onBlur 해당 요소의 input 입력에 대한 onBlur, value를 감지 후 에러 메시지를 띄우는 함수를 넣어주세요.
 * @returns {JSX.Element} InputGroup
 * @constructor
 */

const InputGroup = ({
  id,
  value,
  label,
  type,
  placeholder,
  onChange,
  errorMsg = "",
  onBlur = () => {},
}) => {
  return (
    <Box className={`input-group ${id}`}>
      <Container className="input-group-label flex w-full justify-between p-1">
        <div>
          <Label htmlFor={id} className={`${id} `}>
            {label}
          </Label>
        </div>
        {
          <div className={`error-msg text-sm text-red-600 ${id}`}>
            {errorMsg}
          </div>
        }
      </Container>
      <div>
        <Input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </Box>
  );
};

export default InputGroup;
