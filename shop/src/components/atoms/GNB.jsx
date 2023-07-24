import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { setEmail } from "../../store/slices/userSlice"


const GNB = () => {
    // 로그인 상태 확인
    const email = useSelector((state) => state.user.email)
    const loginTime = useSelector((state) => state.user.loginTime)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // 로그아웃 버튼 클릭 시 상태 초기화
    const handleLogout = () => {
      dispatch(setEmail({ email: "" }))
      localStorage.removeItem("email") // 로컬 스토리지에서도 제거
      localStorage.removeItem("loginTime")
      localStorage.removeItem("token")
      navigate("/")
    }

  // 페이지 로드 시 이메일 상태를 로컬 스토리지에서 가져옴
  useEffect(() => {
    const savedEmail = localStorage.getItem("email")
    const savedTime = localStorage.getItem("loginTime")

    // 이메일이 존재하고 로그인 지속 시간이 남아있다면
    if (savedTime && savedEmail) {
      const currentTime = Date.now()
      const elapsedTime = currentTime - parseInt(savedTime)
      const maxLoginTime = 86400000

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

  // 로그인 상태에 따라 로그인 또는 로그아웃 링크 반환
  const renderAuthLink = () => {
    if (email) {
      return (
        <button className="text-black text-xl hover:underline text-black-200" onClick={handleLogout}>
          로그아웃
        </button>
      );
    } else {
      return (
        <>
        <a href="/login" className="text-black text-xl hover:underline text-black-200">
          로그인
        </a>
        <a href="/signup" className="text-black text-xl hover:underline text-black-200">회원가입</a>
        </>
      );
    }
  };
  return (
    <header className="fixed top-0 left-0 p-5 bg-white border-b border-gray-300 flex items-center inner">
      <div style={{width :'2000px'}} className='ml-20 md:flex items-center '>
      <Link to='/'>
        <img className="h-10 inline cursor-pointer mr-4" src="/logoKakao.png" alt="logoKakao"/>
      </Link>
      <nav>
        <ul className = "flex space-x-4">
          <li>
            <Link to="/" className="text-black text-xl hover:underline text-black-200">홈</Link>
          </li>
          <li>
            <Link to="#" className="text-black text-xl hover:underline text-black-200">브랜드데이</Link>
          </li>
          <li>
            <Link to="#" className="text-black text-xl hover:underline text-black-200">베스트</Link>
          </li>
          <li>
            <Link to="#" className="text-black text-xl hover:underline text-black-200">라이브</Link>
          </li>
          <li>
            <Link to="#" className="text-black text-xl hover:underline text-black-200">기획전</Link>
          </li>
        </ul>
      </nav>
    
      <div className="flex flex-1 justify-end space-x-4 ">
        <Link to='/carts'><img src="/cart.png" style={{width:'30px'}} alt="장바구니 아이콘"/></Link>
        {renderAuthLink()}
      </div>
      </div>
    </header>
  )
}

export default GNB