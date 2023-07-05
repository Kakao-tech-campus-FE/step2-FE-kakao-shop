import InputField from "../components/atoms/inputField";

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-col max-w-md w-full  m-auto p-8 border-2">
                <h1 className="text-center mb-8">회원가입</h1>

                <div className="space-y-3">
                    <InputField id="signup-id" type="text" label="아이디" placeholder="아이디"/>
                    <InputField id="signup-name" type="text" label="이름" placeholder="이름"/>
                    <InputField id="signup-password" type="password" label="비밀번호" placeholder="비밀번호"/>
                    <InputField id="signup-password-check" type="password" label="비밀번호 확인" placeholder="비밀번호 확인"/>
                </div>

                <button className="bg-amber-300 w-full mt-8 p-2 rounded-md">로그인</button>

            </div>
        </div>

    )
}

export default SignUpPage;