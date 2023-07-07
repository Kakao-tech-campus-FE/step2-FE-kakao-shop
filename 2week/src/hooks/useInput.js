import { useState } from "react"

const useInput = (initialValue) => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(initialValue)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value })
    setLoading(false)
  }

  return { value, handleOnChange, loading };
}

export default useInput