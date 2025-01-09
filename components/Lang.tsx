import Image from 'next/image';

const Lang = () => {
  return (
    <>
      <button className="flex gap-1 items-center" aria-label="change language">
        <Image
          className="w-[15px] h-[15px]"
          src="/assets/header/lang.png"
          width={15}
          height={15}
          alt="lang-icon"
        />
        <span className="uppercase text-text  text-[24px] hover:text-black transition-all duration-200">
          eng
        </span>
      </button>
    </>
  );
};

export default Lang;
