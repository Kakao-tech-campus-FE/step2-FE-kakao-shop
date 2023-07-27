import { useMutation } from "react-query";
import { instance } from "./index";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation(
    (data) => {
      const { email, password, username } = data;
      return instance.post("/join", { email, password, username });
    },
    {
      onSuccess: () => {
        window.alert("회원가입되었습니다 😊");
        navigate("/");
      },
      onError: (error) => {
        switch (error.response.status) {
          case 300:
            window.alert("리다이렉션 메시지");
            break;
          case 400:
            window.alert(error.response.data.error.message);
            break;
          case 401:
            window.alert("인증에 실패했습니다.");
            break;
          case 404:
            navigate("/error");
            break;
          default:
            window.alert("API 호출에 실패했습니다.");
        }
      },
    }
  );
};
