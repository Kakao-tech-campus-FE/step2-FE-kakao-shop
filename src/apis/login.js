import { instance } from "./index";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const login = (data) => {
  const { email, password } = data;

  return instance
    .post("/login", { email, password })
    .then((response) => {
      if (response.data.success) {
        const dataObject = JSON.parse(response.config.data);

        window.alert(`환영합니다 🥳 ${dataObject.email} 님`);
        window.location.href = staticServerUri + "/";
        return {
          email: email,
          token: response.headers.authorization,
        };
      } else {
        throw new Error("로그인에 실패했습니다.");
      }
    })
    .catch((error) => {
      switch (error?.response?.status) {
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
          window.location.href = staticServerUri + "/error";
          break;
        default:
          window.alert("로그인에 실패했습니다.");
          throw new Error("로그인에 실패했습니다.");
      }
    });
};
