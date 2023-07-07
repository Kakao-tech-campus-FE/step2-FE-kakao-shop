import React from 'react'
import { styled } from 'styled-components'
import { useNavigate, Link } from 'react-router-dom';
import GNBContainer from '../atoms/GNBContainer'
import GNBInnerBox from '../atoms/GNBInnerBox'
import GNBButton from '../atoms/GNBButton'
import GNBMyGroup from '../molecules/GNBMyGroup';
import GNBMainGroup from '../molecules/GNBMainGroup';

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
        <GNBInnerBox>
          
            <GNBMainGroup>
                <Link to ="/">
                    <Logobox />
                </Link>
            </GNBMainGroup>

            <GNBMyGroup>
                <GNBButton>장바구니</GNBButton> 
                {
                  (props.login)
                  ? <TextBox onClick={logout}>
                      로그아웃
                    </TextBox>
                  : 
                  <>
                    <GNBButton onClick={()=>{navigate("/login")}}>로그인</GNBButton>
                    <GNBButton onClick={()=>{navigate("/signin")}}>회원가입</GNBButton>
                  </>
                }

            </GNBMyGroup>
        </GNBInnerBox>
    </GNBContainer>
  )
}

/* abcdef abcdef@naver.com aaaa1111! */
export default GNB