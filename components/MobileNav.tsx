import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/constants/constants';

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`uppercase px-3 py-1 ${
            link.name === 'contacts'
              ? 'bg-accent px-3 py-1 text-white'
              : pathName === link.path
              ? 'text-accent'
              : ' text-text'
          }  text-[24px]`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default MobileNav;
