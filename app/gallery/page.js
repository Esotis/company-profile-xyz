// app/gallery/page.js
'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ImageModal from '../../components/ImageModal';

export default function GalleryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: '', alt: '' });

  const scrollContainerRef = useRef(null);
  // Tidak ada lagi state isScrolling atau ref userScrollingRef karena scroll akan selalu otomatis

  // Fungsi untuk membuka modal
  const openModal = (src, alt) => {
    setCurrentImage({ src, alt });
    setIsModalOpen(true);
    // Tidak perlu menghentikan scroll otomatis di sini, karena useEffect akan menghentikan animasi saat modal terbuka
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage({ src: '', alt: '' });
    // Auto-scroll akan dilanjutkan oleh useEffect setelah modal tertutup
  };

  // Data gambar galeri, diletakkan di useMemo agar tidak dibuat ulang setiap render
  const images = useMemo(() => [
    { src: 'https://images.unsplash.com/photo-1690960611657-f43de8b3f40b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Praktek Lapangan XYZ' },
    { src: 'https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Training Class XYZ' },
    { src: 'https://images.unsplash.com/photo-1721592386093-4a3a44ec3f28?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Survey Lapangan' },
    { src: '/budidaya-maggot.jpeg', alt: 'Budidaya Maggot BSF' },
    { src: '/budidaya-cacing.jpg', alt: 'Budidaya Cacing Organik' },
    { src: 'https://images.pexels.com/photos/6508547/pexels-photo-6508547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Integrated Eco Farming' },
    { src: '/panen-cacing.jpg', alt: 'Panen Hasil Budidaya' },
    { src: '/diskusi-kelompok.jpg', alt: 'Diskusi Kelompok Pelatihan' },
  ], []); // Dependensi kosong karena data ini statis

  // Data video galeri, diletakkan di useMemo agar tidak dibuat ulang setiap render
  const videos = useMemo(() => [
    { src: 'https://www.youtube.com/embed/PAdNfpK8PYI?si=Bk5Xj9IKXUksExyA', title: 'Perkenalan Perusahaan XYZ', description: 'Video singkat tentang visi dan misi Perusahaan XYZ.' },
    { src: 'https://www.youtube.com/embed/FPALstZU7fI?si=ZYf2t_ftlvIgXsyl', title: 'Proses Budidaya Maggot', description: 'Lihat bagaimana kami membudidayakan maggot BSF dari limbah organik.' },
    { src: 'https://www.youtube.com/embed/ZSacR2FgeK4?si=j4WIU7x9fQ6Rfscm', title: 'Testimoni Peserta Pelatihan', description: 'Dengarkan pengalaman nyata dari para peserta pelatihan kami.' },
    { src: 'https://www.youtube.com/embed/63EkxOAcl0U?si=-sYRb3I7AqCRAWuo', title: 'Integrated Eco Farming', description: 'Penjelasan mendalam tentang program Integrated Eco Farming kami.' },
  ], []); // Dependensi kosong karena data ini statis

  // Duplikasi gambar untuk efek infinity scroll menggunakan useMemo
  const duplicatedImages = useMemo(() => {
    return [...images, ...images, ...images]; // Duplikasi tiga kali untuk transisi mulus yang lebih panjang
  }, [images]); // Dependensi images memastikan duplicatedImages hanya dibuat ulang jika images berubah

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isModalOpen) return; // Hentikan animasi jika modal terbuka

    let animationFrameId;
    const scrollSpeed = 0.5; // Kecepatan scroll (piksel per frame)

    const animateScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      // Jika sudah mencapai akhir set gambar asli pertama (1/3 dari total lebar), reset scrollLeft
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isModalOpen, duplicatedImages, images.length]); // Dependensi useEffect

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      {/* Head untuk metadata halaman ini */}
      <Head>
        <title>Galeri Kami - Perusahaan XYZ</title>
        <meta name="description" content="Lihat koleksi foto dan video kegiatan Perusahaan XYZ, termasuk pelatihan, demplot, dan pemberdayaan komunitas." />
      </Head>

      <div className="container mx-auto px-4">
        {/* Bagian Hero / Judul Halaman */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Galeri Foto & Video
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Jelajahi momen-momen inspiratif dari pelatihan, demplot lapangan, dan kegiatan pemberdayaan komunitas kami.
          </p>
        </section>

        {/* Bagian Galeri Foto */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-l-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            Momen-Momen Kami
          </h2>
          {/* Kontainer scrollable horizontal dengan auto-scroll */}
          <div
            ref={scrollContainerRef}
            className="h-[300px] md:h-[400px] overflow-x-hidden overflow-y-hidden whitespace-nowrap relative" // overflow-x-hidden untuk menghilangkan scrollbar manual
          >
            <div className="flex flex-row items-center h-full">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-80 h-full rounded-lg overflow-hidden shadow-md group cursor-pointer mx-2 transform transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(image.src, image.alt)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 20vw"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/333333?text=Gambar+Galeri"; }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-white text-center font-semibold text-lg mb-2">{image.alt}</p>
                    <p className="text-white text-center text-sm">Klik untuk memperbesar</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">Guliran otomatis.</p> {/* Pesan disesuaikan */}
        </section>

        {/* Bagian Galeri Video */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-r-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            Video Kegiatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-gray-100 flex-grow">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{video.title}</h3>
                  <p className="text-gray-700 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Render ImageModal di sini */}
      <ImageModal
        src={currentImage.src}
        alt={currentImage.alt}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Custom CSS untuk scrollbar horizontal (dihapus karena overflow-x-hidden) */}
      {/* <style jsx>{`
        .custom-scrollbar-horizontal::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style> */}
    </div>
  );
}
