import { forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';

interface InputProps {
  inputType: string;
  id: string;
  placeholder?: string;

  // react-hook-form register properties
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    inputType,
    id,
    placeholder = '',
    onChange,
    onBlur,
    name,
  }: InputProps,
  ref,
) => (
  <input
    className="w-full border-b border-b-stone-400 py-3 outline-none
      focus:border-b-blue-950"
    type={inputType}
    id={id}
    onChange={onChange}
    onBlur={onBlur}
    ref={ref}
    name={name}
    placeholder={placeholder}
  />
));

export default Input;
