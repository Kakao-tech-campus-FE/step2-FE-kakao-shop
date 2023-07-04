import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Toast.css'
import ToastBox from '../atoms/ToastBox'

const Toast = ({isValid, task}) => {
  const [list, setList] = useState([]);
  let toastProperties = null

  const showToast = (type) => {
    switch(type) {
      case true:
        toastProperties = {
            id: list.length+1, 
            title: "등록 성공!!",
            description: `${task}`,
            backgroundColor: 'green'
          };
        break;
      case false:
        toastProperties = {
            id: list.length+1, 
            title: "등록 실패...",
            description: "최소 작업량을 만족하지 못했습니다.",
            backgroundColor: '#d9534f'
          };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties])
  }

  return (
      <div className='root' style={{styles}}>
        <div className='wrapper'>
          <button 
            style={{
              width: '100px',
              height: '30px',
              color: 'white',
              backgroundColor: '#617d98',
              border: '3px solid lightGray',
              borderRadius: '5px',
            }} 
            onClick={() => showToast(isValid)}
          >일정 추가하기</button>
        </div>
        <ToastBox toastlist={list} setList={setList}/>
      </div>
  )
}

export default Toast