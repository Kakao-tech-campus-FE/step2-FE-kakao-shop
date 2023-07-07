import React, { useEffect, useState } from 'react'
import FormContainer from "../atoms/form/FormContainer"
import InputGroup from "../molecules/form/InputGroup"
import SubmitGroup from "../molecules/form/SubmitGroup"
import postLogin from "../../api/login"
import { useNavigate } from 'react-router-dom';
import checkValid from '../../utils/checkForm'


const LoginForm = (props) => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  // 입력값 바뀔때마다 상태객체 user 업데이트
  const inputChange = ( event, key ) => {
    setUser(prevObj => {
      return {...prevObj, [key]: event.target.value};
    })
  }  

  // 실패상태 : 로그인 시도 실패했을 때 실패메세지 나옴
  const [wrongTry, setWrong] = useState(false)

  // 입력값 바뀌면 실패상태 취소됨 (실패메세지 사라짐)
  useEffect(()=>{
    setWrong(prev => false)
  }, [user])

  // 로그인 실패 횟수 : 로컬스토리지에 저장하고 최초 로딩시 초기값으로 불러오기
  const [failCnt, setFailCnt] = useState(() => {
    if (localStorage.getItem("failCnt") === undefined) {
      return  0
    } 
    return Number(localStorage.getItem("failCnt"))
  })
  
  // 실패횟수 늘어나면 로컬스토리지에 저장
  useEffect(()=>{
    localStorage.setItem("failCnt", failCnt)
  }, [failCnt])

  // 버튼 클릭시 axios로 post 요청 
  const click = () => {
    postLogin(user)
      .then((response) => {
        // 토큰, 이메일 로컬스토리지에 등록
        // 로그인실패횟수 초기화
        localStorage.setItem("token", response.headers.authorization);
        localStorage.setItem("email", user.email);
        localStorage.setItem("loginTime", Date.now());
        localStorage.removeItem("failCnt")
        navigate("/")

        // 새로고침 안해주면 상태가 안바껴서... 강제새로고침
        window.location.reload()
      })
      .catch((error) => {
        // 로그인 실패 시 실패횟수 +1, 실패 상태 true
        if (error.status === 401) {
          setFailCnt(prev => prev + 1)
          setWrong(prev => true)
        }
      }) 
  }


  return (
    <FormContainer>

      <InputGroup 
        id="email" 
        type="email" 
        label="이메일"
        onChange={event => inputChange(event, 'email')} 
        message={
          ( user.email && !checkValid(user.email, 'email') )
              ? "이메일 형식으로 입력해주세요"
              : null
          }
        />
      
      <InputGroup 
        id="password" 
        type="password" 
        label="비밀번호" 
        onChange={event => inputChange(event, 'password')} 
        message={
          ( user.password && !checkValid(user.password, 'password') )
          ? "영문, 숫자, 특수문자 포함 8~20자" 
          : null }
        />
        
        {/* Props
          onChange : 상태 객체 user에서 password 값을 입력값으로
          message : 형식 안맞을 경우 입력칸 아래에 출력할 메세지
        */}

        <SubmitGroup
          active={checkValid(user.email, 'email') && checkValid(user.password, 'password')} 
          onClick={click}
          message={wrongTry && failCnt > 0 ? `실패 : 로그인 시도 ${failCnt}회` : null}>
          로그인
        </SubmitGroup>        
        
        {/* Props
          active : 버튼 활성화 여부 (양식이 맞을 때 활성화, 활성화되면 색이 바뀜)
          onClick : 제출시 동작
          message : 실패시 버튼밑에 출력할 메세지
        */}


    </FormContainer>
  )
}

/* abcdef abcdef@naver.com aaaa1111!*/


export default LoginForm