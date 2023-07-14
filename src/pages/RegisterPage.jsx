import RegisterForm from "../components/organisms/RegisterForm";
import Loader from "../components/atoms/Loader";

const RegisterPage = () => {
    return (
        <>
            <div className="registerPage">
                <RegisterForm />
                <Loader/>
            </div>
        </>
    );
};

export default RegisterPage;