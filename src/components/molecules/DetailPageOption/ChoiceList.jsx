import React from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import strPrice from 'utils/price';

const ChoiceList = ( {open, options, listOnClickHandler, titleOnClick} ) => {
  return (
    <ChoiceContainer open={open}>
      <ChoiceBox isTitle={true} onClick={titleOnClick}> 
        <span className='flex'> 
          선택하기 
          {open 
            ? <RiArrowUpSLine className='w-5 h-5 ml-auto'/>
            : <RiArrowDownSLine className='w-5 h-5 ml-auto'/>
          }
        </span>
      </ChoiceBox>

      {!open ? null : 
        options?.map((item)=>(
          <ChoiceBox onClick={() => listOnClickHandler(item.id)} key={item.optionName}>
            <span className='block'> {item.optionName} </span>
            <span> {strPrice(item.price)} </span>
          </ChoiceBox>
        ))
      } 
    </ChoiceContainer> 
  )
}

export default ChoiceList


const ChoiceContainer = ( {open, children} ) => {
  return (
    <div className={`divide-y divide-solid divide-gray-300 rounded my-4 
    border border-solid ${open ? "border-black" : "border-gray-300"} `}>
      {children}
    </div>
  )
}

const ChoiceBox = ( {onClick, isTitle, children} ) => {
  return (
    <ol onClick={onClick}
      className={`p-2 text-sm ${isTitle ? "bg-gray-50" : "hover:bg-gray-100"} `}
    >
      {children}
    </ol>
  )
}