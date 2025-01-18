import Image from 'next/image';

import { features } from '@/constants/features';

const Features = () => {
  return (
    <section className="container w-full max-w-[1440px] relative">
      {/* Background */}
      <Image
        className="z-[-1]"
        src="/assets/features/features.png"
        alt="intro"
        layout="fill"
      />

      <div className="py-4 md:py-16 mx-auto w-full max-w-[1056px] flex flex-col gap-4 md:gap-8">
        <h2 className="text-accent font-primary font-bold text-[24px] pb-0 md:pb-[12px] text-center">
          OUR KEY FEATURES <br />
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 md:gap-16 font-primary -mb-4">
          <p className="flex gap-2 items-start mx-auto text-accent text-[80px] md:text-[84px] font-primary font-normal leading-[64px] md:leading-[84px]">
            50
            <span className="font-bold text-[24px] md:text-[28px] font-primary_ru text-text uppercase leading-7 md:leading-[36px]">
              экспертов
              <br /> в команде
            </span>{' '}
          </p>
          <p className="flex gap-2 items-start mx-auto text-accent text-[80px] md:text-[84px] font-primary font-normal leading-[64px] md:leading-[84px]">
            5
            <span className="font-bold text-[24px] md:text-[28px] font-primary_ru text-text uppercase leading-7 md:leading-[36px]">
              лет опыта
              <br /> в индустрии
            </span>{' '}
          </p>
          <p className="flex gap-2 items-start mx-auto text-accent text-[80px] md:text-[84px] font-primary font-normal leading-[64px] md:leading-[84px]">
            30
            <span className="font-bold text-[24px] md:text-[28px] font-primary_ru text-text uppercase leading-7 md:leading-[36px]">
              успешных
              <br /> кейсов
            </span>{' '}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-4 sm:px-5 px-0 mt-5 md:mt-0 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex gap-9 items-center max-w-[512px] sm:py-4 ${
                index % 2 === 0 ? 'order-1' : 'order-3'
              } md:order-none`}
            >
              <Image
                className="min-w-[78px] md:w-[108px]"
                src={feature.imageSrc}
                width={108}
                height={110}
                alt=""
                sizes="(min-width: 360px) 78px, (max-width: 1440px) 108px"
              />
              <p className="text-[14px] font-regular md:text-[16px]  text-text max-w-[308px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
