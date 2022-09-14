import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Armour } from '../../assets/data/armour';

export const armourAPI = createApi({
  reducerPath: 'armourAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Armour, null>({
      query: () => '/api/armour',
    }),
  }),
});

export const { useGetProductsQuery } = armourAPI;
