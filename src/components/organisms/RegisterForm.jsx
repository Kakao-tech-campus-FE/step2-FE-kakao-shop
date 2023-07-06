import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { register } from "../../services/api";

const RegisterForm = () => {
  // RegisterForm의 상태 관리
  // 상태 관리는 높은 단계에서 하는 것이 좋다 (atoms level X -> molecule organism level O)

  // useInput 커스텀 훅 사용 이전 코드
  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  // });

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <Container>
      <InputGroup
        id={"username"}
        type={"text"}
        name={"username"}
        placeholder={"사용자 이름"}
        label={"이름"}
        // 커스텀 훅 사용 이전 코드
        // value={form.username}
        // onChange={(e) => {
        //   setForm({ ...form, [e.target.name]: e.target.value });
        // }} // input 값의 변경시 => onChange => setForm 으로 상태 관리
        // // 아래의 다른 InputGroup들 마다 username:, password: 각각 다른 속성을 부여해야 하므로 귀찮다
        // // 그래서 input에 name 속성을 주고 이를 e.target.name으로 받아와서 이용한다
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id={"email"}
        type={"email"}
        name={"email"}
        placeholder={"이메일(아이디)"}
        label={"이메일"}
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id={"password"}
        type={"password"}
        name={"password"}
        placeholder={"********"}
        label={"비밀번호"}
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup
        id={"passwordConfirm"}
        type={"password"}
        name={"passwordConfirm"}
        placeholder={"********"}
        label={"비밀번호 확인"}
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // API 회원가입 요청
          // register 함수에 필요없는 passwordConfirm은 전달하지 않게 하기 위해 객체로 전달
          // 깔끔하진 않겠지만 value를 통으로 전달해도 기능은 한다. register에서 처리하기 떄문
          register({
            email: value.email,
            password: value.password,
            username: value.username,
          });
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};
export default RegisterForm;
