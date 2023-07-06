import * as types from "./ActionTypes";

export const 액션타입1_생성함수 = () => {
  return { type: types.액션타입1 };
};

export const 액션타입2_생성함수 = (payload) => {
  return { type: types.액션타입2, payload };
};
