import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Toast.css'

const ToastBox = ({ toastlist, setList }) => {
  const deleteToast = useCallback(id => {
    const toastListItem = toastlist.filter(e => e.id !== id)
    setList(toastListItem)
  }, [toastlist, setList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id)
      }
    }, 3000);

    return () => {
      clearInterval(interval)
    }
  }, [toastlist, deleteToast])

  return (
    <div className='container'>
      {
        toastlist.map((toast, i) => (
          <div 
            key={i} 
            style={{ backgroundColor: toast.backgroundColor }}
            className='notification'
          >
            <button className='button' onClick={() => deleteToast(toast.id)}>X</button>
            <div>
              <p className='title'>{toast.title}</p>
              <p className='description'>{toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

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