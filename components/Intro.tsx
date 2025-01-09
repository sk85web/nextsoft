import Image from 'next/image';

import Input from './ui/Input';
import Button from './ui/Button';

const Intro = () => {
  return (
    <div className="container relative block lg:flex">
      <Image
        className="absolute top-[-76px] z-[-1] h-[620px]"
        src="/assets/intro/intro.png"
        alt="intro"
        width={1440}
        height={620}
      />
      <div className="pt-[76px] mx-auto xl:w-[928px] max-w-[928px] text-text flex flex-col gap-8">
        <h1 className=" text-[48px] leading-[40px]">
          <span className="text-accent text-[64px] leading-[64px]">
            Launch, scale and upgrade <br />
          </span>
          your iGaming business using <br />
          our solutions and technologies
        </h1>
        <p className="text-[14px] font-regular leading-5 max-w-[480px]">
          Запустите свой собственный проект онлайн-казино с нуля. Вы получаете
          эксклюзивный доступ к нашей базовой платформе с полным набором функций
          и возможностью интеграции собственных решений.
        </p>
        <div className="flex gap-4">
          <Input type="email" placeholder="Enter your Email" />
          <Button />
        </div>
      </div>
      <Image
        className="xl:absolute static right-0 top-0"
        src="/assets/intro/intro-logo.png"
        alt="logo"
        width={570}
        height={620}
        sizes="(max-width: 360px) 174px, (min-width: 1440px) 570px"
      />
    </div>
  );
};
export default Intro;
