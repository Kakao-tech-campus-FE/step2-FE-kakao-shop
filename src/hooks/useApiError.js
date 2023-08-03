import { useCallback } from "react";

const useApiError = () => {
    const handleError = useCallback((axiosError) => {
    const errorResponse = axiosError.response?.data;
    const error = errorResponse.error;
    const status = error.statusCode;

    switch (status) {
      case 400:
        if (error) {
          console.log(error.validationErrorInfo);
        } else {
          console.log(error.validationErrorInfo);
        }
        break;
      // 과도한 요청을 보낼 시
      case 429:
        console.log(error.validationErrorInfo);
        break;
      // 문자메시지 발송 실패
      case 500:
        console.log(error.validationErrorInfo);
        break;
      default:
        console.log(error.validationErrorInfo);
        break;
    }
  }, []);
  return { handleError };
};



export default useApiError;