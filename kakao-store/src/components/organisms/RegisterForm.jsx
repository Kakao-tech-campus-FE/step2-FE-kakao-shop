import Button from "../atoms/Button";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import { register } from "../../apis/api";
import Title from "../atoms/Title";

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
					<img src="/img/logoKakaoText.png" width="88px" height="27px"/>
				</Title>
			</Container>
			<Container className="flex flex-col items-center justify-center w-2/5 p-10 mx-auto mt-10 border border-gray-400">
				<InputGroup className="py-2 m-2 border-b border-gray-500" 
                    id="username" type="text" name="username" placeholder="사용자 이름" value={value.username}
                    onChange={handleOnChange}/>
				<InputGroup className="py-2 m-2 border-b border-gray-500" 
                    id="email" type="email" name="email" placeholder="이메일(아이디)" value={value.email}
                    onChange={handleOnChange}/>
				<InputGroup className="py-2 m-2 border-b border-gray-500" 
                    id="password" type="password" name="password" placeholder="비밀번호" value={value.password}
                    onChange={handleOnChange}/>
				<InputGroup className="py-2 m-2 border-b border-gray-500" 
                    id="passwordConfirm" type="password" name="passwordConfirm" placeholder="비밀번호 확인" value={value.passwordConfirm}
                    onChange={handleOnChange}/>
				<Button className="px-40 py-3 m-3 text-black bg-yellow-300 hover:bg-yellow-400"
                    onClick={() => {
                        // api 회원 가입 요청
                        register({
                            email: value.email,
                            password: value.password,
                            username: value.username,
                        })
                    }}
                >회원가입</Button>
            </Container>
        </Container>
    );
}

export default RegisterForm;