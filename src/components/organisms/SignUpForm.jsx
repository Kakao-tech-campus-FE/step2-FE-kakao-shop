import Container from "../atoms/Container";
import SignUpInputGroup from "../molecules/SignUpInputGroup";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import useInput from "../../hooks/useInput";
import { checkEmail, register } from "../../services/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const SignUpForm = () => {
	
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isValid) {
      setModalOpen(false);
      navigate(staticServerUri + "/login");
    } else {
      setModalOpen(false);
    }
  };

  return (
    <Container className="border border-gray-200 flex flex-col justify-center gap-4 w-[580px] max-h-max px-16 py-6">
      <div className="email grid grid-flow-col gap-4">
        <SignUpInputGroup
          id="email"
          className="email h-11 outline-none border-b-2 border-gray-400 focus:border-black"
          type="email"
          placeholder="이메일"
          label="이메일 (아이디)"
          value={value.email}
          onChange={handleOnChange}
        />
        <Button
          className="email-confirm inline-block border-0 bg-yellow-300 w-[100%] h-[50%] mt-[20%] hover:bg-yellow-400 focus:bg-yellow-500"
          onClick={() => {
            let title = "";
            let description = "";
            checkEmail({ email: value.email })
              .then((res) => res.data)
              .then((data) => {
                if (data.success) {
                  title = "이 이메일을 사용할 수 있습니다.";
                  description = "사용하시겠습니까?";
                  setTitle(title);
                  setDes(description);
                  openModal();
                }
              })
              .catch((err) => {
                title = "다른 이메일을 사용해주세요.";
                description = err.response.data.error.message;
                description = description.slice(0, description.indexOf(":"));
                setTitle(title);
                setDes(description);
                openModal();
              });
          }}
        >
          이메일 확인
        </Button>
      </div>
      <SignUpInputGroup
        id="username"
        className="username h-11 outline-none border-b-2 border-gray-400 focus:border-black"
        type="text"
        placeholder="이름"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />
      <SignUpInputGroup
        id="password"
        className="password w-[100%] h-11 outline-none border-b-2 border-gray-400 focus:border-black"
        type="password"
        placeholder="비밀번호"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <SignUpInputGroup
        id="passwordConfirm"
        className="passwordConfirm w-[100%] h-11 outline-none border-b-2 border-gray-400 focus:border-black"
        type="password"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        className="register inline-block border-0 bg-yellow-300 w-[100%] py-4 hover:bg-yellow-400 focus:bg-yellow-500"
        onClick={() => {
          let title = "";
          let description = "";
          // 회원가입 요청 -> API에 비밀번호 확인 기능이 없어서 계정 등록 전에 확인 후 등록하도록 만들었음
          if (value.password !== value.passwordConfirm) {
            setTitle("비밀번호가 다릅니다.");
            setDes("비밀번호 확인란을 다시 입력해주세요");
            console.log("false");
            setIsValid(false);
            openModal();
          } else {
            register({
              email: value.email,
              password: value.password,
              username: value.username,
            })
              .then((res) => res.data)
              .then((data) => {
                if (data.success) {
                  setTitle("회원가입 완료");
                  setDes("로그인 화면으로 이동하시겠습니까?");
                  setIsValid(true);
                  openModal();
                }
              })
              .catch((err) => {
                description = err.response.data.error.message;
                description = description.slice(0, description.indexOf(":"));
                console.log("des", description);
                title = "다시 작성해주세요.";
                setTitle(title);
                setDes(description);
                openModal();
              });
          }
        }}
      >
        회원가입
      </Button>
      <Modal
        id="SignInModal"
        open={modalOpen}
        close={closeModal}
        title={title}
        description={des}
      />
    </Container>
  );
};

export default SignUpForm;
