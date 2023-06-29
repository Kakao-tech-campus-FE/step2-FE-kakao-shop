import React, { useState } from 'react'
import { styled } from 'styled-components';

const ProductBox = styled.div`
  display: flex;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  width: 300px;
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

const Buy = styled.button`
  
`


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
    setIsDone(false)
    setList(prevList => 
      prevList.map((item, idx) => 
        idx === index ? toggledItem(item) : item
      )
    )
  };
  
  const [isDone, setIsDone] = useState(false)

  const buy = () => {
    setIsDone(true)
  }

  const buylist = () => {
    const arr = Array();
    for (const item of list){
      if (item.buy) {
        arr.push(item.name)
      }
    }
    return arr.join()
  }

  return (
    <>
      {initProducts.map((item, i) => (
          <ProductBox>
            <input type="checkbox" defaultChecked={item.buy} onChange={() => {toggle(i)}}/>
            <ProductImg></ProductImg>
            {item.name}
          </ProductBox>
        )
      )}
      
      <Buy onClick={buy}>주문하기</Buy>
      <p>{isDone ? buylist() : null}</p>
    </>
  )
}

export default Check