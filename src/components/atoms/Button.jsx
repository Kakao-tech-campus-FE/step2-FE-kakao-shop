// Button
// onClick : 기본내장되어있는 업데이트를 막도록 설정
// children : 무슨버튼인지
import React from 'react';

function Button({ onClick, children, disabled }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (!disabled) {
          onClick();
        }
      }}
      disabled={disabled}
      type="submit"
      className={`flex w-full justify-center rounded-md ${
        !disabled ? 'bg-yellow-400 text-black' : 'bg-gray-300 text-gray-500'
      } px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400`}
    >
      <span style={{ color: '#3A1D1D' }}>{children}</span>
    </button>
  );
}

export default Button;
