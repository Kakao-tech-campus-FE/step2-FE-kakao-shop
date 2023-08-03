import { useState, useCallback, useEffect } from 'react'
import postLogin from 'api/login'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserReducer } from 'reducers/loginSlice'

const path = process.env.REACT_APP_PATH || "";

const useLogin = (user) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [wrong, setWrong] = useState(false)
  
  useEffect(()=>{
    setWrong(prev => false)
  }, [user])

  // 로그인 실패 횟수 : 로컬스토리지에 저장하고 최초 로딩시 초기값으로 불러오기
  const [failCnt, setFailCnt] = useState(() => {
    if (localStorage.getItem("failCnt") === undefined) {
      return  0
    } 
    return Number(localStorage.getItem("failCnt"))
  })

  const handler = useCallback( () => {
    postLogin(user)
      .then((response) => {
        // Redux store에 상태 저장
        dispatch(setUserReducer( {
          email: user.email,
          token: response,
          loginTime: Date.now(),
          islogin: true,
        } ))

        localStorage.removeItem("failCnt")  // 로그인실패횟수 초기화
        navigate(path + "/")
      })
      .catch((error) => {
        // 로그인 실패 시 실패횟수 +1, 실패 상태 true
        if (error.response && error.response.status === 401) {
          setFailCnt(prev => {
            localStorage.setItem('failCnt', prev + 1)
            setWrong(prev => true)
            return (prev + 1)
          })
        }
      }) 
  }) 

  return [handler, wrong, failCnt]
}

export default useLogin