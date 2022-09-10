import type { NextPage } from 'next';
import { NavBar } from '../src/components/NavBar/NavBar';

const Home: NextPage = () => {
  return (
    <div className="home">
      <NavBar />
    </div>
  );
};

export default Home;
