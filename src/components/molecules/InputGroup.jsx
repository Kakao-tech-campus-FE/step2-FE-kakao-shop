import React from 'react'
import { Input, Label } from "components/atoms/form"

const InputGroup = ( {id, label, type, onChange, message} ) => {
  return (
    <div className='px-2'>
      <div className='flex items-center w-full'>
        <Label htmlFor={id} className='w-[120px]'>{label}</Label>
        <Input id={id} 
          type={type} 
          placeholder={label} 
          onChange={onChange} />
      </div>

      <div className='pt-1.5'>
        { message && 
          <span className='text-sm pl-[128px]'>{message}</span> 
        }
      </div>
    </div>
  )
}

export default InputGroup

