import React, { useState } from 'react';
import { FaBars, FaTimes, FaHandsHelping, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-secondary-orange" />
              <span className="text-sm">+91 9989590068</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiOutlineMail className="text-secondary-orange" />
              <span className="text-sm">contact@culturefoundation.org.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-primary-500 text-white w-12 h-12 rounded-lg flex items-center justify-center">
                <img src='https://i.ibb.co/v64kQWNf/Whats-App-Image-2026-01-23-at-9-34-48-AM.jpg'/>
  
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-primary-600">CULTURE</span>
                  <span className="text-neutral-800"> FOUNDATION</span>
                </h1>
                <p className="text-xs text-neutral-600 font-medium">
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-neutral-700"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-neutral-700 hover:text-primary-600 border-b"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
                <a href='#donate'> 
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;