import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import { emailDuplicateCheck, PasswordCheck, register } from "../../services/api";
import { useEffect } from "react";
import instance from "../../services/api";
import HomePage from "../../pages/HomePage";
import { useNavigate } from "react-router-dom";



const RegisterForm = () => {

  const navigate = useNavigate();

  const [errors, setError] = useState({});

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // 이 부분부터 안되면 빼기

  // const handleDuplicate = async () => {
  //   const email = value.email;
  //   const response = await duplicate(email);
  //   console.log(response);
  //   if (response.request.status === 400) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       duplicate: "동일한 이메일이 존재하거나 올바르지 않은 이메일입니다."
  //     }

  //     ));
  //   }
  //   if (response.request.status === 200) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       duplicate: "이 이메일을 사용할 수 있습니다.",
  //     }));
  //   }
  // };

  // const handleRegister = async (data) => {
  //   try {
  //     const { email, password, username } = data;
  //   }
  // }

  useEffect(() => {
    console.log(value.username);
  }, [value.username]);

  let [emailCheck, setEmailCheck] = useState('');

  let [passwordChck, setPasswordChck] = useState('');
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  let [registerCheck, setRegisterCheck] = useState('');

  const passwordCheck = (password) => {
    if(password.match(passwordRegEx)===null) {
      console.log('비밀번호 확인해주세요');
      return;
    }else{
      console.log('비밀번호 형식 맞아요');
    }
  }
  const passwordDoubleCheck = (password, passwordChck) => {
    if( password !== passwordChck) {
      console.log('비밀번호 다름');
      return;
    }else{
      console.log('비밀번호 틀림');
    }
  }
// const onClick = () => {
//     let body = {
//       email: value.email,
//     };
//     instance.post('/check', body).catch((error) => {
//       alert(error);
//     });
//   };

const onClick = () => {
  let body = {
    email: value.email
    };
  instance.post('/check', body).catch((error) => {
    alert(error);
  });
  setRegisterCheck("회원가입이 완료되었습니다.");
  window.location.href = "/";
};

  return (
  <Container>


    <InputGroup 
      id="email" 
      type="email" 
      name="email"
      placeholder="이메일(아이디)을 입력해주세요." 
      label="이메일"
      value={value.email}
      onChange={handleOnChange}
    />
    <Button
      onClick={async () => {

        const result = await emailDuplicateCheck(value.email);
        console.log(`result: ${result}`);

        setEmailCheck(result);
      }}
      >이메일 중복검사</Button>
      <p>{emailCheck}</p>
{/*     
    <Button
      onClick={
        onClick
       }
    >회원가입</Button> */}

    <InputGroup 
      id="password" 
      type="password"
      name="password" 
      placeholder="*********" 
      label="비밀번호"
      value={value.password}
      onChange={handleOnChange}
    />
    
    <Button
      onClick={() => {
        if (value.password.match(passwordRegEx)===null) {
          setPasswordChck("비밀번호 형식 확인해주세요");
          return;
        }else {
          setPasswordChck("비밀번호 형식이 맞아요");
        }
        
      }
      }
      >비밀번호 적합 검사</Button>
      <p>{passwordChck}</p>

    <InputGroup 
      id="passwordConfirm" 
      type="password"
      name="passwordConfirm" 
      placeholder="*********" 
      label="비밀번호 확인"
      value={value.passwordConfirm} 
      onChange={handleOnChange}
    />
    <InputGroup 
      id="username"
      type="text"
      name="username"
      placeholder="사용자 이름을 입력해주세요."
      label="이름"
      value={value.username}
      onChange={handleOnChange}
      // 사실 윗줄은
      // onChange={(e) => {
      //   handleOnChange(e);
      // }}
      // 와 같다.
      // 중복되는 useState를 사용한 아이들을 hook(훅)으로 대체한 것.
       />

    <Button
      onClick={ () => {
        // api 회원 가입 요청
        register({
          email: value.email,
          password: value.password,
          username: value.username,
        });
        onClick();
      }}
    >회원가입</Button>
    <p>{registerCheck}</p>
    
  </Container>
  );
};

export default RegisterForm;