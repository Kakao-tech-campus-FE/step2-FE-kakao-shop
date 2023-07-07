import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom';

const GNBContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px rgb(199, 199, 199);
  background-color: white;
  margin-bottom: 20px;
`

const InnerContainer = styled.div`
  width: 1500px;
  display: flex;
  align-items: center;
  padding: 0 15px;
`

const TextBox = styled.div`
  margin: 0 10px;
`

const LoginBox = styled(TextBox)`
    margin-left: auto;
`


const GNB = (props) => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    navigate("./")
    window.location.reload()
  }
  
  if (props.login && Date.now() > localStorage.getItem("loginTime") + 3600 * 24) {
    logout();
  }

  return (
    <GNBContainer>
      <InnerContainer>
        <TextBox onClick={()=>{navigate("/")}}>메인</TextBox> 
        {
          (props.login)
          ? <LoginBox onClick={logout}>
              로그아웃
            </LoginBox>
          : 
          <>
            <LoginBox onClick={()=>{navigate("/login")}}>로그인</LoginBox>
            <TextBox onClick={()=>{navigate("/signin")}}>회원가입</TextBox>
          </>

        }
        </InnerContainer>
    </GNBContainer>
  )
}

/* abcdef abcdef@naver.com aaaa1111! */
export default GNB