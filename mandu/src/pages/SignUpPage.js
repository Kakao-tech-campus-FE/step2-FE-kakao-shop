import InputField from "../components/molecules/InputField";
import useForm from "../hook/useForm";
import {userValidation} from "../util/validation";
import {checkDuplicateEmail, signUp} from "../services/apis";
import {useNavigate} from "react-router-dom";
import Button from "../components/atoms/Button";

const SignUpPage = () => {
    const navigate = useNavigate();
    const initialValue = {
        id: "",
        name: "",
        password: "",
        checkPassword: "",
    }
    const onSubmit = async (value) => {
        try {
            await signUp({email: value.id, password: value.password, username: value.name});
            alert("회원가입이 완료되었습니다!");
            navigate("/login");
        } catch (e) {
            alert(e.message);
        }
    }

    const {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit
    } = useForm(initialValue, onSubmit, userValidation)

    const handleCheckId = async (email) => {
        if (!email) return alert("이메일을 입력해주세요");
        const response = await checkDuplicateEmail(email);
        alert(response.success ? "사용가능한 아이디입니다!" : response.error.message)
    }

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex-col max-w-md w-full  m-auto p-8 border-2">
                <h1 className="text-center mb-8">회원가입</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-3">
                        <InputField
                            className={"grow mr-1"}
                            id="signup-id"
                            name="id"
                            type="text"
                            value={values.id}
                            onChange={handleChange}
                            error={errors.id}
                            label="아이디"
                            placeholder="이메일"
                        >
                            <div className="w-1/4">
                                <Button onClick={() => handleCheckId(values.id)}>
                                    중복확인
                                </Button>
                            </div>
                        </InputField>
                        <InputField
                            id="signup-name"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            error={errors.name}
                            label="이름"
                            placeholder="이름"
                        />
                        <InputField
                            id="signup-password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            error={errors.password}
                            label="비밀번호"
                            placeholder="비밀번호"
                        />
                        <InputField
                            id="signup-password-check"
                            name="checkPassword"
                            type="password"
                            value={values.checkPassword}
                            onChange={handleChange}
                            error={errors.checkPassword}
                            label="비밀번호 확인"
                            placeholder="비밀번호 확인"
                        />
                    </div>
                    <Button className="mt-8" type="submit" disabled={submitting}>
                        회원가입
                    </Button>
                </form>
            </div>
        </div>

    )
}

export default SignUpPage;
