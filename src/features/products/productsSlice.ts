import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { Armour, ArmourItem } from '../../assets/data/armour';

export const fetchProducts = createAsyncThunk<Armour>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/armour');
      const products = (await response.json()) as Armour;
      return products;
    } catch (error) {
      return rejectWithValue(`An error occurred: ${error}`);
    }
  }
);
interface ProductState {
  products: ArmourItem[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  isError: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
