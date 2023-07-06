import Container from "../atoms/Container";
import Title from "../atoms/Title";
import useInput from "../../hooks/useInput";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
// import { login } from "../../services/api";
import { loginRequest } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  // const loginReq = () => {
  //   loginRequest();
  // };

  return (
    <Container>
      <Title>로그인</Title>
      <span>{email}</span>
      <InputGroup
        id="email"
        name="email"
        type="email"
        value={value.email}
        onChange={handleOnChange}
        placeholder="이메일"
        className="border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md"
        label="이메일"
      />
      <InputGroup
        id="password"
        name="password"
        type="password"
        value={value.password}
        onChange={handleOnChange}
        placeholder="비밀번호"
        className="border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md"
        label="비밀번호"
      />
      <Button
        onClick={() => {
          // api 로그인 요청
          // loginReq();
          dispatch(
            loginRequest({
              email: value.email,
              password: value.password,
            })
          );
        }}
      >
        로그인
      </Button>
    </Container>
  );
};
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="max-w-md w-full">
//         <div className="mb-4">
//           <label className="block text-gray-700"></label>
//           <Input
//             type="email"
//             placeholder="이메일"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700"></label>
//           <Input
//             type="password"
//             placeholder="비밀번호"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
//           />
//         </div>
//         <div>
//           <button className="w-full px-4 py-2 bg-yellow-300 rounded-md focus:outline-none">
//             로그인
//           </button>
//           <button className="px-3 py-4 text-zinc-900 text-xs focus:outline-none">회원가입</button>
//           <Button onClick={() => {}}>로그인</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default LoginForm;
