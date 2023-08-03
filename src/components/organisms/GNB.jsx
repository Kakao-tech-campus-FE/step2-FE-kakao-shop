import React from 'react'

import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserReducer } from '../../reducers/loginSlice'

import { GNBContainer, GNBInnerBox, GNBButton, GNBMenuGroup, Logobox } from 'components/atoms/GNB'
import StyledLink from 'components/atoms/StyledLink';

const url = process.env.REACT_APP_PATH || "";

const GNB = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginState = useSelector((state) => state.login)

  const logout = () => {
    navigate(url + "/")
    dispatch(clearUserReducer())
  }
  

  return (
    <GNBContainer>
      <GNBInnerBox>
        
        <GNBMenuGroup>
          <StyledLink to ="/">
            <Logobox />
          </StyledLink>
          <GNBButton onClick={()=>{navigate(url + "/")}}>상품목록</GNBButton>
        </GNBMenuGroup>

        <GNBMenuGroup className="ml-auto">
          
          {loginState.islogin
            ? 
              <>  
                <GNBButton onClick={()=>{navigate(url + "/cart")}}>장바구니</GNBButton>
                <GNBButton onClick={logout}>로그아웃</GNBButton>
              </>
            : 
              <>
                <GNBButton onClick={()=>{navigate(url + "/login")}}>로그인</GNBButton>
                <GNBButton onClick={()=>{navigate(url + "/signup")}}>회원가입</GNBButton>
              </>
          }
        </GNBMenuGroup>
      </GNBInnerBox>
    </GNBContainer>
  )
}

export default GNB