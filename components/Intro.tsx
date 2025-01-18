import Image from 'next/image';

import Input from './ui/Input';
import Button from './ui/Button';

const Intro = () => {
  return (
    <section className="container h-[620px] max-w-[1440px] w-full mx-auto relative block lg:flex">
      {/* Background */}
      <Image
        className="z-[-1]"
        src="/assets/intro/intro.png"
        alt="intro"
        layout="fill"
      />

      {/* Width screen = sm */}
      <div className="sm:flex md:hidden px-5 pt-6 gap-5 text-text mx-auto flex-col items-center w-full overflow-hidden">
        <div className="text-[28px] leading-[32px] text-center w-full">
          <div className="flex w-full">
            <span className="text-accent text-[64px] text-right leading-[64px]">
              Launch, scale and upgrade
            </span>
            <div className="sm:mt-4 min-w-[174px] min-h-[208px]">
              <Image
                src="/assets/intro/intro-logo.png"
                alt="logo"
                width={174}
                height={208}
                objectFit="cover"
                sizes="(min-width: 360px) 174px"
              />
            </div>
          </div>
          <p className="text-left">
            your iGaming business using <br />
            our solutions and technologies
          </p>
        </div>

        <p className="text-[14px] text-center font-regular leading-5 w-full">
          Запустите свой собственный проект онлайн-казино с нуля. Вы получаете
          эксклюзивный доступ к нашей базовой платформе с полным набором функций
          и возможностью интеграции собственных решений.
        </p>

        <div className="flex gap-4 flex-col w-full">
          <Input type="email" placeholder="Enter your Email" />
          <Button />
        </div>
      </div>

      {/* Width screen > sm */}
      <div className="md:flex hidden px-4 lg:pl-0 lg:ml-[256px] pt-[75px] gap-5">
        <div className=" mx-auto  text-text flex flex-col gap-8">
          <h1 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[40px]">
            <span className="text-accent text-[36px] md:text-[64px] leading-[36px] md:leading-[58px]">
              Launch, scale and upgrade <br />
            </span>
            your iGaming business using <br />
            our solutions and technologies
          </h1>
          <p className="text-[14px] font-regular leading-5 max-w-[480px]">
            Запустите свой собственный проект онлайн-казино с нуля. Вы получаете
            эксклюзивный доступ к нашей базовой платформе с полным набором
            функций и возможностью интеграции собственных решений.
          </p>
          <div className="flex gap-4">
            <Input type="email" placeholder="Enter your Email" />
            <Button />
          </div>
        </div>
        <div className="-mt-[61px]">
          <Image
            src="/assets/intro/intro-logo.png"
            alt="logo"
            width={570}
            height={620}
            objectFit="cover"
            sizes="(min-width: 360px) 174px, (max-width: 1440px) 570px"
          />
        </div>
      </div>
    </section>
  );
};
export default Intro;
