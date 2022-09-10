import { StaticImageData } from 'next/image';

const armour = [
  {
    id: '1',
    title: 'Batman Armour 1',
    superhero: 'batman',
    image: '/images/armourOne.jpeg',
    price: '15,000',
    amount: 10,
    featured: false,
  },
  {
    id: '2',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourTwo.jpeg',
    price: '12,000',
    amount: 5,
    featured: false,
  },
  {
    id: '3',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourThree.jpeg',
    price: '10,000',
    amount: 7,
    featured: false,
  },
  {
    id: '4',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourFour.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '5',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourFive.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '6',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourSix.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '7',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourSeven.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '8',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourEight.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '9',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourNine.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '10',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourTen.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '11',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourEleven.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '12',
    title: 'Batman Armour 2',
    superhero: 'batman',
    image: '/images/armourTwelve.jpeg',
    price: '8,000',
    amount: 7,
    featured: false,
  },
  {
    id: '13',
    title: 'Wonder Woman',
    superhero: 'wonder woman',
    image: '/images/wonderWoman.jpeg',
    price: '8,000',
    amount: 7,
    featured: true,
  },
];

export type ArmourItem = {
  id: string;
  title: string;
  superhero: string;
  image: StaticImageData;
  price: string;
  amount: number;
  featured: boolean;
};
export type Armour = {
  armour: ArmourItem[];
};
export default armour;
