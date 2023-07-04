import { useState } from "react"; 

const useInput = (initialValue) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue); 

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }))
    // console.log("e.target:", e.target);
  }; 

  return { value, handleOnChange };
}; 

export default useInput;