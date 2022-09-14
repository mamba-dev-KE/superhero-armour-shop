import { useGetProductsQuery } from '../api/apiSlice';
import Product from './Product';

const ProductsList = () => {
  const {
    data: products,

    isLoading,
    error,
  } = useGetProductsQuery(null);

  const featured = products?.armour.filter(
    (product) => product.featured === true
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    if ('status' in error) {
      const errMessage =
        'error' in error ? error.error : JSON.stringify(error.data);
      return <p>{errMessage}</p>;
    }
    return <p>{error.message}</p>;
  }

  return (
    <div className="max-w-[120rem] mx-auto flex flex-wrap gap-7 text-white">
      {products?.armour.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
