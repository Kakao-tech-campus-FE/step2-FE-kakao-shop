import React from 'react'
import { styled } from 'styled-components'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserReducer } from '../../reducers/loginSlice'

import GNBContainer from '../atoms/GNB/GNBContainer'
import GNBInnerBox from '../atoms/GNB/GNBInnerBox'
import GNBButton from '../atoms/GNB/GNBButton'
import GNBMyGroup from '../molecules/GNBMyGroup';
import GNBMainGroup from '../molecules/GNBMainGroup';


const Logobox = styled.div`
  margin: 0 10px;
  width: 30px; 
  height: 30px;
  background-image: url("https://blog.kakaocdn.net/dn/daL0ub/btsmROiKTyk/t2CmD7jf13LjIkJ3vrLjcK/tfile.svg");
  background-size: contain;
  background-repeat: no-repeat;
` 
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
        
        <GNBMainGroup>
          <Link to ="/">
            <Logobox />
          </Link>
          <GNBButton onClick={()=>{navigate("/")}}>상품목록</GNBButton>
        </GNBMainGroup>

        <GNBMyGroup>
          
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
        </GNBMyGroup>
      </GNBInnerBox>
    </GNBContainer>
  )
}

/* a@naver.com qqqq111! */
export default GNB