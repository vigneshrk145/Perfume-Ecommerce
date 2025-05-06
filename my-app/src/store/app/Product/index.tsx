import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";





interface DashboardState {
  ProductData: any[]; 
  white: object;
  loading: boolean;
  error?: string;
}


export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/products/getproducts', {
      });
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue("Failed to fetch dashboard data");
    }
  }
);


const initialState: DashboardState = {
  ProductData: [],
  white: {},
  loading: false
};


const dashboardSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    dashAccess: (state, action: PayloadAction<object>) => {
      state.white = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.ProductData = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});


export const { dashAccess } = dashboardSlice.actions;
export default dashboardSlice.reducer;
