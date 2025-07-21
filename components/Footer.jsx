// components/Footer.jsx
'use client'; // Diperlukan jika menggunakan Framer Motion atau interaktivitas lainnya di masa depan

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Untuk logo di footer
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import ikon dari react-icons
import { motion } from 'framer-motion'; // Import motion dari framer-motion (untuk potensi animasi di masa depan)

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-gray-300 py-12 md:py-16 shadow-inner"> {/* Warna baru: ungu yang sangat gelap */}
      <div className="container mx-auto px-4">
        {/* Grid: 1 kolom di mobile, 2 kolom di md, 6 kolom di lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-10"> {/* Mengubah md:grid-cols-1 menjadi md:grid-cols-2 untuk tablet */}
          {/* Kolom Logo & Deskripsi Singkat */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center text-center mb-8 md:mb-0"> {/* items-center dan text-center untuk mobile */}
            <Link href="/" className="relative h-12 w-36 mb-4">
              <Image
                src="/xyz_logo.png" // Menggunakan logo lokal
                alt="Logo Perusahaan XYZ"
                fill
                className="object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x50/FFFFFF/000000?text=XYZ+Logo"; }}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Ekosistem pendidikan terapan berbasis praktik nyata untuk pemberdayaan komunitas.
            </p>
          </div>

          {/* Kolom Navigasi 1: Tentang Kami */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-8 md:mb-0 text-center md:text-left"> {/* text-center untuk mobile */}
            <h3 className="text-lg font-semibold text-white mb-4">Tentang Kami</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors duration-200 text-sm">Latar Belakang</Link></li>
              <li><Link href="/about#visi-misi" className="hover:text-white transition-colors duration-200 text-sm">Visi & Misi</Link></li>
              <li><Link href="/about#filosofi-logo" className="hover:text-white transition-colors duration-200 text-sm">Filosofi Logo</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors duration-200 text-sm">Galeri</Link></li>
            </ul>
          </div>

          {/* Kolom Navigasi 2: Layanan & Program */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-8 md:mb-0 text-center md:text-left"> {/* text-center untuk mobile */}
            <h3 className="text-lg font-semibold text-white mb-4">Layanan & Program</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-white transition-colors duration-200 text-sm">Budidaya Maggot</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors duration-200 text-sm">Budidaya Cacing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors duration-200 text-sm">Budidaya Ulat Sutra</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors duration-200 text-sm">Program Pelatihan</Link></li>
            </ul>
          </div>

          {/* Kolom Kontak */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 mb-8 md:mb-0 text-center md:text-left"> {/* text-center untuk mobile */}
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition-colors duration-200 text-sm">Kontak Detail</Link></li>
              <li><a href="tel:+62241234567" className="hover:text-white transition-colors duration-200 text-sm">Telepon: (024) 123-4567</a></li>
              <li><a href="mailto:info@xyz-company.com" className="hover:text-white transition-colors duration-200 text-sm">Email: info@xyz-company.com</a></li>
            </ul>
          </div>

          {/* Kolom Ikuti Kami (Sosial Media) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 text-center md:text-left"> {/* text-center untuk mobile */}
            <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4 justify-center md:justify-start"> {/* justify-center untuk mobile */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-gray-700 my-8" />

        {/* Bagian Hak Cipta */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Perusahaan XYZ. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="mt-1">Dibuat dengan semangat pemberdayaan dan inovasi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
