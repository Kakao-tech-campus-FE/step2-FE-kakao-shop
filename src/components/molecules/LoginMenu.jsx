import LinkTo from "../atoms/LinkTo";
import Menu from "../atoms/Menu";
import { useEffect, useState, } from 'react'
import { useNavigate } from "react-router-dom";

function LoginMenu({style, }) {
  const [ loginCheck, setLoginCheck ] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token === 'null'){
      setLoginCheck(false)
    }
    else{
      setLoginCheck(true)
      setTimeout(()=>{
        localStorage.setItem('token', null);
        setLoginCheck(false)
        navigate("/")
      },1000*60*60)
    }
  })

  return (
    <Menu style={style}>
      <LinkTo to={'/signup'} style={{
        textDecoration: 'none',
        display: 'block',
        padding: '12px 0',
        fontSize: '14px',
        lineHeight: '30px',
        color: '#000',
        marginRight: '20px',
      }}>회원가입</LinkTo>

      {loginCheck ? <LinkTo to={'/'} style={{
      textDecoration: 'none',
      display: 'block',
      padding: '12px 0',
      fontSize: '14px',
      lineHeight: '30px',
      color: '#000',
    }} onClick={()=>{
      setLoginCheck(false)
      localStorage.removeItem('token')
      }}>로그아웃</LinkTo> :
      <LinkTo to={'/login'} style={{
        textDecoration: 'none',
        display: 'block',
        padding: '12px 0',
        fontSize: '14px',
        lineHeight: '30px',
        color: '#000',
      }}>로그인</LinkTo>}
    </Menu>
  )
}

export default LoginMenu

