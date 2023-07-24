
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
<<<<<<< HEAD

import routes from '../../routes/routes'
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD

=======
import { login } from "../../services";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f34aae79a (feat:Components)
=======
import routes from '../../routes/routes'
import { useNavigate } from 'react-router-dom';
>>>>>>> b3e9a4d9d (feat-AddStore)
import Question from "../atoms/Question";
=======
import Question from "../atoms/question";
>>>>>>> e3a7bc3e1 (feat:src)
=======
import Question from "../atoms/Question";
>>>>>>> 8fb34fe01 (feat:주석 처리 추가)
import { useState, useEffect } from "react";
import { emailCheck, passwordCheck } from "../../services/regex";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, setEmail } from "../../store/slices/userSlice";



const LoginForm = () => {
    // reducer 함수를 호출하기 위해서는 dispatch를 호출해야한다!(규칙)
    const dispatch = useDispatch();

    // redux에서 값을 가져올때는 useSelector라는 훅을 사용한다.
    // 여기에서 사용하는 state는 모든 변수를 다담고 있는 state이다.
<<<<<<< HEAD
<<<<<<< HEAD

    // user 안에 있는 email에 접근할 때는 다음과 같이 사용하면 된다

    const email = useSelector((state) => state.user.email);

<<<<<<< HEAD
=======
const LoginForm = () => {
>>>>>>> 65d8880e3 (feat:JWT token)
=======
    // user 안에 있는 email에 접근할 때는 다음과 같이 사용하면 된다!
=======
    // user 안에 있는 email에 접근할 때는 다음과 같이 사용하면 된다
>>>>>>> b3e9a4d9d (feat-AddStore)
    const email = useSelector((state) => state.user.email);

>>>>>>> 8fb34fe01 (feat:주석 처리 추가)
    const navigate = useNavigate();
    const { valueInit, handleOnChange } = useInput(
        {
            username: "",
            email: "",
            password: "",
            passwordConfirm: ""
        }

    );
    const [isEmail, setIsEmail] = useState(true);
    const [whatEmail, setWhatEmail] = useState("");
    const [isPassword, setIsPassword] = useState(true);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f34aae79a (feat:Components)
    const loginCheck = (data) => {
        login(data).then((res) => {
            localStorage.setItem('jwt', res.headers.get("Authorization"));
            alert("로그인 성공!");
            navigate(routes.home);
        })
            .catch((e) => {
                alert("인증되지 않았습니다.");
            });
    };
>>>>>>> 65d8880e3 (feat:JWT token)
=======
    // const dispatch = useDispatch();
    // let email = useSelector((state) => state.user.email,);
>>>>>>> 8fb34fe01 (feat:주석 처리 추가)


=======
>>>>>>> b3e9a4d9d (feat-AddStore)
    let emails = useSelector((state) => state.user.email,);

    useEffect((e) => {
        console.log(valueInit.email);
<<<<<<< HEAD

=======
>>>>>>> b3e9a4d9d (feat-AddStore)
        if (valueInit.email.length > 0) {
            setIsEmail(emailCheck(valueInit.email));
            setWhatEmail(valueInit.email);
        }
    }, [valueInit.email]);
    useEffect((e) => {
        console.log(valueInit.password);
<<<<<<< HEAD

=======
>>>>>>> b3e9a4d9d (feat-AddStore)
        if (valueInit.password.length > 0) {
            setIsPassword(passwordCheck(valueInit.password));
        }
    }, [valueInit.password]);

    return (
        <>
        <h1 className="text-3xl font-bold text-kakao flex justify-center mt-24 mb-14 text-yellow-400" onClick={() => { navigate(routes.home); }}>kakao</h1>

            <Container>
                <InputGroup id='email' type='email' placeholder='이메일(아이디)를 입력해주세요' label="이메일"
                    value={valueInit.email}
<<<<<<< HEAD

=======
>>>>>>> b3e9a4d9d (feat-AddStore)
                    onChange={(e) => {
                        handleOnChange(e);
                    }
                    }
                    para={isEmail ? null : "이메일 형식으로 작성해주세요. "} />
                <InputGroup id='password' type='password' placeholder='비밀번호를 입력해주세요' label="비밀번호"
                    value={valueInit.password}
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
<<<<<<< HEAD

=======
>>>>>>> b3e9a4d9d (feat-AddStore)
                    para={isPassword ? null : "비밀번호는 영문, 숫자, 특수문자가 포함된 8~20자로 구성되어야 합니다."} />

                <Button
                    onClick={(e) => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b3e9a4d9d (feat-AddStore)
                        console.log(valueInit.email);
                        console.log(valueInit.password);
                        if (valueInit.email == '') {
                            alert('이메일을 작성해주세요.');
                        }
                        if (valueInit.password == '') {
                            alert('비밀번호를 작성해주세요.');
                        }

                        else if (isEmail && isPassword) {
<<<<<<< HEAD

=======
                        //e.preventDefault();
                        if (isEmail && isPassword) {
                            console.log(valueInit.email);
                            console.log(valueInit.password);
>>>>>>> 8fb34fe01 (feat:주석 처리 추가)
=======
>>>>>>> b3e9a4d9d (feat-AddStore)
                            dispatch(loginRequest({
                                email: valueInit.email,
                                password: valueInit.password,
                            }));
                        }
                    }}>로그인</Button>
                <Question para='계정이 없으신가요?' children="회원가입" onClick={() => { navigate(routes.signUp); }}></Question>
            </Container >
        </>

    );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8fb34fe01 (feat:주석 처리 추가)
const LogoStyle = styled.h1`
    display: flex;
    justify-content: center;
    margin-top:5rem;

    color: #edb200;
    font-weight: 800;
`

=======
>>>>>>> 776f4cfb4 (feat:Add tailwind")

<<<<<<< HEAD
export default LoginForm;
=======
export default LoginForm;
>>>>>>> 65d8880e3 (feat:JWT token)
=======
export default LoginForm;
>>>>>>> 8fb34fe01 (feat:주석 처리 추가)
