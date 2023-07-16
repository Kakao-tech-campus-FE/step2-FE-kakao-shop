import { InputHTMLAttributes, forwardRef } from 'react';
import Input from '../atoms/input';
import XButton from '../atoms/xButton';

interface InputBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  resetValue: React.MouseEventHandler<HTMLButtonElement>;
  isDirty: boolean;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>((
  {
    resetValue,
    isDirty,
    ...props
  }: InputBoxProps,
  ref,
) => (
  <div className="flex flex-row px-2 pb-1 align-middle">
    <Input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      ref={ref}
      name={props.name}
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
