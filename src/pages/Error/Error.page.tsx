import { useParams } from "react-router-dom";

const ErrorPage = () => {
  const { id } = useParams();
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <img src={"https://http.cat/" + id ?? "404"} alt={id ?? "404"} />
    </div>
  );
};

export default ErrorPage;
