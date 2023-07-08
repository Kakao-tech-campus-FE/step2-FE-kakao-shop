import React from 'react'
import { styled } from 'styled-components'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GNBContainer from '../atoms/GNBContainer'
import GNBInnerBox from '../atoms/GNBInnerBox'
import GNBButton from '../atoms/GNBButton'
import GNBMyGroup from '../molecules/GNBMyGroup';
import GNBMainGroup from '../molecules/GNBMainGroup';
import { clearUserReducer } from '../../reducers/loginSlice'

const TextBox = styled.div`
  margin: 0 10px;
`
const Logobox = styled.div`
  margin: 0 10px;
  width: 30px; 
  height: 30px;
  background-image: url("https://blog.kakaocdn.net/dn/daL0ub/btsmROiKTyk/t2CmD7jf13LjIkJ3vrLjcK/tfile.svg");
  background-size: contain;
  background-repeat: no-repeat;
` 
const GNB = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    // 1. 로컬스토리지 로그아웃
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('islogin')
    localStorage.removeItem('loginTime')
    navigate("./")

    // 2. REDUX 로그아웃
    dispatch(clearUserReducer())
  }
  
  // 로그인 시간 만료
  if (props.login && Date.now() > Number(localStorage.getItem("loginTime")) + 3600 * 24) {
    logout();
  }

  return (
    <GNBContainer>
      <GNBInnerBox>
        
        <GNBMainGroup>
          <Link to ="/">
            <Logobox />
          </Link>
        </GNBMainGroup>

        <GNBMyGroup>
          
          <GNBButton>장바구니</GNBButton> 
          {
            localStorage.getItem("email") !== null
            ? <>
                <TextBox>
                  {localStorage.getItem("email")}
                </TextBox>
                <TextBox onClick={logout}>
                  로그아웃
                </TextBox>
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