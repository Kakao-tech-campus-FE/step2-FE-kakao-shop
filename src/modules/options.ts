import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface optionState {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface selectedOptions {
  options: optionState[];
  totalPrice: number;
  totalCount: number;
}

const initialState: selectedOptions = { options: [], totalPrice: 0, totalCount: 0 };

const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    plusOptionQuantity: (state, action: PayloadAction<optionState>) => {
      state.options[action.payload.id] = action.payload;
      state.totalPrice += action.payload.price;
      state.totalCount += 1;
    },
    minusOptionQuantity: (state, action: PayloadAction<optionState>) => {
      state.options[action.payload.id] = action.payload;
      state.totalPrice -= action.payload.price;
      state.totalCount -= 1;
    },
    addOption: (state, action: PayloadAction<optionState>) => {
      state.options[action.payload.id] = action.payload;
      state.totalPrice += action.payload.price;
      state.totalCount += 1;
    },
    deleteOption: (state, action: PayloadAction<optionState>) => {
      delete state.options[action.payload.id];
      state.totalPrice -= action.payload.price * action.payload.quantity;
      state.totalCount -= action.payload.quantity;
    },
  },
});

export const { plusOptionQuantity, minusOptionQuantity, addOption, deleteOption, reset } = optionSlice.actions;
export default optionSlice.reducer;
