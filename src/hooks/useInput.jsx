import React, { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return { value, handleOnChange };
}
