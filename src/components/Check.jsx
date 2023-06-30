import React, { useState } from 'react'
import { styled } from 'styled-components';
import Toast from "./Toast";

const Container = styled.div`
  width: 300px;
  justify-content: middle;
`
const ProductBox = styled.div`
  display: flex;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background-color: white;
`;
const ProductImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  margin: 0 10px;
`;

const BuyBtn = {
  width: "300px",
  height: "30px",
  backgroundColor: "yellow",
  borderRadius: "10px",
  border:"none",
  textAlign: "center",
  fontFamily: 'Pretendard',
  margin: '5px 0'
}

const initProducts = [
    {
      name: '상품1',
      buy: true,
    },
    {
      name: '상품2',
      buy: true,
    },
    {
      name: '상품3',
      buy: true,
    },
  ];


const Check = () => {

  const [list, setList] = useState(initProducts);

  const toggledItem = (obj) => {
    const newObj = { ...obj };
    newObj.buy = newObj.buy ? false : true;
    console.log(newObj)
    return newObj
  };

  const toggle = (index) => {
    // setIsDone(false)
    setList(prevList => 
      prevList.map((item, idx) => 
        idx === index ? toggledItem(item) : item
      )
    )
  };

  const buylist = () => {
    const arr = Array();
    for (const item of list){
      if (item.buy) {
        arr.push(item.name)
      }
    }
    if (arr.length === 0) {
      return "선택한 상품이 없습니다."
    }
    return arr.join(" ")
  }

  return (
    <Container>
      {initProducts.map((item, i) => (
        <ProductBox>
          <input type="checkbox" defaultChecked={item.buy} 
          onChange={() => {toggle(i)}}/>
          <ProductImg></ProductImg>
          {item.name}
        </ProductBox>
        )
      )}
      
      <Toast
        button="주문하기"
        buttonstyle={ BuyBtn }
        message={buylist()}
      ></Toast>

    </Container>
  )
}

export default Check