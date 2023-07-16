import { instance } from "./index";

export const fetchProducts = async (page = 0) => {
  try {
    if (typeof page !== "number") {
      throw new Error("page는 숫자이어야 합니다.");
    }
    if (isNaN(page)) {
      throw new Error("page는 숫자이어야 합니다.");
    }
    if (page < 0) {
      throw new Error("page는 0보다 작을 수 없습니다.");
    }
    const response = await instance.get(`/products?page=${page}`);
    console.log("FetchProducts Api data", response.data);
    return response.data;
  } catch (error) {
    console.log("FetchProducts Api Error", error);
    throw error;
  }
};

// ❔의문점:
// - fetchProducts에서 에러를 return 하면 fetchProducts를 요청하는 곳에서
//   Error객체를 못 받아 에러가 발생하는데 throw를 하면 받을 수 있음 -> useQuery에서 받는건가?

export const getProductById = (id) => {
  if (!id) {
    return new Error("id가 없습니다.");
  }
  return instance.get(`/products/${id}`);
};

// 🔥 개념
// 1. 에러캐칭은 윗단에서 처리하고 정상 콜백 수행을 가장 아래에서 수행한다!!
// 2. axios 인터셉터를 통해 API 요청을 보내는 모든 곳에서 동일한 에러 처리 로직을 중앙에서 관리한다.
//    fetchProducts 함수에서 발생한 에러는 해당 함수 내부에서 처리되고, 그 이후 응답을 인터셉터가 가로채서 추가적인 에러를 처리한다.
//    -> 코드의 가독성과 유지 보수성을 높일 수 있음
