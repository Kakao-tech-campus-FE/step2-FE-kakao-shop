import Container from "../atoms/Container";
import SignUpInputGroup from "../molecules/SignUpInputGroup";
import Button from "../atoms/Button";
import Modal from "../molecules/Modal";
import useInput from "../../hooks/useInput";
import { checkEmail, register } from "../../services/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const style = {
    backgroundColor: "#ffe342",
    border: "none",
    borderRadius: "8px",
    textAlign: "center",
    padding: "10px",
    width: "100px",
    cursor: "pointer",
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isValid) {
      setModalOpen(false);
      navigate("/login");
    } else {
      setModalOpen(false);
    }
  };

  return (
    <Container>
      <SignUpInputGroup
        id="email"
        className="email"
        type="email"
        placeholder="이메일"
        label="이메일 (아이디)"
        value={value.email}
        onChange={handleOnChange}
      />
      <Button
        className="check"
        style={style}
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
              title = err.response.data.error.message;
              title = title.slice(0, title.indexOf(":"));
              description = "다른 이메일을 사용해주세요.";
              setTitle(title);
              setDes(description);
              openModal();
            });
        }}
      >
        이메일 확인
      </Button>
      <SignUpInputGroup
        id="username"
        className="username"
        type="text"
        placeholder="이름"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />
      <SignUpInputGroup
        id="password"
        className="password"
        type="password"
        placeholder="비밀번호"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <SignUpInputGroup
        id="passwordConfirm"
        className="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        style={style}
        className="register"
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
