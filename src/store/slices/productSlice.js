import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../components/services/product';

const initialState = {
    products: [],
    laoding: false, // { success, response [] , error }
    error: null,    // { message, status }
}

const productSlice = createSlice({
    name: "products",
    initialState,
    
    // redux-thunk를 사용하게 되면 extraReducers를 활용하게 된다.
    // extraReducers는 value로 콜백 함수를 받으며, builder에는 우리가 원하는 케이스를 넣을 수 있다.
    // thunk의 getProducts 함수에 대한 3가지 케이스에 대해서 처리를 진행해준다  
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.laoding = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            // API처리가 되었을 때, action.payload에는 { success, response [], error }가 담겨있게 된다.
            state.laoding = false;
            state.products = action.payload.response; 
            state.error = action.payload.error;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            // API처리시 에러가 존재하는 경우에는 { message, status } 가 존재한다.
            state.error = action.payload.error;
            state.laoding = false;
        })
    }
});

// redux-thunk를 이용한 비동기 처리
// 1번째 파라미터 : Unique한 Key값
// 2번째 파라미터 : 비동기 콜백 함수
export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page) => {
        // page에 따라 fetchProducts를 실행하여 data를 action.payload에 담아 반환함
        const response = await fetchProducts(page);
        return response.data;
        // API문서에서 반환값으로 크게 success, response, error가 들어간다.
    }
)

// reducer 자체도 export 해주어야 한다!
// reducer가 존재하지 않더라도 createSlice에 의해 extraReducer가 변환되어 값을 담아준다.
export default productSlice.reducer;