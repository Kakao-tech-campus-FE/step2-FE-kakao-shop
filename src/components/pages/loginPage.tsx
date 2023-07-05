import { useState } from 'react';
import LoginTemplate from '../templates/loginTemplate';

interface ILoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [loginData, setLoginData] = useState<ILoginData>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { name } = e.currentTarget;

    setLoginData((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <LoginTemplate
      email={loginData.email}
      password={loginData.password}
      handleChange={handleChange}
      resetValue={resetValue}
      handleLogin={handleLogin}
    />
  );
}
