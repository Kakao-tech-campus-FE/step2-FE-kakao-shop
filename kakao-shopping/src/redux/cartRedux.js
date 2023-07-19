import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartForModify: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.optionId === action.payload.optionId);
      if (!!existingItem) {
        existingItem.quantity += 1;
      } else {       
        state.cartItems.push(action.payload);
      }
    },
    subtractItem: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.optionId === action.payload.optionId);
      existingItem.quantity -= 1;
    },
    clearItem: (state) => {
      state.cartItems = [];
    },
    setCart: (state, action) => { // 장바구니 데이터 받아오고 저장
      if(state.cartForModify.length >= action.payload.length) return;
      state.cartForModify = [];
      action.payload.forEach(element => {
        element.carts.forEach(cart => {
          // 각 카트에 대해 cartId와 quantity를 cartForModify에 추가
          console.log(cart);
          state.cartForModify.push({
            cartId: cart.id,
            quantity: cart.quantity,
            optionId: cart.option.id
          })

        })
      });
      console.log(state.cartForModify);
    },
    modifyItem: (state, action) => { // 장바구니 수정 (장바구니 페이지에서 수량 변경)
      state.cartForModify
      .find(cart => cart.cartId === action.payload.cartId)
      .quantity += action.payload.num;
    }
  },
});

export const { addItem, subtractItem, clearItem, setCart, modifyItem } = cartSlice.actions;
export default cartSlice.reducer;