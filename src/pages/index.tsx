import type { NextPage } from 'next';
import { NavBar } from '../components/NavBar/NavBar';
import { useEffect } from 'react';
import { useAppDispatch } from '../app/hook';
import { fetchProducts } from '../features/products/productsSlice';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <main className="bg-slate-900 min-h-screen">
      <NavBar />
    </main>
  );
};

export default Home;
