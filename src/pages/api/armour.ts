import type { NextApiRequest, NextApiResponse } from 'next';
import type { ArmourItem } from '../../assets/data/armour';
import armour from '../../assets/data/armour';

type Data = {
  armour: ArmourItem[];
};

const product = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (armour) {
    res.status(200).json({ armour: armour });
  }
};

export default product;
