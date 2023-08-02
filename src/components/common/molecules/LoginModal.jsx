import "../../../styles/atoms/Modal.css";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

export default function LoginModal({ setIsLoginModalOpen }) {
  const navigate = useNavigate();
  return (
    <div className="modal-background">
      <div className="modal-container flex flex-col justify-between">
        <div className="flex flex-col px-5 py-8 text-sm tracking-tighter">
          <span>로그인이 필요한 메뉴입니다.</span>
          <span>로그인 하시겠습니까?</span>
        </div>
        <div className="bottom-0 flex">
          <Button
            className="h-10 w-full border-collapse cursor-pointer border border-solid border-zinc-300 bg-white text-base font-semibold"
            onClick={() => {
              setIsLoginModalOpen(false);
            }}
          >
            취소
          </Button>
          <Button
            className="h-10 w-full border-collapse cursor-pointer border border-solid border-zinc-300 bg-white text-base font-semibold"
            onClick={() => {
              navigate("/login");
            }}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
