// app/about/page.js
'use client'; // Deklarasi ini penting karena halaman ini akan memiliki interaktivitas atau client-side rendering

import React from 'react';
import Image from 'next/image'; // Menggunakan next/image untuk optimasi gambar
import Head from 'next/head'; // Menggunakan Head untuk metadata spesifik halaman
import { FaEye, FaLightbulb, FaHandsHelping, FaSeedling } from 'react-icons/fa'; // Contoh ikon untuk misi
import { GiGrowth } from 'react-icons/gi'; // Contoh ikon untuk visi (jika diperlukan)
import { MdOutlineWork, MdOutlineHomeWork, MdOutlineIntegrationInstructions, MdOutlineMonetizationOn } from 'react-icons/md'; // Ikon tambahan

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      {/* Head untuk metadata halaman ini (opsional jika metadata sudah di handle di layout.js) */}
      <Head>
        <title>Tentang Kami - Perusahaan XYZ</title>
        <meta name="description" content="Pelajari lebih lanjut tentang latar belakang, visi, misi, dan filosofi logo Perusahaan XYZ, ekosistem pendidikan terapan." />
      </Head>

      <div className="container mx-auto px-4">
        {/* Bagian Hero / Judul Halaman */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Tentang Perusahaan XYZ
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Membangun masa depan yang lebih baik melalui pendidikan terapan dan pemberdayaan komunitas.
          </p>
        </section>

        {/* Bagian Latar Belakang */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-l-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Latar Belakang Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Perusahaan XYZ lahir dari keprihatinan terhadap krisis keterampilan di kalangan usia produktif dan ketergantungan masyarakat pada pola konsumsi. Di tengah tingginya angka pengangguran dan masalah sampah organik, XYZ hadir untuk menghadirkan solusi berbasis edukasi terapan dan pemberdayaan ekonomi masyarakat.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Misi utama perusahaan adalah mencetak generasi yang tidak hanya cerdas, tetapi juga unggul secara keterampilan, siap kerja, dan mampu menciptakan lapangan kerja dari rumah. Salah satu terobosannya adalah program <span className="font-semibold text-blue-700">Integrated Eco Farming</span>, yaitu sistem pertanian terpadu yang memanfaatkan sampah organik secara lebih berdaya guna.
              </p>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1516711345667-ebafb3ebea12?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Latar Belakang Perusahaan XYZ"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/2563EB/FFFFFF?text=Latar+Belakang+XYZ"; }}
              />
            </div>
          </div>
        </section>

        {/* Bagian Visi & Misi yang Diperbarui */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center">
            Visi & Misi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-blue-600 flex flex-col items-center text-center">
              <div className="text-blue-600 text-6xl mb-6">
                <FaEye /> {/* Ikon untuk Visi */}
              </div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Menjadi ekosistem pendidikan terapan terdepan yang memberdayakan masyarakat untuk menciptakan kemandirian ekonomi dan keberlanjutan lingkungan.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-blue-600">
              <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">Misi</h3>
              <ul className="space-y-6"> {/* Menambah space-y untuk jarak antar misi */}
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <MdOutlineWork /> {/* Ikon untuk misi 1 */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Mencetak generasi yang tidak hanya cerdas, tetapi juga unggul secara keterampilan dan siap kerja.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <MdOutlineHomeWork /> {/* Ikon untuk misi 2 */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Mendorong penciptaan lapangan kerja dari rumah.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <MdOutlineIntegrationInstructions /> {/* Ikon untuk misi 3 */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Mengintegrasikan pelatihan, literasi keuangan, dan teknologi digital.
                    </p>
                  </div >
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-600 text-3xl mr-4 mt-1">
                    <FaSeedling /> {/* Ikon untuk misi 4 */}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                      Mengembangkan solusi inovatif seperti Integrated Eco Farming.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bagian Filosofi Logo */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-r-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">Filosofi Logo Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nama dan Warna */}
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Nama dan Warna</h3>
              <p className="text-gray-600">
                Nama &quot;XYZ&quot; mencerminkan misi mencetak sumber daya manusia yang kompeten dan profesional. Warna dominan biru tua dan gradasi biru muda melambangkan kepercayaan, profesionalisme, kemajuan, dan pembaruan.
              </p>
            </div>

            {/* Simbol Utama */}
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Simbol Utama</h3>
              <p className="text-gray-600">
                Logo memiliki simbol ikonik berupa topi wisuda (graduation cap) yang melambangkan pendidikan sebagai fondasi utama dan komitmen untuk mencetak SDM unggul.
              </p>
            </div>

            {/* Desain */}
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Desain</h3>
              <p className="text-gray-600">
                Font yang modern dan tegas menggambarkan kekuatan visi, semangat inovatif, dan struktur yang profesional.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
