import { Link, useParams } from "react-router-dom";
import { URL } from "@/assets/url.ko";

const ErrorPage = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <img src={"https://http.cat/" + id ?? "404"} alt={id ?? "404"} />
      <Link
        to={URL.HOME}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 m-4 rounded-lg"
      >
        HOME
      </Link>
    </div>
  );
};

export default ErrorPage;
