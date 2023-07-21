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
  GET: "/carts",
  UPDATE: "/carts/update",
};

const KEYS = {
  GET_ALL_PRODUCTS: "getAllProducts",
  GET_PRODUCT_BY_ID: "getProductByID",
  ADD_CART_ITEM: "addCartItem",
  GET_CART_ITEMS: "getCartItems",
  UPDATE_CART_ITEMS: "updateCartItems",
};

Object.freeze(AUTH);
Object.freeze(PRODUCT);
Object.freeze(CARTS);
Object.freeze(KEYS);
export default { AUTH, PRODUCT, CARTS, KEYS };
