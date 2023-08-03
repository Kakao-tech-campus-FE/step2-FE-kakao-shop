import Container from "./Container";

const ErrorTypo = () => {
  return (
    <Container className="w-full px-24 py-16 m-auto">
      <div className="text-center">
        <p className="text-2xl my-6">데이터 로드 중 오류가 발생했습니다.</p>
        <p className="text-lg">새로고침을 눌러 다시 시도 바랍니다.</p>
      </div>
    </Container>
  );
};
export default ErrorTypo;
