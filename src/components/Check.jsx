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

  function toggledItem (obj) {
    const newObj = obj;
    newObj.buy = obj.buy ? false : true;
    console.log(newObj)
    return newObj
  };

  const toggle = (index) => {
    setList(prevList => 
      prevList.map((item, idx) => 
        idx === index ? toggledItem(item) : item
      )
    )
  };
  
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
      
      {list.map((item, i) => 
        (<p>{item.buy ? item.name : null}</p>)
      )}
    </>
  )
}

export default Check