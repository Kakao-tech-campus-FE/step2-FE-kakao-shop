import InputField from "../components/atoms/inputField";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-col max-w-md w-full  m-auto p-8 border-2">
                <h1 className="text-center mb-8">KAKAO</h1>

                <div className="space-y-3">
                    <InputField type="text" placeholder="아이디를 입력하세요"/>
                    <InputField type="password" placeholder="비밀번호를 입력하세요"/>
                </div>

                <button className="bg-amber-300 w-full mt-8 p-2 rounded-md">로그인</button>

            </div>
        </div>

    )
}

export default LoginPage;