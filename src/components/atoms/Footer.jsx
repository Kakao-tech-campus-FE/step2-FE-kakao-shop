import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const staticServerUrl = process.env.REACT_APP_PATH || "";
const Footer = () => {
  return (
    <Container className='absolute bottom-0 left-0 inner'>
      <div className="my-10 flex justify-space gap-10">
        <Link to='/'>
          <img className="h-10 inline cursor-pointer" src={staticServerUrl +"/logoKakaoText.png"} alt="logoKakao"/>
        </Link>
        <div className="description">
          (주)카카오대표이사 : 홍은택주소 : 제주특별자치도 제주시 첨단로 242
          <br/>
          사업자등록번호 : 120-81-47521통신판매업신고 : 제2015 - 제주아라 - 0032호호스팅 사업자 : (주)카카오
          <br/>
          이메일 : cs.shopping@kakaocorp.com고객센터 : 1544-5664 (통화료 발생 / 평일 09:00~18:00) 톡상담하기 (평일 09:00~18:00)
          <br/>
          Copyright © Kakao Corp. All rights reserved
          <br/>햣
          (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이 포함되어 있습니다.
          <br/>
          개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </div>
      </div>
    </Container>
  )
}

export default Footer