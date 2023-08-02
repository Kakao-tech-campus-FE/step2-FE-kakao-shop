import { instance } from "./index";

/**
 * 장바구니에 있는 모든 상품을 주문 API(server 장바구니)
 */
export const order = () => {
  return instance.post("/orders/save");
};

export const getOrderFromId = async (id) => {
  try {
    if (!id) {
      throw new Error("id가 없습니다.");
    } else if (typeof id !== "number") {
      throw new Error("id는 숫자이어야 합니다.");
    } else if (isNaN(id)) {
      throw new Error("id는 숫자이어야 합니다.");
    } else if (id < 0) {
      throw new Error("id는 0보다 작을 수 없습니다.");
    }
    const response = await instance.get(`/orders/${id}`);
    // console.log("getOrderFromId Api response", response);
    return response.data.response;
  } catch (error) {
    // console.log("getOrderFromId Api error", error);
    throw error;
  }
};

// ⭐️ HTTP Method
// GET: 데이터를 조회할 때 사용, 보안이 필요없는 데이터를 조회할 때 사용, payload가 없음
// POST: 데이터를 생성할 때 사용, 보안이 필요한 데이터를 조회할 때 사용, payload가 있음
// DELETE: 데이터를 삭제할 때 사용, payload가 없음
// PUT: 데이터를 수정할 때 사용
// PATCH: 데이터를 수정할 때 사용,
// - PUT과의 차이점: PUT은 전체 데이터를 수정할 때 사용, PATCH는 부분 데이터를 수정할 때 사용
