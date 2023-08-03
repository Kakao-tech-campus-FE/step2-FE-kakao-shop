import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../services/product';
import _ from 'lodash';

const initialState = {
    products: [],
    loading: false,
    error: null, //error exist :{message,status}
    isEnd: false
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
            console.log(action);
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            //actrion.payload.response 는 최대 10개의 요소가 있을 것.
            //10개보다 작다면 더이상 데이터를 불러오는게 의미 없음.
            const prevLength = state.products.length;
            if (action.payload.response.length < 10) {
                state.isEnd = true;
            }
            state.loading = false;
            state.products.concat(action.payload.response)

            state.products = _.uniqBy([...state.products, ...action.payload.response], 'id')
            //어떤 기준에 따라 유니크한것만 추출
            const nextLength = state.products.length;

            if (prevLength === nextLength) {
                //데이터추가 없었다.->이미 10개의 데이터가 들어왔거나 오버플로우 발생
            }
            state.error = action.payload.error;
            console.log(action);
            //아래 리액트 thunck 의 response.data가 이 action.payload 안에 담김.
        })//비동기 작업 성공적으로 완료
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            alert('에러발생.')
            //alert(action);
            console.log('통신 에러', action.error.message)
        })
        //동기 작업이 실패한 상태
    }
});



export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (page) => {
        const response = await fetchProducts(page);
        return response.data.response; //action 의 페이로드에 담김.
    }
)

export default productsSlice.reducers;
// productsSlice = creactSlice({ 로 한 값들을 알아서 reducers 에 넣어주기때문에 따로 만들 필요 없음.


//페이지 값에 따라서 리턴: 페이지네이티드 된 데이터
