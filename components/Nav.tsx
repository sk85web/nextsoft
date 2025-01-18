'use client';

import Link from 'next/link';

import { links } from '@/constants/constants';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathName = usePathname();

  return (
    <>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`uppercase text-${
            pathName === link.path ? 'accent' : 'text'
          } hover:text-accent transition-all duration-200 text-[24px] cursor-${
            pathName === link.path ? 'text' : 'pointer'
          } ${link.name === 'contacts' && 'hidden'}`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Nav;
