import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  EffectCube,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import { products } from '@/constants/products';
import ProductItem from './ProductItem';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      effect={'cube'}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      spaceBetween={70}
      slidesPerView={1}
      centeredSlides={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      style={{
        paddingTop: '70px',
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductItem
            title={product.title}
            src={product.imageSrc}
            width={product.width.sm}
            height={product.height.sm}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
