const AUTH = {
  LOGIN: "/login",
  CHECK: "/check",
  JOIN: "/join",
};

const PRODUCT = {
  PRODUCTS: "/products",
};

const CARTS = {
  ADD: "/carts/add",
};

const KEYS = {
  ADD_CART_ITEM: "addCartItem",
  GET_ALL_PRODUCTS: "getAllProducts",
  GET_PRODUCT_BY_ID: "getProductByID",
};

Object.freeze(AUTH);
Object.freeze(PRODUCT);
Object.freeze(CARTS);
Object.freeze(KEYS);
export default { AUTH, PRODUCT, CARTS, KEYS };
