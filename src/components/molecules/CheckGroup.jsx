import React, {useEffect} from 'react'
import CheckInput from '../atoms/cart/CheckInput';
import CartItemBox from '../atoms/cart/CartItemBox';


/**
 * 체크박스 & 항목정보 1세트로 구성된 컴포넌트 그룹
 * @param {object} props - props
 * @param {object[]} props.state - 전체 항목 리스트
 * @param {function} props.setState - state 상태를 관리하는 함수
 * @param {number} props.index - 전체 항목 리스트(props.state)에서 현재 항목의 인덱스
 * @param {object} props.style - 현재 항목 컴포넌트의 박스 스타일 지정
 * @param {*} props.children - 항목 정보 컴포넌트
 * @returns {*} 
 */

const CheckGroup = ( props ) => {

  // 체크를 토글하는 함수, props.state[props.index] 객체의 isChecked 를 토글
  const toggle = (i) => {
    props.setState(prevList => {
      const newList = [...prevList];
      newList[i] = { ...prevList[i], isChecked: !prevList[i].isChecked }
      return newList
    })
  }

  return (
    <CartItemBox style={props.style}>
      <CheckInput 
        defaultChecked={ props.state[props.index].isChecked } 
        onChange={() => toggle(props.index)}
      />
      {props.children}
    </CartItemBox>
  )
}

export default CheckGroup