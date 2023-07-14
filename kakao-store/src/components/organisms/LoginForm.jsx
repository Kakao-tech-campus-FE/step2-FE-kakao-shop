import Button from "../atoms/Button";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

const EMAIL_MESSAGE = "이메일을 확인해주세요.";
const PASSWORD_MESSAGE = "비밀번호를 확인해주세요.";

/**
 * 로그인 폼 컴포넌트 생성
 * @returns 로그인 폼 컴포넌트
 */
const LoginForm = () => {
	const dispatch = useDispatch();

	const { value, handleOnChange } = useInput({
		email: "",
		password: "",
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
					id="email" type="email" name="email" placeholder="카카오메일 아이디, 이메일, 전화번호" value={value.email}
					onChange={handleOnChange}/>
				<InputGroup className="w-full py-2 m-2 border-b border-gray-500" 
					id="password" type="password" name="password" placeholder="비밀번호" value={value.password}
					onChange={handleOnChange}/>
				<Button className="w-full py-3 m-3 text-black bg-yellow-300 hover:bg-yellow-400"
					onClick={() => {
						if(EMAIL_REGEX.test(value.email) === false) alert(EMAIL_MESSAGE);
						else if(PASSWORD_REGEX.test(value.password) === false) alert(PASSWORD_MESSAGE);
						else (
							dispatch(
								loginRequest({
									email: value.email,
									password: value.password,
								})
							).then(
								window.location.href = "/"
							)
						)
					}}
				>로그인</Button>
			</Container>
		</Container>
	);
}

export default LoginForm;