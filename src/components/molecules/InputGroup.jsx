import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Group from "../atoms/Group";
import Msg from "../atoms/Msg";

const InputGroup = ({
  id,
  children,
  msgColor,
  helperMsg,
  errorMsg,
  ...inputProps
}) => {
  return (
    <>
      <Group>
        <Label htmlFor={id}>{children}</Label>
        <Input id={id} {...inputProps} />
        <Msg msgColor={errorMsg ? "red" : "gray"}>
          {helperMsg}
          {errorMsg}
        </Msg>
      </Group>
    </>
  );
};

export default InputGroup;
