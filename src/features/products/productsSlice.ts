import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface ProductState {
  products: string[];
}

const initialState: ProductState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: () => {},
  },
});

export const { fetchProducts } = productsSlice.actions;
export const selectCount = (state: RootState) => state.products;
export default productsSlice.reducer;
