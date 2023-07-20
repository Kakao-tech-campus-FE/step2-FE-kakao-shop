import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex h-[300px] items-center">
      <ClipLoader color="#c7c7c7" size="30px" className="m-auto" />
    </div>
  );
};

export default Loader;
