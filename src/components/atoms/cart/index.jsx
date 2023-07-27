import React from 'react'

export const CartOptionBox = (props) => {
  return (
    <div className="flex flex-col border border-solid border-gray-300 m-2 p-3">
        {props.children}
    </div>
  )
}

export const CartCollectionBox = (props) => {
  return (
    <div className="flex flex-col w-full shadow-[0px_0px_4px_rgb(199,199,199)] rounded-lg p-3 my-2">
        {props.children}
    </div>
  )
}
