import "../../styles/atoms/errorSign.css";
import { BiError } from "react-icons/bi";

const processError = (error) => {
  if (error?.response.status === 404) {
    return "존재하지 않는 페이지입니다.";
  } else if (error?.response.status === 401) {
    return "로그인이 필요합니다.";
  } else if (error?.response.status === 403) {
    return "권한이 없습니다.";
  } else if (error?.response.status === 400) {
    return "잘못된 요청입니다.";
  } else if (error?.response.status === 500) {
    return "서버에 오류가 발생했습니다.";
  } else {
    return error.message;
  }
};
const ErrorSign = ({ error }) => {
  console.log("error", error);
  return (
    <div className="error-sign">
      <h1 className={"text-4xl font-bold"}>에러가 발생했습니다.</h1>
      <BiError size="200" color={"red"} className={"error-icon"} />
      <h2 className={"text-3xl"}>{processError(error)}</h2>
    </div>
  );
};

export default ErrorSign;
