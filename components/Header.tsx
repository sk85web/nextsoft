'use client';

import { useState } from 'react';

import Nav from './Nav';
import Lang from './Lang';
import Logo from './Logo';
import Burger from './Burger';
import MobileNav from './MobileNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative z-10">
      <div className="container max-w-[1440px] w-full mx-auto lg:px-16 shadow-custom-combined relative pl-[100px]">
        <section className="lg:grid lg:grid-cols-3 lg:gap-x-10 py-4 items-center flex ">
          <Logo />
          <nav className="hidden lg:flex gap-8 justify-center whitespace-nowrap">
            <Nav />
          </nav>
          <div className="hidden lg:flex gap-4 items-center grow justify-end">
            <Lang />
            <button className="uppercase px-3 py-1 text-[20px] text-white font-weight-400 font-primary font-normal bg-accent hover:bg-yellow transition-all duration-200">
              contact us
            </button>
          </div>

          {/* mobile nav */}
          <Burger onClick={toggleMenu} />
        </section>
      </div>

      {/* mobile-menu */}
      <section
        id="mobile-menu"
        className={`pt-2 ${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:hidden w-full absolute top-14 bg-white justify-center`}
      >
        <div className="flex flex-col gap-7">
          <nav className="flex flex-col gap-[6px] my-auto items-center relative after:content-[''] after:block after:w-[260px] after:h-[1px] after:bg-text after:absolute after:-bottom-[12px] after:rounded">
            <MobileNav />
          </nav>

          <div className="flex items-center justify-center">
            <Lang />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
