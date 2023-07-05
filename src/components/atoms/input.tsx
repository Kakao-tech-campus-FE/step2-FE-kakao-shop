interface IInputProps {
  inputType: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  inputType,
  id,
  name,
  value,
  placeholder = '',
  handleChange,
}: IInputProps) {
  return (
    <input
      className="w-full border-b border-b-stone-400 py-3 outline-none
      focus:border-b-blue-950"
      type={inputType}
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}
