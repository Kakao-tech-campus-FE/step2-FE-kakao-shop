import { useState, useCallback } from 'react'

const useForm = (initial) => {
  const [obj, setObj] = useState(initial)
  
  const handler = useCallback( event => {
    const newObj = { ...obj, [event.target.id]: event.target.value }
    setObj(prev => newObj)
  }) 

  return [obj, handler]
}

export default useForm