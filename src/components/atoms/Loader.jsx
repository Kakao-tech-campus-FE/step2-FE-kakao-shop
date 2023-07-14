import Container from "./Container";

const Loader = () => {
  return (
    <Container className="absolute m-auto ml-[630px] mt-[400px]">
      <div className="w-20 h-20 rounded-full animate-spin border-4 border-solid border-yellow-kakao border-t-transparent shadow-md" />
    </Container>
  );
};

export default Loader;
