'use client';
import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import AuthModal from './AuthModal';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const cartCount = 0;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        {/* Top Section */}
        <div className="flex items-center justify-between mx-auto px-4 max-w-7xl py-3 z-50 relative bg-white">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider text-black z-50 cursor-pointer">
            ToonStream
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center w-full max-w-md mx-4 bg-gray-50 rounded-md">
            <input
              type="text"
              placeholder="Search cartoons, anime..."
              className="w-full px-4 py-1.5 bg-transparent text-gray-700 focus:outline-none"
            />
            <button className="p-2 cursor-pointer">
              <FaSearch className="text-gray-500 text-lg" />
            </button>
          </div>

          {/* User + Cart Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <div
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => setAuthOpen(true)}
            >
              <FaUser className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600 font-medium">Login</span>
            </div>
            <div className="flex items-center space-x-1 relative cursor-pointer">
              <FaShoppingCart className="text-gray-600 text-lg" />
              <span className="text-sm text-gray-600 font-medium">Downloads</span>
              <span className="absolute -top-2 -right-4 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col p-6 space-y-6 text-lg font-medium text-gray-700 pt-20">
            <Link href="/" className="uppercase cursor-pointer" onClick={toggleMenu}>Home</Link>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href="/new" className="uppercase cursor-pointer" onClick={toggleMenu}>New</Link>
              <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded uppercase">Hot</span></div>
            <Link href="/cartoons" className="uppercase cursor-pointer" onClick={toggleMenu}>Cartoons</Link>
            <Link href="/anime" className="uppercase cursor-pointer" onClick={toggleMenu}>Anime</Link>
            <Link href="/movies" className="uppercase cursor-pointer" onClick={toggleMenu}>Movies</Link>
            <Link href="/tv-shows" className="uppercase cursor-pointer" onClick={toggleMenu}>Tv Shows</Link>
            <Link href="/series" className="uppercase cursor-pointer" onClick={toggleMenu}>Series</Link>
            <Link href="/channels-list" className="uppercase cursor-pointer" onClick={toggleMenu}>Channels List</Link>
            <Link href="/ott-networks" className="uppercase cursor-pointer" onClick={toggleMenu}>OTT Networks</Link>
            <Link href="/blog" className="uppercase cursor-pointer" onClick={toggleMenu}>Blog</Link>

            {/* Login and Downloads (Mobile) */}
            <div className="pt-4 border-t border-gray-200">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => {
                  toggleMenu();
                  setAuthOpen(true);
                }}
              >
                <FaUser className="text-gray-600" />
                <span className="uppercase">Login</span>
              </div>
              <div className="relative mt-4 flex items-center space-x-2 cursor-pointer">
                <FaShoppingCart className="text-gray-600" />
                <span className="uppercase">Downloads</span>
                <span className="absolute -top-2 right-13 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Blur Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-30 transition-opacity duration-300 cursor-pointer"
            onClick={toggleMenu}
          />
        )}

        {/* Bottom Nav (Desktop) */}
        <div className="hidden md:block bg-gray-900 text-white">
          <ul className="flex justify-center mx-auto px-4 max-w-7xl space-x-8 py-3 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-gray-300 uppercase cursor-pointer">Home</Link>
            </li>
            <li className="relative">
              <Link href="/new" className="hover:text-gray-300 uppercase cursor-pointer">New</Link>
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded uppercase">Hot</span>
            </li>
            <li>
              <Link href="/cartoons" className="hover:text-gray-300 uppercase cursor-pointer">Cartoons</Link>
            </li>
            <li>
              <Link href="/anime" className="hover:text-gray-300 uppercase cursor-pointer">Anime</Link>
            </li>
            <li>
              <Link href="/movies" className="hover:text-gray-300 uppercase cursor-pointer">Movies</Link>
            </li>
            <li>
              <Link href="/tv-shows" className="hover:text-gray-300 uppercase cursor-pointer">Tv Shows</Link>
            </li>
            <li>
              <Link href="/series" className="hover:text-gray-300 uppercase cursor-pointer">Series</Link>
            </li>
            <li>
              <Link href="/channels-list" className="hover:text-gray-300 uppercase cursor-pointer">Channels List</Link>
            </li>
            <li>
              <Link href="/ott-networks" className="hover:text-gray-300 uppercase cursor-pointer">OTT Networks</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300 uppercase cursor-pointer">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Navbar;
