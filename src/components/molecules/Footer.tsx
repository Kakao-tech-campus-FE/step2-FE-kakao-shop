import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../atoms/Container';

const Footer = () => {
  return (
    <div className='h-44 border-t border-gray-200 bg-slate-50'>
      <Container className='flex py-4'>
        <Link to='/'>
          <img
            width='144'
            height='20'
            alt='카카오톡 쇼핑하기'
            src='https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230707/130532/assets/images/pc/pc_foot_logo.png'
          />
        </Link>
        <div className='pl-8 text-xs leading-6 text-gray-400'>
          <p className='space-x-2'>
            <span>(주)카카오</span>
            <span>대표이사 : 홍은택</span>
            <span>주소 : 제주특별자치도 제주시 첨단로 242</span>
          </p>
          <p className='space-x-2'>
            <span>사업자등록번호 : 120-81-47521</span>
            <span>통신판매업신고 : 제2015 - 제주아라 - 0032호</span>
            <span>호스팅 사업자 : (주)카카오</span>
          </p>
          <p className='space-x-2'>
            <span>
              이메일 : <span>cs.shopping@kakaocorp.com</span>
            </span>
          </p>
          <small>
            <span>Copyright © Kakao Corp. All rights reserved</span>
          </small>
          <p>
            (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이 포함되어 있습니다.
            <br />
            개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문,
            배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
