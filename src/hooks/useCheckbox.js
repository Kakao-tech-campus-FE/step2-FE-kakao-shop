import { useState, useCallback, useEffect } from 'react'

const useCheckbox = (initial) => {
  const [checked, setChecked] = useState(new Set())
  const [allChecked, setAllChecked] = useState(false)

  useEffect(() => {
    if (checked.size !== initial.length) {
      setAllChecked(prev=> false)
    }
    else {
      setAllChecked(prev=> true)
    }
  }, [checked])

  
  const handler = useCallback( event => {
    
    if (event.target.id === "all") {
      const newChecked = new Set()

      if (event.target.checked) {
        for (const item of initial) {
          newChecked.add(item.id)
        }
      } 

      setChecked(prev => newChecked)
    }
    
    else {
      const newChecked = new Set(checked)

      if (newChecked.has(event.target.id)) {
        newChecked.delete(event.target.id)
      }
      else {
        newChecked.add(event.target.id)
      }

      setChecked(prev => newChecked)
    }
  }) 

  return [checked, handler, allChecked]
}

export default useCheckbox