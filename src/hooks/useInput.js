import { useState } from "react"

const useInput = (initialValue) => {
  const [form, setForm] = useState(initialValue)

  const handleOnChange = (e) => {
    const { name, value} = e.target
    setForm({...form, [name]: value})
  };
  return { form, handleOnChange }
}

export default useInput;