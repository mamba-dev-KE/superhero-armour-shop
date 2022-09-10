import Image from 'next/image';
import type { ArmourItem } from '../../assets/data/armour';

const Product = ({ title, image }: ArmourItem) => {
  return (
    <article>
      <h4>{title}</h4>
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        style={{ objectFit: 'cover' }}
      />
    </article>
  );
};

export default Product;
