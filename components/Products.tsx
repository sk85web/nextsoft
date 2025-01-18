'use client';

import ProductItem from './ProductItem';
import { products } from '@/constants/products';
import Slider from './Slider';

const Products = () => {
  return (
    <section className="container w-full max-w-[1440px] px-5 py-[42px] md:p-32 bg-gray_light">
      <div className="flex flex-col gap-1 md:gap-[84px] items-center">
        <h2 className="uppercase text-text text-[64px] bold">our products</h2>
        <ul className="hidden gap-x-8 gap-y-20 md:flex flex-wrap justify-center">
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem
                title={product.title}
                src={product.imageSrc}
                width={product.width.md}
                height={product.height.md}
              />
            </li>
          ))}
        </ul>

        <div className="w-full md:hidden">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Products;
