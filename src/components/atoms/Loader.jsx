import { PropagateLoader } from "react-spinners";
import { PiShoppingCartDuotone } from "react-icons/pi";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-[30px]">창고에서 상품을 찾아오는 중입니다!</h3>
      <PiShoppingCartDuotone size="200" color="#e8df7d" className="my-10" />
      <PropagateLoader color="#ffe342" size="30px" className="-translate-x-5" />
    </div>
  );
};

export default Loader;
