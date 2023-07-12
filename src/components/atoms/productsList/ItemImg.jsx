import React from 'react'
import { styled } from 'styled-components'

const ImgBox = styled.img`
  width: 100%;
  object-fit: cover;
`


const ItemImg = (props) => {
  return (
    <ImgBox src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${props.src}`} />
  )
}

export default ItemImg