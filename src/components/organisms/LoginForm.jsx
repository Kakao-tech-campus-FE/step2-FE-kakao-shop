import Input from '../atoms/Input';

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full">
        <div className="mb-4">
          <label className="block text-gray-700"></label>
          <Input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="이메일"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700"></label>
          <Input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="비밀번호"
          />
        </div>
        <button className="w-full px-4 py-2 bg-yellow-300 rounded-md focus:outline-none">
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
