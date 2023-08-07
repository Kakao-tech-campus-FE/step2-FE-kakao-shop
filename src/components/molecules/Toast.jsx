import React, { useEffect } from 'react' 
import { ToastBox, ToastBtn, ToastContent } from 'components/atoms/toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toastOffReducer, toastOnReducer } from 'reducers/toastSlice';

export const useToast = () => {
  const dispatch = useDispatch();
  const setToast = (message, moveTo="") => {
    dispatch(toastOnReducer( {
      isOn: true,
      message: message,
      moveTo: moveTo,
    }))
  }
  return setToast
}

const path = process.env.REACT_APP_PATH || "";

const Toast = () => {
  const dispatch = useDispatch()
  const toastState = useSelector((state) => state.toast)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(toastOffReducer())
    }, 3000)

    return () => { clearTimeout(timer) }

  }, [dispatch, toastState.isOn])
  
  const btnHandler = () => {
    if (toastState.moveTo !== "") {
      navigate(path + toastState.moveTo)
    }
    dispatch(toastOffReducer())
  }

  return (
    toastState.isOn && 
    <ToastBox>
      <ToastContent>
        {toastState.message}
      </ToastContent>
      <ToastBtn onClick={btnHandler}>
        {toastState.moveTo !== "" ? "바로가기" : "닫기"}
      </ToastBtn>
    </ToastBox>
  )
}

export default Toast