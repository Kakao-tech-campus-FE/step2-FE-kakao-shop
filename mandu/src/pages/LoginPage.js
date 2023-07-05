import InputField from "../components/atoms/inputField";
import useForm from "../hook/useForm";

const LoginPage = () => {
    const initialValue = {
        id: "",
        password: "",
    }
    const {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit
    } = useForm(initialValue, (value) => {
        console.log("ㅋㅋ", value)
    },)


    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-col max-w-md w-full  m-auto p-8 border-2">
                <h1 className="text-center mb-8">KAKAO</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-3">
                        <InputField
                            id="login-id"
                            name="id"
                            type="text"
                            value={values.id}
                            onChange={handleChange}
                            error={errors.id}
                            placeholder="아이디를 입력하세요"
                        />
                        <InputField
                            id="login-password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            error={errors.password}
                            placeholder="비밀번호를 입력하세요"
                        />
                    </div>
                    <button type="submit" disabled={submitting} className="bg-amber-300 w-full mt-8 p-2 rounded-md">로그인
                    </button>
                </form>


            </div>
        </div>

    )
}

export default LoginPage;