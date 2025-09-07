import React, { useState } from 'react';
import { SenikLogo, MenuIcon, CloseIcon, ChevronDownIcon } from './Icons';
import { navLinks } from '../constants';

const NavLink: React.FC<{link: any}> = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!link.sublinks) {
    return (
      <a href={link.href} className="text-sm font-medium hover:text-[#01D48F] transition-colors duration-300 py-2">
        {link.name}
      </a>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium hover:text-[#01D48F] transition-colors duration-300 py-2">
        <span>{link.name}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-30 border border-gray-100">
          {link.sublinks.map((sublink: any) => (
            <a key={sublink.name} href={sublink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#005B6E]">
              {sublink.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#005B6E] text-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <SenikLogo className="h-12 w-auto" />
          <div className="hidden sm:flex flex-col items-start -space-y-1">
            <span className="text-xl font-bold">سه نیک</span>
            <span className="text-[10px] opacity-80 whitespace-nowrap">سیستم یکپارچه مالی سه نیک</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#005B6E] absolute top-full right-0 left-0 transition-max-height duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center px-6 py-4 gap-y-2">
          {navLinks.map((link) => (
             <a key={link.name} href={link.href} className="text-base font-medium hover:text-[#01D48F] transition-colors duration-300 w-full text-center py-2 border-b border-white/10">
                {link.name}
             </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;