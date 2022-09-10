import batmanArmour1 from '../images/armour-1.jpeg';

const products = [
  {
    id: 1,
    superhero: 'batman',
    image: batmanArmour1,
    price: 10000,
  },
];

export default products;
export type Products = typeof products;
