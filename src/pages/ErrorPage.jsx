// Error를 받아서 정보를 보여줄 수 있도록 변경 필요

import { useParams } from "react-router-dom";

const ErrorPage = () => {
  const { id, message } = useParams(); // id는 에러 status를 뜻함. status에 따라 다른 에러 메시지를 띄우도록 구현
  return (
    <>
      <div>{id} 에러가 발생하였습니다</div>
      <div>메시지의 내용: {message} </div>
    </>
  );
};

export default ErrorPage;
