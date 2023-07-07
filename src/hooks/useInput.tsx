import React, { useState } from 'react';

interface useInputProps {
  initialValue: {
    username?: string;
    email: string;
    password: string;
    passwordConfirm?: string;
  };
}

const useInput = ({ initialValue }: useInputProps) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value: newValue } = e.target;
    setValue((prev) => ({ ...prev, [id]: newValue }));
  };
  // const handleOnClick = () => {};
  return { value, handleOnChange };
};

export default useInput;
