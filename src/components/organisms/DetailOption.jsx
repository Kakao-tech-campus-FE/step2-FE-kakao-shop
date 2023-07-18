import React, { useState } from 'react'
import OptionContainer from '../atoms/option/OptionContainer'
import OptionListBox from 'components/atoms/option/OptionListBox'
import OptionItem from 'components/atoms/option/OptionItem'
import SubmitButton from 'components/atoms/SubmitButton'
import TotalPrice from 'components/atoms/option/TotalPrice'

const DetailOption = (props) => {
  const list = props.options.map((e) => { return {id:e.id, quantity: 0} })
  console.log(list)
  const [select, setSelect] = useState(list)
  const [open, setOpen] = useState(false)


  return (
    <OptionContainer>
      <OptionListBox open={open}>
        <OptionItem summary={true} onClick={()=>setOpen(prev=>!prev)}> 선택하기 </OptionItem>
        {open 
          ? props.options?.map((item)=>(
            <OptionItem 
              key={item.optionName}
              optionPrice={item.price}
            >
                {item.optionName}
            </OptionItem>
            ))
          : null
        }
        
      </OptionListBox>
      
      <TotalPrice price={30000} />
      <SubmitButton>구매하기</SubmitButton>
    </OptionContainer>
  )
}

export default DetailOption