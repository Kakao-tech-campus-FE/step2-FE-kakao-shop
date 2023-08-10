import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GNB from '../components/organisms/GNB'
import { Outlet } from 'react-router-dom'

function RequiredAuthLayout() {
  const navigate = useNavigate()

  useEffect(()=>{
    if (localStorage.getItem("token") === null) {
      navigate('/login')
      alert("로그인이 필요한 서비스입니다.")
    }
  }, [navigate])

  return (
    <>
      <GNB />
      <Outlet /> {/*render child route*/}
    </>
  )
}

export default RequiredAuthLayout