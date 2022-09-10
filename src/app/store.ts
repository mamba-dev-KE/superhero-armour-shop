import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import productsReducer from '../features/products/productsSlice';
import { armourAPI } from '../features/api/apiSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    [armourAPI.reducerPath]: armourAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(armourAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
