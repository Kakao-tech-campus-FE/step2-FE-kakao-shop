import React from 'react'

const SelectedItemBox = (props) => {
  return (
    <div className='flex-column bg-gray-100 p-3 mb-2'>{props.children}</div>
  )
}

export default SelectedItemBox