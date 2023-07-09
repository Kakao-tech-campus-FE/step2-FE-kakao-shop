import { ChangeHandler } from 'react-hook-form';
import { forwardRef } from 'react';
import Input from '../atoms/input';
import XButton from '../atoms/xButton';

interface InputBoxProps {
  // Input props
  inputType: string;
  id: string;
  placeholder?: string;

  // Control input value
  resetValue: React.MouseEventHandler<HTMLButtonElement>;

  // react-hook-form register properties
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
  isDirty: boolean;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>((
  {
    inputType,
    id,
    placeholder = '',
    resetValue,
    onChange,
    onBlur,
    name,
    isDirty,
  }: InputBoxProps,
  ref,
) => (
  <div className="flex flex-row px-2 pb-1 align-middle">
    <Input
      inputType={inputType}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      ref={ref}
      name={name}
    />
    <div className="my-auto flex">
      <XButton
        onClick={resetValue}
        isShow={isDirty}
      />
    </div>
  </div>
));

export default InputBox;
