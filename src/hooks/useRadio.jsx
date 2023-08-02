import { useState, useCallback } from 'react'

const useRadioBtn = (initial) => {
  const [value, setValue] = useState(initial)

  const handler = useCallback( event => {
    setValue(prev => event.target.id)
  }) 

  return [value, handler]
}

export default useRadioBtn