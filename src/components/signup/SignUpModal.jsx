import { useNavigate } from "react-router-dom";
import "../../styles/atoms/Modal.css";
import Button from "../common/atoms/Button";

export default function SignUpModal({ setIsSignUpModalOpen }) {
  const navigate = useNavigate();
  return (
    <div className="modal-background">
      <div className="modal-container flex flex-col justify-between">
        <div className="flex flex-col px-5 py-8 text-sm tracking-tighter">
          <span>회원가입이 완료되었습니다.</span>
          <span>로그인 후 이용해주세요.</span>
        </div>
        <div className="bottom-0 flex">
          <Button
            className="h-10 w-full border-collapse cursor-pointer border border-solid border-zinc-300 bg-white text-base font-semibold"
            onClick={() => {
              setIsSignUpModalOpen(false);
              navigate("/");
            }}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
