import Input from '../atoms/input';
import XButton from '../atoms/xButton';

interface IInputBoxProps {
  // Input props
  inputType: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;

  // Control input value
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  resetValue: React.MouseEventHandler<HTMLButtonElement>;
}

export default function InputBox({
  inputType,
  id,
  name,
  value,
  placeholder = '',
  handleChange,
  resetValue,
}: IInputBoxProps) {
  return (
    <div className="flex flex-row px-2 pb-1 align-middle">
      <Input
        inputType={inputType}
        id={id}
        name={name}
        value={value}
        handleChange={handleChange}
        placeholder={placeholder}
      />
      <div className="my-auto flex">
        <XButton
          name={name}
          handleClick={resetValue}
          show={value !== ''}
        />
      </div>
    </div>
  );
}
