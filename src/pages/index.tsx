import type { NextPage } from 'next';
import { NavBar } from '../components/NavBar/NavBar';
import { useGetProductsQuery } from '../features/api/apiSlice';

const Home: NextPage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery(null);

  console.log(error);

  return (
    <main className="bg-slate-900 min-h-screen">
      <NavBar />
    </main>
  );
};

export default Home;
