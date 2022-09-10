import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { ArmourItem } from '../../assets/data/armour';

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
});

export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
