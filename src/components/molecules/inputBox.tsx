import { InputHTMLAttributes, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Input from '../atoms/input';

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
      <button
        type="button"
        className={`${isDirty ? 'visible' : 'invisible'}`}
        onClick={resetValue}
      >
        <FontAwesomeIcon
          icon={icon({ name: 'xmark', style: 'solid' })}
          title="입력 초기화"
        />
      </button>
    </div>
  </div>
));

export default InputBox;
