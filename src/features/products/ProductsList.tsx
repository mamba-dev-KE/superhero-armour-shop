import { useGetProductsQuery } from '../api/apiSlice';
import Product from './Product';

interface ProductsList {}

export const ProductsList = ({}) => {
  const {
    data: products,
    isError,
    isLoading,
    error,
  } = useGetProductsQuery(null);

  return (
    <div className="text-white">
      {isLoading && <p>Loading...</p>}
      {products &&
        products.armour.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      {isError && JSON.stringify(error)}
    </div>
  );
};
