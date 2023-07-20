import Button from "../atoms/Button";
import "../../styles/molecules/Modal.css";

// open: 모달 창이 열려있는지에 관한 Boolean 값
// close: 모달 창을 닫는 close 함수
// title: 모달 창의 제목 부분
// description: 모달 창의 설명 부분
const Modal = ({ open, close, title, description }) => {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {title}
            <Button className="close" onClick={close}>
              &times;
            </Button>
          </header>
          <main>{description}</main>
          <footer>
            <Button className="close" onClick={close}>
              확인
            </Button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
