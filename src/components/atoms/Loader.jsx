import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex h-[300px] items-center">
      <ClockLoader color="gray" size="30px" className="m-auto" />
    </div>
  );
};

export default Loader;
