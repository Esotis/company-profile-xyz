// app/services/page.js
'use client'; // Penting jika ada interaktivitas client-side

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'; // Untuk metadata spesifik halaman
import { FaFly, FaRecycle, FaBug, FaLeaf, FaIndustry,FaCanadianMapleLeaf, FaHandshake, FaMoneyBillWave, FaSeedling } from 'react-icons/fa'; // FaBug dan FaSeedling sudah diimpor


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      {/* Head untuk metadata halaman ini */}
      <Head>
        <title>Layanan Kami - Perusahaan XYZ</title>
        <meta name="description" content="Jelajahi layanan utama Perusahaan XYZ dalam budidaya pakan ternak inovatif: Maggot, Cacing, dan Ulat Sutra." />
      </Head>

      <div className="container mx-auto px-4">
        {/* Bagian Hero / Judul Halaman */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Layanan Utama Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Perusahaan XYZ memiliki 3 unit percontohan (demplot) yang menjadi layanan utama dalam pelatihan dan produksi pakan ternak alternatif yang berkelanjutan dan bernilai ekonomis.
          </p>
        </section>

        {/* Layanan 1: Budidaya Maggot & Pakan Ternak Alternatif */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-l-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            1. Budidaya Maggot & Pakan Ternak Alternatif
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1630594411952-a8e0c78e6541?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Budidaya Maggot"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/3B82F6/FFFFFF?text=Budidaya+Maggot"; }}
              />
            </div>
            <div>
              <ul className="space-y-6"> {/* Menambah space-y untuk jarak antar poin */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaFly /> {/* Ikon untuk BSF */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Fokus pada budidaya <span className="text-blue-700">Black Soldier Fly (BSF)</span>.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaRecycle /> {/* Ikon untuk limbah dapur */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Menggunakan limbah dapur rumah tangga sebagai media budidaya.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaMoneyBillWave /> {/* Ikon untuk produk kaya protein */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Menghasilkan produk berupa maggot segar dan kering yang kaya protein untuk pakan unggas dan ikan.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Layanan 2: Budidaya Cacing & Pakan Organik */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-r-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            2. Budidaya Cacing & Pakan Organik
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-6"> {/* Menambah space-y untuk jarak antar poin */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaBug /> {/* Ikon untuk budidaya cacing (menggantikan FaWorm) */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Mengembangkan budidaya cacing untuk menghasilkan biomassa cacing sebagai pakan ternak.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaRecycle /> {/* Ikon untuk limbah organik */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Memanfaatkan limbah organik sebagai pakan cacing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaSeedling /> {/* Ikon untuk pupuk organik */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Produk sampingan berupa <span className="text-blue-700">kascing (bekas cacing)</span> yang dapat dijual sebagai pupuk organik berkualitas tinggi.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1580974563942-76580268810f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Budidaya Cacing"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/3B82F6/FFFFFF?text=Budidaya+Cacing"; }}
              />
            </div>
          </div>
        </section>

        {/* Layanan 3: Budidaya Ulat Sutra & Pakan Alternatif Protein */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-l-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            3. Budidaya Ulat Sutra & Pakan Alternatif Protein
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.pexels.com/photos/4543864/pexels-photo-4543864.jpeg"
                alt="Budidaya Ulat Sutra"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/3B82F6/FFFFFF?text=Budidaya+Ulat+Sutra"; }}
              />
            </div>
            <div>
              <ul className="space-y-6"> {/* Menambah space-y untuk jarak antar poin */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaCanadianMapleLeaf /> {/* Ikon untuk ulat sutra */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Budidaya ulat sutra jenis <span className="text-blue-700">Samia ricini</span> yang pakannya adalah daun singkong.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaIndustry /> {/* Ikon untuk kokon/kerajinan */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Panen kokon ulat sutra yang dapat diolah menjadi kerajinan atau sumber protein alternatif untuk pakan ternak.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaLeaf /> {/* Ikon untuk kompos */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Limbah daun dari sisa pakan ulat dapat diolah menjadi kompos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Tambahan */}
        <section className="bg-blue-800 text-white py-16 text-center rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tertarik dengan Layanan Kami?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau untuk mendaftar pelatihan.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
            Hubungi Kami
          </Link>
        </section>
      </div>
    </div>
  );
}
