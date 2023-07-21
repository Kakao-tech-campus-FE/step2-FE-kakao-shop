import React from 'react'
import { comma } from "../../utils/convert"
import Photo from "../atoms/Photo"
import Containor from '../atoms/Containor'
import { styled } from 'styled-components'
import Title from '../atoms/Title'



function ProductInformationColumn( { product }) {
  const { productName, price, image } = product
  return (
    <div className= 'flex w-[920px] pt-[30px] pr-[29px] pb-[150px] border-r border-solid border-slate-200' >
      <Column className='w-full basis-[430px]'>
        <Photo src={image} alt={productName} size="430px"/>
      </Column>
      <Column className='w-[430px] basis-[430px] ml-auto pt-[20px]'>
        <Title className='block text-left text-[26px] leading-[35px] decoration-black font-medium'>{productName}</Title>
        <div className='pt-[15px] pr-[60px]'>
          <div className='bg-gray-900 inline-block rounded-[23px]'>
            <button className='px-[15px] h-[45px]'>
              <span className='text-[18px] text-white'>{comma(price)+'원'}</span>
            </button>
          </div>
        </div>
      </Column>
    </div>
  )
}

export default ProductInformationColumn

const Column = styled.div`

`
