// components/Header.jsx
'use client'; // Penting karena menggunakan useState dan useEffect

import Link from 'next/link';
import Image from 'next/image'; // Import Image untuk logo
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Import komponen Navbar

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 text-white p-4 transition-all duration-300 ease-in-out ${
      scrolled ? 'bg-purple-900 shadow-xl' : 'bg-purple-800 shadow-lg'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Perusahaan XYZ */}
        <Link href="/" className="relative h-10 w-28 md:h-12 md:w-36 flex-shrink-0">
            <Image
                src="/xyz_logo.png"
                alt="Logo Perusahaan XYZ"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x50/FFFFFF/000000?text=XYZ+Logo"; }}
            />
        </Link>

        {/* Navigasi Desktop (menggunakan komponen Navbar) */}
        <Navbar />

        {/* Tombol Hamburger Menu untuk Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none p-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Ikon X saat menu terbuka
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Ikon Hamburger saat menu tertutup
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile yang muncul/sembunyi dengan animasi slide-down/up */}
      <nav className={`md:hidden bg-purple-700 w-full overflow-hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-screen opacity-100 py-4 mt-4 rounded-lg shadow-inner' : 'max-h-0 opacity-0 py-0 mt-0' // Animasi slide-down/up
      }`}>
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href="/" className="block text-white hover:text-purple-200 transition-colors duration-300 text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/about" className="block text-white hover:text-purple-200 transition-colors duration-300 text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href="/services" className="block text-white hover:text-purple-200 transition-colors duration-300 text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Layanan
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="block text-white hover:text-purple-200 transition-colors duration-300 text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Galeri
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block text-white hover:text-purple-200 transition-colors duration-300 text-xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
