import React, { useState } from 'react'
import OptionContainer from '../atoms/detail/OptionContainer'
import OptionListBox from 'components/atoms/detail/OptionListBox'
import OptionItem from 'components/atoms/detail/OptionItem'
import SubmitButton from 'components/atoms/SubmitButton'
import TotalPrice from 'components/atoms/detail/TotalPrice'

const DetailOption = (props) => {
  const list = props.options.map((e) => { return {id:e.id, quantity: 0} })
  console.log(list)
  const [select, setSelect] = useState(list)



  return (
    <OptionContainer>
      <OptionListBox>
        {props.options?.map((item)=>(
          <OptionItem key={item.optionName}>{item.optionName}</OptionItem>
        ))}
      </OptionListBox>
      
      <TotalPrice price={30000} />
      <SubmitButton>구매하기</SubmitButton>
    </OptionContainer>
  )
}

export default DetailOption