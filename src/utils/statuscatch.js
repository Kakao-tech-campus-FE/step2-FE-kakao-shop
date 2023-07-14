export const checkStatus = (error) => {
  const errorApiType = `error found : ${error.config.url} method type : ${error.config.method}`;
  const statusCode = error.status;
  console.log(errorApiType);
  switch (statusCode) {
    case 101:
      console.log("switching Protocol");
      break;
    case 102:
      console.log("Processing (WedDAV) : 요청 수신 및 처리 중");
      break;
    case 300:
      console.log(
        "Mulitple Choice: request에 대해 하나 이상의 응답이 가능, 하나를 선택해야 합니다."
      );
      break;
    case 301:
      console.log(
        "301(Moved Permantly) : 요청한 리소스의 URI가 변경되었습니다."
      );
      break;
    case 302:
      console.log(
        "302(Found) : 요청한 리소스의 URI가 일시적으로 변경되었을 때를 의미합니다."
      );
      break;
    case 303:
      console.log(
        "303(See Other) : 클라이언트가 요청한 리소스를 다른 URI에서 GET 요청을 통해 얻어야 합니다."
      );
      break;
    case 304:
      console.log(
        "304(Not modified) : 마지막 요청 이후 요청한 페이지가 수정되지 않았습니다. 서버가 이 응답을 표시하면 페이지의 콘텐츠를 표시하지 않습니다."
      );
      break;
    case 305:
      console.log(
        "305(Use Proxy) : 요청한 응답은 반드시 프록시를 통해 접속해야 함을 알려줍니다."
      );
      break;
    case 308:
      console.log("3308(Permanent Redirect)");
      break;
    case 400:
      console.log(
        "400(Bad Request) : 클라이언트의 request가 유효하지 않은 상태를 의미합니다."
      );
      break;
    case 401:
      console.log(
        "401(Unauthorized) : 클라이언트가 권한이 없어 작업을 진행하지 못합니다. 이 요청은 인증이 필요합니다. 보통 서버는 로그인이 필요한 페이지에 대해 이 요청을 제공할 수 있습니다."
      );
      break;
    case 403:
      console.log(
        "403(Forbidden) : 서버가 요청을 거부할 때 입니다. 예를 들어 사용자가 리소스에 대한 필요 권한을 가지고 있지 않을 때를 의미합니다."
      );
      break;
    case 404:
      console.log(
        "404(Not Found) : 서버가 요청한 페이지(resource)를 찾지 못했을 때입니다. 서버에 존재하지 않는 페이지에 대한 요구를 할 때 다음과 같은 status code가 반환됩니다."
      );
      break;
    case 405:
      console.log(
        "405(Method Not Allowed) : 클라이언트의 요청이 허용되지 않은 메서드인 경우입니다. (예를 들어 POST 방식으로만 request가 가능한데 이를 지키지 않고 GET으로 보냈을 때)"
      );
      break;
    case 409:
      console.log(
        "409(Conflict) : 서버가 요청을 수행하는 중에 충돌이 발생했을 때 입니다."
      );
      break;
    case 414:
      console.log(
        "414 : 요청하는 URL(일반적으로는 URL)이 너무 길었을 때의 status code 입니다."
      );
      break;
    case 419:
      console.log(
        "419(Too Many Requests) : 사용자가 일정 시간 동안 너무 많은 request를 보냈을 때 입니다."
      );
      break;
    case 500:
      console.log(
        "500(Internal Server Error) : 서버에 오류가 발생하여 요청을 수행할 수 없을 경우"
      );
      break;
    case 501:
      console.log(
        "501(Not Implemented) : 서버에 해당 요청을 수행할 수 있는 기능이 없는 경우(서버가 요청 메소드를 인식하지 못하는 경우입니다.)"
      );
      break;
    case 502:
      console.log(
        "502(Bad Gateway) : 서버가 게이트웨이나 프록시 역할을 하고 있는 업스트림 서버에서 잘못된 응답을 받았을 경우"
      );
      break;
    case 504:
      console.log(
        "504(Gateway Timeout) : 서버가 게이트웨이나 프록시 역할을 하고 있거나 또는 업스트림 서버에서 제때 요청을 받지 못한 경우."
      );
      break;
    case 511:
      console.log(
        "511(Network Authentication Required) : 네트워크 인증이 필요한 경우입니다."
      );
      break;
    default:
      break;
  }
};
