import Image from 'next/image';

const Interface = () => {
  return (
    <section className="container w-full max-w-[1440px] px-5 xl:pr-0 xl:pl-32 py-9 bg-interface-gradient flex items-center flex-col lg:flex-row">
      <div className="flex justify-start flex-col gap-2 lg:gap-6 max-w-[525px] w-full">
        <h1 className="text-accent text-[24px] font-bold text-left font-primary order-2 lg:order-1">
          INTERFACE CASINO
        </h1>
        <div className="block lg:hidden w-full max-w-[809px] order-3">
          <Image
            src="/assets/interface/group.png"
            width={809}
            height={603}
            alt=""
            sizes="(max-width: 768px) 375px"
          />
        </div>
        <h2 className="text-white text-[64px] font-normal text-left font-primary leading-[64px] order-1 lg:order-2">
          INDIVIDUAL DESIGN
        </h2>
        <p className="text-gray_light text-[14px] text-left font-regular leading-5 order-5">
          Мы используем опыт лучших специалистов отрасли в области дизайна
          для создания привлекательных и простых в использовании веб-сайтов.
          Наш основной шаблон создан с учетом передовых практик UX / UI.
        </p>
        <p className="text-gray_light text-[14px] text-left font-regular leading-5 order-6">
          Оптимизация работы вашего казино с учётом особенностей
          интернет-соединения и популярных устройств в различных регионах.
        </p>
        <div className="bg-interface-gradient-reverse pl-0 gap-[14px] lg:pl-[116] py-6 pr-6 flex items-center static md:relative order-7">
          <Image
            className="lg:absolute left-0 xl:-left-5 bottom-20 md:mr-3 lg:bottom-0 min-w-[114px]"
            src="/assets/interface/interface-logo.png"
            width={137}
            height={131}
            alt=""
          />
          <p className=" text-gray_light text-[14px] text-left font-regular">
            Кроме того, NextSoft предоставляет необходимые рекомендации
            и технические средства (API) для проектирования, сборки и поддержки
            интерфейса полностью на вашей стороне.
          </p>
        </div>
      </div>

      <div className="hidden lg:block w-full max-w-[809px]">
        <Image
          src="/assets/interface/group.png"
          width={809}
          height={603}
          alt=""
          sizes="(max-width: 768px) 375px"
        />
      </div>
    </section>
  );
};

export default Interface;
