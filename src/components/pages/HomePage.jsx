import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <br/>
      <Link to={'/signup'}>회원가입</Link>
      <br/>
      <Link to={'/login'}>로그인</Link>
    </>
  )
}

export default HomePage