import React from 'react'
import OptionContainer from '../atoms/detail/OptionContainer'

const ProductOption = (props) => {
  return (
    <OptionContainer>
      {props.options?.map((item)=>(
        <div key={item.optionName}>{item.optionName}</div>
      ))}
    </OptionContainer>
  )
}

export default ProductOption