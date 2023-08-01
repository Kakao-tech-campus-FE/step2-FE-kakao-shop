import React from 'react'


export const OptionContainer = (props) => {
  return (
    <div className='flex flex-col'>  
      {props.children}
    </div>
  )
}

export const SelectedItemsContainer = (props) => {
  return (
    <div className='flex flex-col gap-2 mb-3'>{props.children}</div>

  )
}

export const SelectedItemBox = (props) => {
  return (
    <div className='bg-gray-100 p-3'>{props.children}</div>
  )
}

export const ButtonContainer = (props) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {props.children}
    </div>
  )
}