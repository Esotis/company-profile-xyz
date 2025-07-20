// app/contact/page.js
'use client'; // Penting karena halaman ini memiliki formulir interaktif

import React, { useState } from 'react';
import Head from 'next/head'; // Untuk metadata spesifik halaman

export default function ContactPage() {
  // State untuk formulir kontak (opsional, untuk demonstrasi input)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda akan mengintegrasikan logika pengiriman formulir ke backend
    // Untuk ujian, ini mungkin hanya menampilkan pesan sukses atau log data
    console.log('Formulir terkirim:', formData);
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.'); // Menggunakan alert sementara untuk feedback
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset formulir
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      {/* Head untuk metadata halaman ini */}
      <Head>
        <title>Kontak Kami - Perusahaan XYZ</title>
        <meta name="description" content="Hubungi Perusahaan XYZ untuk pertanyaan, pelatihan, atau kolaborasi. Temukan alamat kantor pusat dan workshop kami." />
      </Head>

      <div className="container mx-auto px-4">
        {/* Bagian Hero / Judul Halaman */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui informasi di bawah ini atau melalui formulir kontak.
          </p>
        </section>

        {/* Informasi Kontak */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-l-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            Informasi Kontak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Kantor Pusat */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-2 4h.01M7 16h.01" />
                </svg>
                Kantor Pusat
              </h3>
              <p className="text-gray-700 text-lg mb-2">Jl. Maju Berkarya No. 123, Kota Semarang</p>
              <p className="text-gray-700 text-lg mb-2">Telepon: (024) 123-4567</p>
              <p className="text-gray-700 text-lg">Email: info@xyz-company.com</p>
            </div>

            {/* Workshop & Training Center */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Workshop & Training Center
              </h3>
              <p className="text-gray-700 text-lg mb-2">Kawasan Industri Kreatif, Blok A5, Sukorejo, Kota Yogyakarta</p> {/* <--- ALAMAT DIUBAH */}
              <p className="text-gray-700 text-lg mb-2">Telepon: (024) 123-4567</p>
              <p className="text-gray-700 text-lg">Email: info@xyz-company.com</p>
            </div>
          </div>
        </section>

        {/* Peta Lokasi (Google Maps Embed) */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl mb-16 border-r-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            Lokasi Kami
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Peta Kantor Pusat */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
              <h3 className="absolute top-4 left-4 z-10 bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-semibold">Kantor Pusat</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3109161061284!2d110.4128598750441!3d-6.9725974930281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f5c5919c0517%3A0xf98f6f9084a430f6!2sXYZ%20Fried%20Chicken%20Poncol!5e0!3m2!1sid!2sid!4v1752835792260!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Pusat Perusahaan XYZ"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Peta Workshop & Training Center */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
              <h3 className="absolute top-4 left-4 z-10 bg-blue-700 text-white px-4 py-2 rounded-md text-lg font-semibold">Workshop & Training Center</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2370932304443!2d110.38834397505194!3d-7.764662592254554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59061deb3dfb%3A0x68edad3e47909e57!2sXYZ%20Coffee%20%26%20Collabs!5e0!3m2!1sid!2sid!4v1752835870209!5m2!1sid!2sid" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Workshop & Training Center Perusahaan XYZ"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Formulir Kontak */}
        <section className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-l-4 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
            Kirim Pesan kepada Kami
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg placeholder-gray-600" // <--- DITAMBAHKAN placeholder-gray-600
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Alamat Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg placeholder-gray-600" // <--- DITAMBAHKAN placeholder-gray-600
                placeholder="Masukkan email Anda"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg placeholder-gray-600" // <--- DITAMBAHKAN placeholder-gray-600
                placeholder="Subjek pesan Anda"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Pesan Anda</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg placeholder-gray-600" // <--- DITAMBAHKAN placeholder-gray-600
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
