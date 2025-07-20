// components/Navbar.jsx
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-6">
      <Link href="/" className="text-white hover:text-purple-200 transition-colors duration-300 text-lg font-medium">
        Beranda
      </Link>
      <Link href="/about" className="text-white hover:text-purple-200 transition-colors duration-300 text-lg font-medium">
        Tentang Kami
      </Link>
      <Link href="/services" className="text-white hover:text-purple-200 transition-colors duration-300 text-lg font-medium">
        Layanan
      </Link>
      <Link href="/gallery" className="text-white hover:text-purple-200 transition-colors duration-300 text-lg font-medium"> {/* LINK BARU */}
        Galeri
      </Link>
      <Link href="/contact" className="text-white hover:text-purple-200 transition-colors duration-300 text-lg font-medium">
        Kontak
      </Link>
    </nav>
  );
};

export default Navbar;
