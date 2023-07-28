import { useNavigate } from "react-router-dom";

/**
 * 에러 페이지
 *
 * @param {string} message 표시할 에러 메시지
 */
const ErrorPage = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="error text-center py-20">
      <span className="font-bold">{message}</span>
      <span className="block text-sm mt-2">잠시 후 다시 시도해 주세요.</span>
      <button
        className="mt-5 bg-gray-100 px-5 py-2 rounded-md"
        onClick={() => navigate(-1)}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default ErrorPage;
