import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts } from '../../services/product'
import _ from 'lodash'

const initialState = {
  products:[],
  loading: false,
  error: null, // error exist: { message, status}
  isEnd: false
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action)=>{
      state.loading = true
    })
    //Promise.resolve() 일 경우 
    builder.addCase(getProducts.fulfilled, (state, action)=>{
      // action.payload.response는 최대 10개의 요소가 있을 것
      // 10개보다 작다면 더이상 데이터를 불러오는게 의미 없음
      state.loading = false
      
      if (action.payload.response.length <10){
        state.isEnd = true
      }
      
      // 중복 제거 : 무한 스크롤 
      state.products = _.uniqBy([...state.products,...action.payload.response],'id')
      state.error = null
    })
    //Promise.reject()
    builder.addCase(getProducts.rejected, (state, action)=>{
      state.loading = false
      state.error = action.payload.error
    })

  }
})

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (page) => {
    const response = await fetchProducts(page)
    return response.data //action.payload에 들어감  {success, respose : [], error}
  }
)


export default productsSlice.reducer;