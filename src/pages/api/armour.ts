import type { NextApiRequest, NextApiResponse } from 'next';
import armour from '../../assets/data/armour';
import type { Armour } from '../../assets/data/armour';

type Data = {
  armour: Armour;
};

const product = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (armour) {
    res.status(200).json({ armour: armour });
  }
};

export default product;
