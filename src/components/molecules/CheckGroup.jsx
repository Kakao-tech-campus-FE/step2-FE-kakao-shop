import React from 'react'
import CheckInput from '../atoms/cart/CheckInput';
import CartItemBox from '../atoms/cart/CartItemBox';


/**
 * 체크박스 & 항목정보 1세트로 구성된 컴포넌트 그룹
 * @param {object} props - props
 * @param {boolean} props.checked - 체크 여부
 * @param {string} props.className - 현재 항목 컴포넌트의 박스 스타일 지정
 * @param {function} props.checkHandler - 체크 변경 시 실행할 함수
 * @param {*} props.children - 항목 정보 컴포넌트
 * @returns {*} 
 */

const CheckGroup = ( props ) => {

  return (
    <CartItemBox style={props.style}>
      {/* <CheckInput 
        checked={props.checked}
        onChange={() => props.checkHandler(props.id)}
      /> */}
      {props.children}
    </CartItemBox>
  )
}

export default CheckGroup