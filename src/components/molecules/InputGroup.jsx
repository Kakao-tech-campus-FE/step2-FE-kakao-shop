import Input from "../atoms/Input";
import Box from "../atoms/Box";
import Label from "../atoms/Label";

/** 입력 그룹
 *
 * @param {string} id - Input id
 * @param {string} name - Input name
 * @param {string} type - Input type
 * @param {string} value - Input value
 * @param {string} placeholder - Input placeholder
 * @param {string} label - Label label
 * @param {string} className - Box className
 * @param {function} onChange - Input onChange
 * @return {JSX.Element}
 */
const InputGroup = ({
  id,
  name,
  type,
  value,
  placeholder,
  label,
  className,
  onChange,
}) => {
  return (
    <Box className={className}>
      <div>
        <Label htmlFor={id}>{label}</Label>
      </div>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="relative w-full min-h-12 py-2 px-0 border-0 text-base leading-6 text-gray-900 bg-transparent tracking-normal box-border outline-none caret-black opacity-100"
      />
    </Box>
  );
};

export default InputGroup;
