import type { NextPage } from 'next';
import { NavBar } from '../components/NavBar/NavBar';

const Home: NextPage = () => {
  return (
    <main className="bg-slate-900 min-h-screen">
      <NavBar />
      hello
    </main>
  );
};

export default Home;
