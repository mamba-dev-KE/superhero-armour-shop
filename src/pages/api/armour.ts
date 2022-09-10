import type { NextApiRequest, NextApiResponse } from 'next';
import armour from '../../src/assets/data/armour';
import type { Products } from '../../src/assets/data/armour';

type Data = {
  armour: Products;
};

const product = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (armour) {
    res.status(200).json({ armour: armour });
  }
};

export default product;
