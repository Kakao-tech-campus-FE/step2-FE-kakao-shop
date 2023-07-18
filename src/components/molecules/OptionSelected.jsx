import React from 'react'
import { RiCloseFill } from "react-icons/ri";
import SelectedItemBox from 'components/atoms/option/SelectedItemBox';
import Counter from './Counter';


const OptionSelected = (props) => {
  return (
    <SelectedItemBox>
      <div className='flex'>
        <span>{props.optionName}</span>
        <button className='ml-auto' onClick={props.clear} >
          <RiCloseFill className='w-5 h-5 m-[-4px]'/>
        </button>
      </div>

      <div className='flex mt-3'>
        <Counter 
          sub={props.sub}
          add={props.add}
          quantity={props.quantity}
          change={props.change}
        />

        <div className='ml-auto'>{props.price}</div>
      </div>
    </SelectedItemBox>
  )
}

export default OptionSelected