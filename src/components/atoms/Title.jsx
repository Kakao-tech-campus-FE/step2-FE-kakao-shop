import { staticServerUri } from "../../constants/serverUri";
import Photo from "./Photo";

const Title = () => {
  return (
    <Photo
      src={staticServerUri + "/logoKakaoText.png"}
      alt="logoKakaoText"
      className={"mx-auto mt-[50px] block w-[110px]"}
    ></Photo>
  );
};

export default Title;
