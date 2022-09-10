import { StaticImageData } from 'next/image';
import batmanArmour1 from '../images/armour-1.jpeg';
import batmanArmour2 from '../images/armour-2.jpeg';

const armour = [
  {
    id: '1',
    title: 'Batman Armour 1',
    superhero: 'batman',
    image: batmanArmour1,
    price: '10000',
    amount: 10,
  },
  {
    id: '2',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: batmanArmour2,
    price: '10000',
    amount: 10,
  },
];

export default armour;
export type Armour = typeof armour;
export type ArmourItem = {
  id: string;
  title: string;
  superhero: string;
  image: StaticImageData;
  price: string;
  amount: number;
};
