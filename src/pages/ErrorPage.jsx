import { ReactComponent as ErrorIcon } from "../assets/error.svg";
import Container from "../components/atoms/Container";
import LinkButton from "../components/atoms/LinkButton";
import staticServerUri from "../utils/krampoline";

/** 에러 페이지
 *
 * @return {JSX.Element}
 */
const ErrorPage = () => {
  return (
    <Container className="error-page max-w-none mx-auto mt-[400px] w-[1280px]">
      <div className="error-icon flex justify-center">
        <ErrorIcon />
      </div>
      <span className="error-message flex mt-[10px] justify-center text-[20px] font-bold text-gray-500">
        404 ERROR
      </span>
      <div className="error-icon flex justify-center mt-[10px]">
        <LinkButton
          onClick={() => {
            window.location.replace(`${staticServerUri}/`);
          }}
          to="/"
          className="main-button w-[120px] h-[40px] mr-[4px] rounded-[5px] bg-gray-500 text-white text-[15px]"
        >
          메인화면으로
        </LinkButton>
      </div>
    </Container>
  );
};

export default ErrorPage;
