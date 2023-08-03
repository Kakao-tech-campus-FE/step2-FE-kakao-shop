import { getByTitle, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { logInReq, signUpReq } from "apis/user";
import { addCartReq } from "apis/cart";
import { orderReq } from "apis/order";

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

beforeEach(() => {
  Storage.prototype.localStorage = mockLocalStorage;
});

afterEach(() => {
  jest.clearAllMocks();
});

test("회원가입", async () => {
  await signUpReq({
    email: "jsh@jnu.ac.kr",
    password: "jsh182888!",
    username: "JsH",
  });
});

test("로그인", async () => {
  await logInReq({
    email: "jsh@jnu.ac.kr",
    password: "jsh182888!",
  }).then((res) => {
    localStorage.setItem("token", res.headers.authorization);
  });
});

test("장바구니 추가", async () => {
  await addCartReq([{ optionId: 1, quantity: 5 }]);
});

test("주문 결제", async () => {
  await orderReq();
});
