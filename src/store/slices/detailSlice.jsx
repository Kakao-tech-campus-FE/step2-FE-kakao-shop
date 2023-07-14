import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, getProductById } from '../../services/product';
import _ from 'lodash';

const initialState = {
    detail: null,
    loading: false,
    error: null, //error exist :{message,status}
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDetail.pending, (state, action) => {
            state.loading = true;
            console.log(action);
        })
        builder.addCase(getDetail.fulfilled, (state, action) => {

        })//비동기 작업 성공적으로 완료
        builder.addCase(getDetail.rejected, (state, action) => {
            state.loading = false;
            alert('에러발생.')
            console.log('통신 에러', action.error.message)
        })
        //동기 작업이 실패한 상태
    }
});



export const getDetail = createAsyncThunk(
    "detail/getDetail",
    async (id, thunkApi) => {
        try {
            const response = await getProductById(id);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data);
        }

    }
)

export default detailSlice.reducers;