export const errorCode = (error) => {
  const errorType = `error found : ${error.config.url} method type : ${error.config.method}`;
  const errorStatus = error.status;
  console.log(errorType);
  switch (errorStatus) {
    case 400:
      console.log("400(Bad Request) : 요청 자체가 잘못되었습니다");
      break;
    case 401:
      console.log(
        "401(Unauthorized) : 인증에 필요한 리소스에 인증 없이 접근했습니다"
      );
      break;
    case 403:
      console.log("403(Forbidden) : 서버가 요청을 거부하였습니다.");
      break;
    case 404:
      console.log("404(Not Found) : 찾는 리소스가 없습니다");
      break;
    case 408:
      console.log("408(Request Timeout) : 요청 중 시간이 초과되었습니다");
      break;
    case 409:
      console.log(
        "409(Conflict) : 서버가 요청을 수행하는 중에 충돌이 발생했습니다"
      );
      break;
    case 500:
      console.log(
        "500(Internal Server Error) : 서버에 오류가 발생해 작업을 수행할 수 없습니다"
      );
      break;
    case 502:
      console.log(
        "502(Bad Gateway) : 게이트웨이가 연결된 서버로부터 잘못된 응답을 받았습니다"
      );
      break;
    case 503:
      console.log(
        "503(Service Temporarily Unavailable) : 서비스를 일시적으로 사용할 수 없습니다"
      );
      break;
    case 504:
      console.log(
        "504(Gateway Timeout) : 게이트웨이가 연결된 서버로부터 응답을 못 받았습니다"
      );
      break;
    default:
      break;
  }
};
