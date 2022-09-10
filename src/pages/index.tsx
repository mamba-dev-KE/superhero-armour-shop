import type { NextPage } from 'next';
import { NavBar } from '../components/NavBar/NavBar';
import { ProductsList } from '../features/products/ProductsList';

const Home: NextPage = () => {
  return (
    <main className="bg-slate-900 min-h-screen">
      <NavBar />
      <ProductsList />
    </main>
  );
};

export default Home;
