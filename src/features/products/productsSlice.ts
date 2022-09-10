import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { Armour, ArmourItem } from '../../assets/data/armour';

export const fetchProducts = createAsyncThunk<Armour>(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:3001/api/armour');
    const products = (await response.json()) as Armour;

    return products;
  }
);

interface ProductState {
  products: ArmourItem[];
}

const initialState: ProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
