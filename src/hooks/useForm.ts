import { ComponentProps, useState } from 'react';

const useForm = (initialValues: { [key: string]: string }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange: ComponentProps<'input'>['onChange'] = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
};

export default useForm;
