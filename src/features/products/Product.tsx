import Image from 'next/image';
import type { ArmourItem } from '../../assets/data/armour';

const Product = ({ title, image, price, amount }: ArmourItem) => {
  return (
    <article>
      <Image
        src={image}
        alt={title}
        width={350}
        height={500}
        objectFit="cover"
        draggable="false"
      />
      <div className="p-6 bg-black">
        <h4>{title}</h4>
        <p>Price: ${price}</p>
        <p>Stock: {amount} in stock</p>
      </div>
    </article>
  );
};

export default Product;
