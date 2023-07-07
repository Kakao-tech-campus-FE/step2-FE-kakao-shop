import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Label from '../atoms/Label';

/**
 * InputGroup component
 * id: id attribute
 * name: name attribute
 * type: type attribute
 * value: value attribute
 * onChange: event handler
 * placeholder: text inside input
 * className: custom class name
 * label: label text
 */
export default function InputGroup({
  id,
  name,
  type,
  value,
  onChange,
  className,
  label,
  placeholder,
}) {
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
      />
    </Box>
  );
}
