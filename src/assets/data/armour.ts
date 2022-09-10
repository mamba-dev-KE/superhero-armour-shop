const armour = [
  {
    id: '1',
    title: 'Batman Armour 1',
    superhero: 'batman',
    image: '/images/armourOne.jpeg',
    price: '15000',
    amount: 10,
  },
  {
    id: '2',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourTwo.jpeg',
    price: '12000',
    amount: 5,
  },
  {
    id: '3',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourThree.jpeg',
    price: '10000',
    amount: 7,
  },
];

export type ArmourItem = {
  id: string;
  title: string;
  superhero: string;
  image: string;
  price: string;
  amount: number;
};
export type Armour = {
  armour: ArmourItem[];
};
export default armour;
