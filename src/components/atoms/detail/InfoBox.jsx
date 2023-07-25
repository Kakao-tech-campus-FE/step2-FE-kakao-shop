import React from 'react'
import InfoTitle from './InfoTitle'
import InfoPrice from './InfoPrice'


const InfoBox = (props) => {
  return (
    <div>
      <InfoTitle>{props.name}</InfoTitle>
      <InfoPrice>{props.price}</InfoPrice>
    </div>
  )
}

export default InfoBox