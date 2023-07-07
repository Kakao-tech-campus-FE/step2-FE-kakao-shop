import React from 'react'
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import cart from '../../assets/img/cart.png'
import Containor from '../atoms/Containor';
import BorderLine from '../atoms/BorderLine';
import LoginPage from '../pages/LoginPage';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function GnbButton( {style}) {
  const token = localStorage.getItem('token')
  const [loginState, setLoginState] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    console.log(token)
    if(token==='null'){
      setLoginState(false)
    }else{
      setLoginState(true)
      setTimeout(()=>{
        localStorage.setItem('token', null);
        setLoginState(false)
        navigate("/")
      },1000*60*60)
    }
  },[])

  return (
    <Containor style = { {display: 'flex', ...style}}>
      <Image src={cart}/>
      <BorderLine style={{margin: '30px 0px', fontSize: '1.5rem'}}>|</BorderLine>
      <Button style={{backgroundColor: 'white', borderWidth: '0px', fontSize: '1.1rem', cursor:'pointer'}}
        onClick={()=>{
          if(loginState === null){
            //로그인 버튼일 때

          }else{
            //로그아웃 버튼일 때
            localStorage.setItem('token', null);
            setLoginState(false)
          }
        }}
      >{loginState ? '로그아웃' : <Link to={'/login'} style={{color: 'black', textDecoration: 'none'}}>로그인</Link>}</Button>
    </Containor>
    
  )
}

export default GnbButton