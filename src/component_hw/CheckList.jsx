import {useState} from 'react'
import { styled } from 'styled-components'

function CheckList() {
  const [checkList, setCheckList] = useState([])

  const handleCheckList = (e) => {
    if (!checkList.includes(e.target.value)){
     setCheckList((prev) => [...prev, e.target.value]) 
    } else{
      setCheckList(checkList.filter((el) => el !== e.target.value))
    }
  }


  return (
  <CheckListWrap>
    <CheckLabel>
      <input type="checkbox" value="running" name="toDoList" onClick = {handleCheckList} checked={checkList.includes("running") ? true : false}/>
      Running
    </CheckLabel>
    <CheckLabel>
      <input type="checkbox" value="cooking" name="toDoList" onClick = {handleCheckList} checked={checkList.includes("cooking") ? true : false}/>
      Cooking
    </CheckLabel>
    <CheckLabel>
      <input type="checkbox" value="studying" name="toDoList" onClick = {handleCheckList} checked={checkList.includes("studying") ? true : false}/>
      Studying
    </CheckLabel>
  </CheckListWrap>  
  );
}

export default CheckList

const CheckListWrap = styled.div`
  border: 7px lightblue solid;
  border-radius: 10px;
  width: 150px;
  height: 100px;
  margin: 10px;
`

const CheckLabel = styled.label`
  display: block;
  margin: 7px 20px;
  font-weight: bold;
`

