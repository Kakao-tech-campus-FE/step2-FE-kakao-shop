import React from 'react';

const PNFPage = () => {
  return (
    <div className="text-center">
      <div className="font-exo h-[430px] text-white text-[300px] drop-shadow-outFlatWhite">404</div>
      <div className=" text-[#b5bfde] font-bold">
        <p className="text-xl mb-3">요청하신 페이지를 찾을 수 없습니다.</p>
        <p>존재하지 않은 주소를 입력하셨거나</p>
        <p>요청하진 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
      </div>
    </div>
  );
};

export default PNFPage;
