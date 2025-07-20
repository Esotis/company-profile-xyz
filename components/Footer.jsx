// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 text-center mt-auto shadow-inner "> {/* Warna gradien disesuaikan */}
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Perusahaan XYZ. Hak Cipta Dilindungi Undang-Undang.
        </p>
        <p className="text-xs md:text-sm mt-2 opacity-80">
          Ekosistem pendidikan terapan berbasis praktik nyata.
        </p>
      </div>
    </footer>
  );
};

export default Footer;