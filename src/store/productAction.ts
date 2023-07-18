import { ProductResDto, responseError } from "@/dtos/response.dto";
import { commonAxios } from "@/functions/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProductDetail = createAsyncThunk<
  ProductResDto,
  number,
  { rejectValue: responseError }
>(
  "product/getProductDetail",
  async (id: number, { rejectWithValue, fulfillWithValue }) => {
    try {
      if (Number.isNaN(id)) {
        location.href = "/";
        return rejectWithValue({ message: "id is not number", status: 400 });
      }

      const response = await commonAxios.get(`/products/${id}`);
      const resData = new ProductResDto(response.data);

      if (resData.error) {
        return rejectWithValue(resData.error);
      }
      return fulfillWithValue(resData);
    } catch (error) {
      return rejectWithValue({ message: String(error), status: 400 });
    }
  }
);
