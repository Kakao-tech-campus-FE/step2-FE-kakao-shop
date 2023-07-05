import { useState } from 'react';
import RegisterTemplate from '../templates/registerTemplate';

interface IRegisterData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState<IRegisterData>({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;

    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name } = e.currentTarget;

    setRegisterData((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <RegisterTemplate
      email={registerData.email}
      username={registerData.username}
      password={registerData.password}
      confirmPassword={registerData.confirmPassword}
      handleChange={handleChange}
      resetValue={resetValue}
      handleRegister={handleRegister}
    />
  );
}
