import Button from "../atoms/Button";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import { register } from "../../apis/user";
import Title from "../atoms/Title";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

const USERNAME_MESSAGE = "올바르지 않는 이름입니다.";
const EMAIL_MESSAGE = "이메일을 확인해주세요.";
const PASSWORD_MESSAGE = "비밀번호를 확인해주세요.";
const PASSWORD_CONFIRM_MESSAGE = "비밀번호가 일치하지 않습니다.";

/**
 * 회원가입 폼 컴포넌트 생성
 * @returns 회원가입 폼 컴포넌트
 */
const RegisterForm = () => {
    const { value, handleOnChange } = useInput({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    return (
        <Container>
            <Container className="flex items-center justify-center mt-10">
				<Title>
					<img src="/img/logoKakaoText.png" width="88px" height="27px" alt="logo"/>
				</Title>
			</Container>
			<Container className="flex flex-col items-center justify-center w-2/5 p-10 mx-auto mt-10 border border-gray-400">
				<InputGroup className="w-full py-2 m-2 border-b border-gray-500" 
                    id="username" type="text" name="username" placeholder="사용자 이름" value={value.username}
                    onChange={handleOnChange}/>
				<InputGroup className="w-full py-2 m-2 border-b border-gray-500" 
                    id="email" type="email" name="email" placeholder="이메일(아이디)" value={value.email}
                    onChange={handleOnChange}/>
				<InputGroup className="w-full py-2 m-2 border-b border-gray-500" 
                    id="password" type="password" name="password" placeholder="비밀번호" value={value.password}
                    onChange={handleOnChange}/>
				<InputGroup className="w-full py-2 m-2 border-b border-gray-500" 
                    id="passwordConfirm" type="password" name="passwordConfirm" placeholder="비밀번호 확인" value={value.passwordConfirm}
                    onChange={handleOnChange}/>
				<Button className="w-full py-3 m-3 text-black bg-yellow-300 hover:bg-yellow-400"
                    onClick={() => {
                        if(value.username === "") alert(USERNAME_MESSAGE); 
                        else if(EMAIL_REGEX.test(value.email) === false) alert(EMAIL_MESSAGE);
                        else if(PASSWORD_REGEX.test(value.password) === false) alert(PASSWORD_MESSAGE);
                        else if(value.password !== value.passwordConfirm) alert(PASSWORD_CONFIRM_MESSAGE);
                        // api 회원 가입 요청
                        else {
                            register({
                                email: value.email,
                                password: value.password,
                                username: value.username,
                            });
                        }
                    }}
                >회원가입</Button>
            </Container>
        </Container>
    );
}

export default RegisterForm;