export const errorCode = (error) => {
  const errorType = `error found : ${error.config.url} method type : ${error.config.method}`;
  const errorStatus = error.status;
  console.log(errorType);
  switch (errorStatus) {
    case 200:
      console.log("200(OK) : 요청이 성공적으로 되었습니다");
      break;
    case 201:
      console.log(
        "201(Created) : 요청이 성공적이였고 새로운 리소스가 생성되었습니다"
      );
      break;
    case 202:
      console.log("202(Accepted) : 요청은 접수되었지만 아직 처리중입니다");
      break;
    case 204:
      console.log("204(No Content) : 요청은 성공했지만 콘텐츠가 없습니다");
      break;
    case 206:
      console.log("206(Parial Content) : GET 요청의 일부만 성공했습니다");
      break;
    case 300:
      console.log(
        "300(Mulitple Choice): request에 대해 하나 이상의 응답이 가능, 하나를 선택해야 합니다"
      );
      break;
    case 301:
      console.log(
        "301(Moved Permantly) : 요청한 리소스의 URI가 변경되었습니다"
      );
      break;
    case 302:
      console.log(
        "302(Found) : 요청한 리소스의 URI가 일시적으로 변경되었습니다"
      );
      break;
    case 303:
      console.log(
        "303(See Other) : 요청한 리소스를 다른 URI에서 GET요청을 통해 얻어야합니다."
      );
      break;
    case 304:
      console.log("304(Not modified) : 응답이 수정되지 않았습니다");
      break;
    case 305:
      console.log(
        "305(Use Proxy) : 요청한 응답은 반드시 프록시를 통해 접속해야 합니다"
      );
      break;
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
