import {useEffect, useState} from "react";

const useForm = (initialValue, onSubmit, validate) => {
    //initialValue:{key,value}
    //onSubmit: function //can be null
    //validate: function(values) => errors //can be null
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

    }
    const handleSubmit = (e) => {
        setSubmitting(true);
        e.preventDefault();
        setErrors(validate?.(values) ?? {});
    }

    useEffect(() => {
        if (submitting) {
            if (Object.keys(errors).length === 0) {
                onSubmit?.(values);
            }
            setSubmitting(false);
        }
    }, [errors]);

    return {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit,
    };
}

export default useForm;
