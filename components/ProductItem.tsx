import Image from 'next/image';
import Link from 'next/link';

interface ProductsProps {
  id?: number;
  title: string;
  src: string;
  width: number;
  height: number;
}

const ProductItem: React.FC<ProductsProps> = ({
  title,
  src,
  width,
  height,
}) => {
  return (
    <Link href="/">
      <div className="w-full md:w-[272px] h-[184px] md:h-[272px] bg-white hover:bg-product-gradient hover:border-2 border-accent shadow-features-shadow cursor-pointer">
        <div className="flex flex-col gap-[50px] items-center relative px-8 h-full">
          <Image
            src={src}
            width={width}
            height={height}
            alt=""
            className="absolute -top-[38%] md:-top-[24%]"
          />
          <h3 className="text-text uppercase font-primary font-normal text-[32px] absolute bottom-6 md:bottom-16">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
