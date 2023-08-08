import "../../../styles/atoms/Modal.css";
import Button from "../atoms/Button";

export default function Modal({ setIsModalOpen, children }) {
  return (
    <div className="modal-background">
      <div className="modal-container flex flex-col justify-between">
        <div className="flex flex-col px-5 py-8 text-sm tracking-tighter">
          {children}
        </div>
        <div className="bottom-0 flex">
          <Button
            className="h-10 w-full border-collapse cursor-pointer border border-solid border-zinc-300 bg-white text-base font-semibold"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
