import { useState } from 'react';

const useForm = ({ initValue, onSubmit, validate }) => {
    const [values, setValues] = useState(initValue);
    const [errors, setErrors] = useState({});
    const [validation, setValidation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const newErrors = await validate(values);
        setErrors(await newErrors);

        // 유효하면 POST 요청 발생
        if (Object.keys(errors).length === 0) {
            await onSubmit(setValidation, values);
        }
        setIsLoading(false);
    };

    return {
        values,
        errors,
        isLoading,
        validation,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
