import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signup } from '../../services/api';
import signUpFormValidation from '../../utils/SignUpFormValidation';
import SubmitButton from '../atoms/SubmitButton';
import Form from '../atoms/Form';
import LabelInput from '../molecules/LabelInput';

const SignUpForm = ({ inputInfo, defaultValue, buttonLabel }) => {
    let navigate = useNavigate();
    const { values, handleChange, handleSubmit, errors, isLoading } = useForm({
        initValue: defaultValue,
        onSubmit: (set, values) => {
            signup(values).then(() => {
                navigate('/');
            });
        },
        validate: signUpFormValidation,
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
            <SubmitButton>{buttonLabel}</SubmitButton>
        </Form>
    );
};

export default SignUpForm;
