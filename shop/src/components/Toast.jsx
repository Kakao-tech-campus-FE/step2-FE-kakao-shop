import React, { useEffect, useState } from 'react';
import '../styles/toast.css';
import ToastMsg from './ToastMsg';
import styled from 'styled-components';

const Btn = styled.button`
  border: none;
  background-color: #fff;
.custom-button {
  position:relative;
  top:0px;
  left:40%;
  background: lightseagreen;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
}

.custom-button:hover {
  background: darkcyan;
}
`

const msgList = {
  complete: "확인되었습니다.",
  amend: "수정되었습니다.",
  cancel: "취소되었습니다."
};

export default function Toast() {
  const [toastStatus, setToastStatus] = useState(false) //toast가 켜지지 않은 상태
  const [toastMsg, setToastMsg] = useState("") // 표시할 메시지 상태
  const handleToast = (type)=>{
    if (!toastStatus){ 
      setToastStatus(true) // 클릭할 때마다 toast가 발생하도록 true를 반환 
      setToastMsg(msgList[type]) } // 클릭된 메세지의 타입을 보고 메세지 내용을 변경 
  }

  //toastStatus를 리스닝하고있다가 true가 되면 1초뒤에 false를 호출한다. 
  useEffect(()=>{
    if(toastStatus) {
      setTimeout(()=>{
        setToastStatus(false)
        setToastMsg("") //메세지도 빈 문자열로 변경
      }, 1000)
    }
  },[toastStatus])

  return (
    <>
    <div className='btnWrap'>
      <h1>[ Toast ]</h1>
    <Btn>
      <button className="custom-button" onClick={()=>handleToast("complete")}>확인</button>
      <button className="custom-button" onClick={()=>handleToast("amend")}>수정</button>
      <button className="custom-button" onClick={()=>handleToast("cancel")}>취소</button>
    </Btn>

    </div>
    <div>
      {toastStatus && <>
      <ToastMsg msg={toastMsg}/>
      </>}
    </div>
    </>
  )
}
