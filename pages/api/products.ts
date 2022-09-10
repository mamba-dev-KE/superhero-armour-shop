import type { NextApiRequest, NextApiResponse } from 'next';
import products from '../../src/assets/data/data';
import type { Products } from '../../src/assets/data/data';

type Data = {
  products: Products;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ products: products });
}
