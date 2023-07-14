import useForm from '../../hooks/useForm';
import { login } from '../../services/api';
import LoginFormValidation from '../../utils/LoginFormValidation';
import SubmitButton from '../atoms/SubmitButton';
import Form from '../atoms/Form';
import Message from '../atoms/Message';
import LabelInput from '../molecules/LabelInput';
import { useAtom } from 'jotai';
import { jwtAtom } from '../../store';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ inputInfo, defaultValue, buttonLabel }) => {
    const navigate = useNavigate();
    const [jwt, setJwt] = useAtom(jwtAtom);
    const { values, errors, isLoading, handleChange, handleSubmit, validation } = useForm({
        initValue: defaultValue,
        onSubmit: (set, values) => {
            login(values)
                .then((response) => {
                    setJwt(response.headers.authorization.replace('Bearer ', ''));
                    navigate('/');
                })
                .catch((error) => {
                    error.stack.includes('401') && set('이메일 또는 비밀번호가 올바르지 않습니다');
                });
        },
        validate: LoginFormValidation,
    });

    return (
        <Form onSubmit={handleSubmit}>
            {inputInfo.map((info) => (
                <LabelInput
                    key={info.id}
                    id={info.id}
                    onChange={handleChange}
                    value={values[info.id]}
                    label={info.label}
                    type={info.type}
                    placeholder={info.placeholder}
                    required={info.required}
                    errorMessage={errors[info.id] && errors[info.id]}
                />
            ))}
            {validation && <Message className="error">{validation}</Message>}
            <SubmitButton>{buttonLabel}</SubmitButton>
        </Form>
    );
};

export default LoginForm;
