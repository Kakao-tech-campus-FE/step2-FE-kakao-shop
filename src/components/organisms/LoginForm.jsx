import { login } from '../../services/user';
import validationLoginForm from '../../utils/validationLoginForm';
import SubmitButton from '../atoms/SubmitButton';
import Form from '../atoms/Form';
import Text from '../atoms/Text';
import LabelInput from '../molecules/LabelInput';
import { useSetAtom } from 'jotai';
import { tokenAtom } from '../../store';
import { useNavigate } from 'react-router-dom';
import URL from '../../constants/URL';
import useForm from '../../hooks/useForm';

const LoginForm = ({ inputInfo, defaultValue, buttonLabel }) => {
    const navigate = useNavigate();
    const setToken = useSetAtom(tokenAtom);
    const { values, errors, handleChange, handleSubmit, validation } = useForm({
        initValue: defaultValue,
        onSubmit: (setValidate, values) => {
            login(values)
                .then((response) => {
                    setToken(response.headers.authorization.replace('Bearer ', ''));
                    navigate(URL.HOME);
                })
                .catch((error) => {
                    console.log(error);
                    error.stack.includes('401') &&
                        setValidate('이메일 또는 비밀번호가 올바르지 않습니다');
                });
        },
        validate: validationLoginForm,
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
            {validation && <Text className="error">{validation}</Text>}
            <SubmitButton>{buttonLabel}</SubmitButton>
        </Form>
    );
};

export default LoginForm;
