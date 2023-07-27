import React from 'react'

import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserReducer } from '../../reducers/loginSlice'

import { GNBContainer, GNBInnerBox, GNBButton, GNBMenuGroup, Logobox } from 'components/atoms/GNB'


const GNB = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginState = useSelector((state) => state.login)

  const logout = () => {
    navigate("./")
    dispatch(clearUserReducer())
  }
  

  return (
    <GNBContainer>
      <GNBInnerBox>
        
        <GNBMenuGroup>
          <Link to ="/">
            <Logobox />
          </Link>
          <GNBButton onClick={()=>{navigate("/")}}>상품목록</GNBButton>
        </GNBMenuGroup>

        <GNBMenuGroup className="ml-auto">
          
          {loginState.islogin
            ? 
              <>  
                <GNBButton onClick={()=>{navigate("/carts")}}>장바구니</GNBButton>
                <GNBButton onClick={logout}>로그아웃</GNBButton>
              </>
            : 
              <>
                <GNBButton onClick={()=>{navigate("/login")}}>로그인</GNBButton>
                <GNBButton onClick={()=>{navigate("/signup")}}>회원가입</GNBButton>
              </>
          }
        </GNBMenuGroup>
      </GNBInnerBox>
    </GNBContainer>
  )
}

export default GNB