import Container from "../Atoms/container";
import Button from "../Atoms/button";
import InputGroup from "../Molecules/inputgroup";
import { login, checkUnique } from "../../api";
import useInput from "../../Hooks/useinput";
import Box from "../Atoms/box";
import { setEmail } from "../../Store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = ( ) => {
  const dispatch = useDispatch()

  const inputStyle = "text-justify items-center m-3 p-3 border-solid border-2 rounded";
  const backToMain = useNavigate("/main")

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  }); 

  const validAll = (props) => {
    if (props.email && props.password) {
      return false
    } else { return true }
  }

  const loginReq = () => {
    login({
      email: value.email, 
      password: value.password,
    })
      .then((res) => {
        console.log(res);
        dispatch(setEmail({
          email: value.email
        }))
        console.log('로그인했음')
        backToMain()
      })
      .catch((err) => {
        console.log('err', err);
        alert(err.name)
      })
  }




  return (
    <div className="flex min-h-screen justify-center items-center">
      <Container className="border-solid border-2 ">
        <header className="object-center text-xl p-3 m-3 font-semibold text-center">Sign in</header>
        <InputGroup 
          id="email" 
          name="email"
          type="email" 
          placeholder="아이디(이메일)을 입력하세요" 
          label="아이디(이메일)" 
          value={value.email}
          onChange={handleOnChange}
          className={inputStyle} 
        />
        <InputGroup 
          id="password" 
          name="password"
          type="password" 
          placeholder="비밀번호를 입력하세요" 
          label="비밀번호" 
          value={value.password}
          onChange={handleOnChange}
          className={inputStyle} 
        />
        <Box className="m-3">
          <Button 
            onClick={() => {

              loginReq()
            }}
            disabled={validAll(value)}
            className={validAll(value) ? "items-center text-center w-full h-12 mt-4 rounded bg-stone-300 transition-colors	" 
                        : "items-center text-center w-full h-12 mt-4 rounded bg-amber-300"}
          >
          로그인
          </Button>
        </Box>      

      </Container>
    </div>
  );
};

export default LoginForm;