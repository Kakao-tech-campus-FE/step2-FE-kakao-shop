import { instance } from "./index";

// 제품목록 가져오는 API 요청(원래코드!!!)
// export const fetchProducts = (page = 0) => {
//   return instance.get("/products" + "?page=" + page);
// };

// 스켈레톤 확인용 딜레이 걸어보기(이렇게 임의로 딜레이를 걸어도되는걸까?)
export const fetchProducts = (page = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(instance.get("/products" + "?page=" + page));
    }, 1000); // 1초 딜레이
  });
};

// 특정한 아이디 가져오기
export const getProductById = (id) => {
  // 만약 id가 존재하지 않는 경우 이 요청 보내지면 안되겠지 => 윗단에서 에러캐칭 필요
  if (!id) {
    throw Error("id가 없습니다!");
  }
  // 정상 콜백은 맨 마지막에
  return instance.get("/products/" + id);
};
