import React from 'react';
import GradientBorderBox from 'components/atoms/GradientBorderBox';


export const Input = ( props ) => {
  return (
    <input className='flex-grow border border-solid border-gray-500 rounded-md p-2' 
      id={props.id}
      type={props.type} 
      placeholder={props.placeholder}
      onChange={props.onChange}
      />
  );
};

export const Label = ( props ) => {
  return (
    <div 
      htmlFor={props.htmlFor}
      className={props.className}>
      {props.children}
    </div>
  );
};

export const FormContainer = (props) => {
  return (
    <GradientBorderBox className='w-[90%] max-w-[520px] m-auto p-6 space-y-5'>
      {props.children}
    </GradientBorderBox>
  );
}