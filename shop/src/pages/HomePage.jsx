import React, { useEffect } from 'react'
import Button from '../components/atoms/Button'
import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { setEmail } from "../store/slices/userSlice"

const HomePage = () => {
  // 로그인 상태 확인
  const email = useSelector((state) => state.user.email)
  const loginTime = useSelector((state) => state.user.loginTime)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = () => {
    // 클릭하면 로그인 페이지로 넘어감
    navigate("/login")
  }
  const handleReg = () => {
    // 클릭하면 회원가입 페이지로 넘어감
    navigate("/signup")
  }
  // 로그아웃 버튼 클릭 시 상태 초기화
  const handleLogout = () => {
    dispatch(setEmail({ email: "" }))
    localStorage.removeItem("email") // 로컬 스토리지에서도 제거
    localStorage.removeItem("loginTime")
  }

  // 페이지 로드 시 이메일 상태를 로컬 스토리지에서 가져옴
  useEffect(() => {
    const savedEmail = localStorage.getItem("email")
    const savedTime = localStorage.getItem("loginTime")

    // 이메일이 존재하고 로그인 지속 시간이 남아있다면
    if (savedTime && savedEmail) {
      const currentTime = Date.now()
      const elapsedTime = currentTime - parseInt(savedTime)
      const maxLoginTime = 3000

      // 24시간(86400000밀리초) 이상 경과한 경우 로그인 상태 초기화
      if (elapsedTime >= maxLoginTime) {
        handleLogout() // 유지 기간을 초과하여 로그아웃 수행
      } else {
        dispatch(setEmail({ email: savedEmail }))
      }
    }
  }, [dispatch])

  // 이메일 상태가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    if (email) {
      localStorage.setItem("email", email)
      localStorage.setItem("loginTime", loginTime.toString())
    }
  }, [email, loginTime])

  // 로그인 상태인 경우 홈페이지 내용 대신 다른 내용을 렌더링
  if (email) {
    return (
      <div className="container">
        <h2 className="title">
          HomePage
        </h2>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className='title bg-indigo-500/30 text-indigo-800'>{email}님, 반갑습니다.</h2>
          <Button onClick={handleLogout}>로그아웃</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h2 className="title">
        HomePage
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <h3 className='mb-3 font-bold text-indigo-800'> 기존 회원이라면 ? </h3>
        <Button className="" onClick={handleLogin}>
          로그인
        </Button>
        <h3 className='mt-20 font-bold text-indigo-800'> 기존 회원이 아니라면 ? </h3>
        <Button className="mt-3 " onClick={handleReg}>
          회원가입
        </Button>
      </div>

    </div>
  )
}

export default HomePage