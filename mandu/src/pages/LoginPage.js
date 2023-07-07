import InputField from "../components/molecules/inputField";
import useForm from "../hook/useForm";
import {signIn} from "../services/userApi";
import {useNavigate} from "react-router-dom";
import cookie from "react-cookies";
import {useDispatch} from "react-redux";
import {setId} from "../redux/userSlice";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValue = {
        id: "",
        password: "",
    }
    const onSubmit = async (value) => {

        const response = await signIn({
                email: value.id,
                password: value.password,
            }
        );
        const token = response.headers['authorization']

        if (response.success && token) {
            const expires = new Date();
            expires.setDate(expires.getDate() + 1);
            cookie.save('access_token', token, {
                path: '/',
                expires,
            });
            cookie.save('user_id', value.id, {
                path: '/',
                expires,
            });
            dispatch(setId(value.id));
            alert("로그인이 완료되었습니다!")
            navigate("/");
        } else {
            alert(response.error.message ?? "로그인에 실패했습니다!");

        }
    }


    const {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit
    } = useForm(initialValue, onSubmit,)


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