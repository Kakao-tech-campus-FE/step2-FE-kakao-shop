import { useState } from "react";

export default function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return [value, handleChange];
}
