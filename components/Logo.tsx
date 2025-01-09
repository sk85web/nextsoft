import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        src="/assets/header/logo.png"
        alt="Logo"
        className="w-[149px] h-auto lg:w-[231px]"
        width={231}
        height={41}
      />
    </div>
  );
};

export default Logo;
