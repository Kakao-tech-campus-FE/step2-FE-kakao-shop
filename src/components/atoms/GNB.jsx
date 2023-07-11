import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import Photo from "./Photo";

// import ProductSection from "../components/templates/ProductSection";

const GNB = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="flex items-center justify-between border-b border-gray-300 px-20 py-5">
        <Link to="/" replace={true}>
          <Photo
            src={"/logoKakao.png"}
            alt="logoKakao"
            className={"w-[100px]"}
          ></Photo>
        </Link>
        <div className="flex items-center justify-evenly">
          <Link>
            <Photo src={"/cart.png"} alt="cart" className={"w-[40px]"} />
          </Link>
          <span className="ml-5 mr-6 text-[20px] text-[rgba(34,34,34,.2)]">
            |
          </span>
          {!email ? (
            <Link className="text-[13px]" to="/login">
              로그인
            </Link>
          ) : (
            <Link
              className="text-[13px]"
              to="/"
              onClick={() => {
                dispatch(setEmail(null));
              }}
            >
              로그아웃
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default GNB;
