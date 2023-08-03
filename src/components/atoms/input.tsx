import { InputHTMLAttributes, forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((
  props,
  ref,
) => (
  <input
    className="w-full border-b border-b-stone-400 py-3 outline-none
      focus:border-b-blue-950"
    ref={ref}
    {...props}
  />
));

export default Input;
