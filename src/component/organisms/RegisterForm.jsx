import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { useState } from "react";
import useInput from "../../hooks/useInput";
// import { emailDuplicateCheck, PasswordCheck, } from "../../services";
import { duplicate } from "../../services/index";
import { useEffect } from "react";
import { instance } from "../../services/index";
import HomePage from "../../pages/HomePage";
import { useNavigate } from "react-router-dom";
import Title from "../atoms/Title";
import { register } from "../../services/user";


const staticServerUrl = process.env.REACT_APP_PATH || "";


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

  const handleDuplicate = async () => {
    const email = value.email;
    const response = await duplicate(email);
    console.log(response);
    if (response.request.status === 400) {
      setError((prevState) => ({
        ...prevState,
        duplicate: "동일한 이메일이 존재하거나 올바르지 않은 이메일입니다."
      }

      ));
    }
    if (response.request.status === 200) {
      setError((prevState) => ({
        ...prevState,
        duplicate: "이 이메일을 사용할 수 있습니다.",
      }));
    }
  };

  const handleRegister = async (data) => {
    try {
      const { email, password, username } = data;
      const response = await register({ email, password, username });
      console.log(response);
      navigate(staticServerUrl+"/login");
    } catch (errors) {
      setError("회원가입에 실패했습니다.");
    }
  };

  const validateEmail = () => {
    const emailRange = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    if (!emailRange.test(value.email)) {
      setError((prevState) => ({
        ...prevState,
        email: "유효한 이메일 형식이 아닙니다.",
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        email: undefined,
      }));
    }
    return true;
  };

    //Password validation check
    const validatePassword = () => {
      const passwordRange =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
      if (!passwordRange.test(value.password)) {
        setError((prevState) => ({
          ...prevState,
          password:
            "비밀번호는 영문, 숫자, 특수문자를 포함하고, 공백이 없으며 8~20자여야 합니다.",
        }));
        return false;
      } else {
        setError((prevState) => ({
          ...prevState,
          password: undefined,
        }));
      }
      return true;
    };

      // check Password = Passwordconfirm
  const validateConfirm = () => {
    if (value.password !== value.passwordConfirm) {
      setError((prevState) => ({
        ...prevState,
        passwordConfirm: "입력한 비밀번호와 다릅니다.",
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        passwordConfirm: undefined,
      }));
    }
    return true;
  };

  // meet all requirements then send register request
  const handleOnSubmit = () => {
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidConfirm = validateConfirm();

    if (isValidEmail && isValidPassword && isValidConfirm) {
      handleRegister({
        email: value.email,
        password: value.password,
        username: value.username,
        passwordConfirm: value.passwordConfirm,
      });
    }
  };



  // useEffect(() => {
  //   console.log(value.username);
  // }, [value.username]);

  // let [emailCheck, setEmailCheck] = useState('');

  // let [passwordChck, setPasswordChck] = useState('');
  // const passwordRegEx = /^[A-Za-z0-9]{8,20}$/

  // let [registerCheck, setRegisterCheck] = useState('');

  // const passwordCheck = (password) => {
  //   if(password.match(passwordRegEx)===null) {
  //     console.log('비밀번호 확인해주세요');
  //     return;
  //   }else{
  //     console.log('비밀번호 형식 맞아요');
  //   }
  // }
  // const passwordDoubleCheck = (password, passwordChck) => {
  //   if( password !== passwordChck) {
  //     console.log('비밀번호 다름');
  //     return;
  //   }else{
  //     console.log('비밀번호 틀림');
  //   }
  // }
// const onClick = () => {
//     let body = {
//       email: value.email,
//     };
//     instance.post('/check', body).catch((error) => {
//       alert(error);
//     });
//   };

// const onClick = () => {
//   let body = {
//     email: value.email
//     };
//   instance.post('/check', body).catch((error) => {
//     alert(error);
//   });
//   setRegisterCheck("회원가입이 완료되었습니다.");
//   window.location.href = "/";
// };

//   return (
//   <Container>


//     <InputGroup 
//       id="email" 
//       type="email" 
//       name="email"
//       placeholder="이메일(아이디)을 입력해주세요." 
//       label="이메일"
//       value={value.email}
//       onChange={handleOnChange}
//     />
//     <Button
//       onClick={async () => {

//         const result = await emailDuplicateCheck(value.email);
//         console.log(`result: ${result}`);

//         setEmailCheck(result);
//       }}
//       >이메일 중복검사</Button>
//       <p>{emailCheck}</p>
// {/*     
//     <Button
//       onClick={
//         onClick
//        }
//     >회원가입</Button> */}

//     <InputGroup 
//       id="password" 
//       type="password"
//       name="password" 
//       placeholder="*********" 
//       label="비밀번호"
//       value={value.password}
//       onChange={handleOnChange}
//     />
    
//     <Button
//       onClick={() => {
//         if (value.password.match(passwordRegEx)===null) {
//           setPasswordChck("비밀번호 형식 확인해주세요");
//           return;
//         }else {
//           setPasswordChck("비밀번호 형식이 맞아요");
//         }
        
//       }
//       }
//       >비밀번호 적합 검사</Button>
//       <p>{passwordChck}</p>

//     <InputGroup 
//       id="passwordConfirm" 
//       type="password"
//       name="passwordConfirm" 
//       placeholder="*********" 
//       label="비밀번호 확인"
//       value={value.passwordConfirm} 
//       onChange={handleOnChange}
//     />
//     <InputGroup 
//       id="username"
//       type="text"
//       name="username"
//       placeholder="사용자 이름을 입력해주세요."
//       label="이름"
//       value={value.username}
//       onChange={handleOnChange}
//       // 사실 윗줄은
//       // onChange={(e) => {
//       //   handleOnChange(e);
//       // }}
//       // 와 같다.
//       // 중복되는 useState를 사용한 아이들을 hook(훅)으로 대체한 것.
//        />

//     <Button
//       onClick={ () => {
//         // api 회원 가입 요청
//         register({
//           email: value.email,
//           password: value.password,
//           username: value.username,
//         });
//         onClick();
//       }}
//     >회원가입</Button>
//     <p>{registerCheck}</p>
    
//   </Container>
//   );

return (
  <Container>
    <Title>회원 가입</Title>
    <InputGroup
      id="username"
      type="text"
      name="username"
      placeholder="사용자 이름을 입력해주세요."
      label="이름"
      value={value.username}
      onChange={handleOnChange}
    />

    <InputGroup
      id="email"
      type="email"
      name="email"
      placeholder="이메일(아이디)를 입력해주세요."
      label="이메일"
      value={value.email}
      onChange={handleOnChange}
    />
    <Button onClick={handleDuplicate}>중복체크</Button>
    {errors.duplicate && <div className="error">{errors.duplicate}</div>}
    {errors.email && <div className="error">{errors.email}</div>}

    <InputGroup
      id="password"
      type="password"
      name="password"
      placeholder="**********."
      label="비밀번호"
      value={value.password}
      onChange={handleOnChange}
    />
    {errors.password && <div className="error">{errors.password}</div>}

    <InputGroup
      id="passwordConfirm"
      type="password"
      name="passwordConfirm"
      placeholder="비밀번호 확인"
      label="비밀번호 확인"
      value={value.passwordConfirm}
      onChange={handleOnChange}
    />
    {errors.passwordConfirm && (
      <div className="error">{errors.passwordConfirm}</div>
    )}
    <Button onClick={handleOnSubmit}>회원가입</Button>
  </Container>
);

};

export default RegisterForm;