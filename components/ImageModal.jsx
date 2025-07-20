// components/ImageModal.jsx
'use client';

import React from 'react';
import Image from 'next/image'; // Menggunakan next/image untuk gambar di modal

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null; // Jika modal tidak terbuka, jangan render apa pun

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose} // Menutup modal saat mengklik di luar gambar
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl transform scale-95 opacity-0 animate-modal-in"
        onClick={(e) => e.stopPropagation()} // Mencegah penutupan modal saat mengklik gambar di dalam modal
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-4xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="relative w-full h-full min-h-[50vh] flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain" // Memastikan gambar terlihat penuh di dalam modal
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/CCCCCC/333333?text=Gambar+Tidak+Ditemukan"; }}
          />
        </div>
        <div className="p-4 bg-gray-800 text-white text-center">
          <p className="text-lg font-semibold">{alt}</p>
        </div>
      </div>

      {/* CSS untuk animasi modal */}
      <style jsx>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ImageModal;
