import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the structure of a product item
interface Product {
  _id: string;
  image: string;
  description: string;
  price: number;
  // Add other fields based on your API response
}

// Define the shape of the dashboard state
interface DashboardState {
  ProductData: Product[];
  white: Record<string, unknown>; // Replaces 'object' with safer type
  loading: boolean;
  error?: string;
}

// Async thunk to fetch products
export const fetchProduct = createAsyncThunk<Product[]>(
  'product/fetchProduct',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Product[]>('http://localhost:5000/products/getproducts');
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("Failed to fetch dashboard data");
    }
  }
);

// Initial state
const initialState: DashboardState = {
  ProductData: [],
  white: {},
  loading: false
};

// Slice definition
const dashboardSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    dashAccess: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.white = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.ProductData = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

// Export actions and reducer
export const { dashAccess } = dashboardSlice.actions;
export default dashboardSlice.reducer;
