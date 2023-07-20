import React from 'react';

const Counter = () => {
  return (
    <div className='relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent'>
      <button
        type='button'
        data-action='decrement'
        className='h-full w-20 cursor-pointer rounded-l border bg-white text-gray-600 outline-none  hover:text-gray-700'
      >
        <span className='m-auto text-2xl font-thin'>−</span>
      </button>
      <input
        type='tel'
        maxLength={3}
        inputMode='numeric'
        pattern='[0-9]*'
        className='text-md md:text-basecursor-default flex w-full items-center border-y bg-white text-center font-semibold text-gray-700  outline-none hover:text-black focus:text-black  focus:outline-none'
        name='custom-input-number'
        value='0'
      />
      <button
        type='button'
        data-action='increment'
        className='h-full w-20 cursor-pointer rounded-r border bg-white text-gray-600  hover:text-gray-700'
      >
        <span className='m-auto text-2xl font-thin'>+</span>
      </button>
    </div>
  );
};

export default Counter;
