import React, { useState } from 'react';
import styled from 'styled-components';

const CheckedItems = styled.table`
  border-collapse: collapse;
  text-align:center;
  position: relative;
  top:200px;
  left:40%;
  td {
    padding: 10px 15px;
    border-bottom: 1px solid #000;
  }
  .name{
    width:150px;
  }
`

const Desc = styled.h1.attrs((props) => ({
  left: props.left,
  top: props.top
}))`
  position:absolute;
  top:${(props)=>props.top};
  left:${(props)=>props.left};
  text-align: center;
`
const Btn = styled.button`
  border: none;
  background-color: #fff;
  position:relative;
  top:16em;
  left:40%;
  background: lightseagreen;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;

 &:hover {
  background: darkcyan;
}
`
const List = styled.div`
  position:relative;
  top: 220px;
  left: 40%;
`
const data = [
  {id:1,name:'apple'},
  {id:2, name:'banana'},
  {id:3, name: 'Cherry'}
]

export default function Checkbox() {
  const [checkedItems, setCheckedItems] = useState([]) // 체크된 데이터를 저장할 배열
  const [showSelected, setShowSelected] = useState(false) // 선택된 요소들을 보여줄지 정함


  // onChange 이벤트 감지, 필요한 값 받아오기 
  const onCheckedItems = (checked, id) =>{
    if(checked){
      // 체크되면 체크된 아이템을 배열에 추가
      setCheckedItems([...checkedItems, id]);
      console.log(checkedItems)
    } else{
      // 체크 해제 시 아이템을 배열에서 삭제 ==> 겹치는 item이 들어오면 추가하지 않음
      setCheckedItems(checkedItems.filter((el)=> el !== id ))
      console.log(checkedItems)
    }
  }

  const toggleShowSelected = () => {
    setShowSelected(!showSelected) // 선택된 요소들을 보여줄지 반전
  }

  return (
    <>
    <Desc top='170px' left='40%'>[ Checkbox ]</Desc>
    <Desc top='220px' left='40%'>좋아하는거 다 골라~</Desc>
    <CheckedItems>
      <tbody>
        {data?.map((data,key)=>(
          <tr key={key}>
            <label>
            <td>
              <input type='checkbox' 
              name={data.name}
              // 클릭하면 이벤트를 통해 checkedItems에 요소가 추가된다.
              onChange={(e)=>onCheckedItems(e.target.checked, data.id)}
              // 체크 여부는 checkedItems 배열 안에 요소가 있으면 활성화 
              checked= {checkedItems.includes(data.id) ? true : false} />
            </td>
            <td className='name'>{data.name}</td>
            </label>
          </tr>
        ))}
      </tbody>
    </CheckedItems>

    <Btn onClick={toggleShowSelected}>
      {showSelected? '숨기기':'장바구니'}
    </Btn>
    {showSelected && (
      <List>
      <h3>장바구니:</h3>
        {checkedItems.map(Item => (
          // item.id = data 배열의 각 요소의 id 속성
          // id = 이전에 map에서 사용한 변수, 선택된 요소의 식별자 
          <div className='aa' key={Item}>{data.find(item => item.id === Item)?.name}</div>
        ))}
      </List>
    )}

    </>
  )
}
