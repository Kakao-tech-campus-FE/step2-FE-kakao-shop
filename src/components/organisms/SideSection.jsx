import Card from "../atoms/Card";

const SideSection = () => {
  return (
    <div className="side-section ml-[31px] pl-[32px] pt-[30px] h-[1000px] border-l border-gray-100">
      <Card to="/">
        <img
          className="product-image rounded-t-[10px]"
          src="https://st.kakaocdn.net/thumb/C750x422.fjpg/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fshoppingstore%2Fhome%2Fspecial_card%2F20230731190048_3104764de79c45ecac529145667a8bde.png"
          alt="갤럭시 Z 폴드5"
        />
        <div className="info-special flex flex-col p-[20px] bg-gray-600 rounded-b-[10px]">
          <span className="desc-special text-[12px] text-yellow-100 font-bold">
            무료 용량 더블 UP!
          </span>
          <span className="product-name text-[15px] text-white font-semibold pt-[5px]">
            갤럭시 Z 폴드5
          </span>
          <span className="tit-special text-[15px] font-semibold text-white">
            최대 혜택가 1,961,300원
          </span>
          <span className="product-price text-[21px] font-extrabold text-white pt-[8px]">
            할인가 2,097,600원
          </span>
        </div>
      </Card>
    </div>
  );
};

export default SideSection;
