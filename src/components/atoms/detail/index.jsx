import React from 'react'
import strPrice from 'utils/price'

export const DetailContainer = (props) => {
  return (
    <section className="flex px-3 justify-center m-auto gap-5">{props.children}</section>
  )
}

export const ImgBox = (props) => {
  return (
    <div className='w-1/2  max-w-[450px]'>{props.children}</div>
  )
}

export const InfoBox = (props) => {
  return (
    <div>
      <InfoTitle>{props.name}</InfoTitle>
      <InfoPrice>{props.price}</InfoPrice>
    </div>
  )
}

export const InfoPrice = (props) => {
  return (
    <div className='text-xl font-extrabold my-2'>
        {strPrice(props.children)}
    </div>
  )
}

export const InfoTitle = (props) => {
  return (
    <div className='text-base'>
      {props.children}
  </div>
)
}

export const RightContainer = (props) => {
  return (
    <div className="max-w-md w-1/2 min-w-[300px]">{props.children}</div>
  )
}