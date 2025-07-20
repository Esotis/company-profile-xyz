// app/page.js
'use client'; // Penting karena menggunakan Image component dan animasi

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  // Data dummy untuk Berita & Artikel
  const articles = [
    {
      id: 1,
      title: 'Workshop Budidaya Maggot BSF Sukses Besar!',
      description: 'Pelatihan intensif kami menarik puluhan peserta yang antusias belajar tentang pengelolaan limbah organik.',
      image: 'https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#', // Ganti dengan link artikel sebenarnya jika ada halaman blog
    },
    {
      id: 2,
      title: 'Inovasi Eco Farming: Solusi Sampah dan Pakan Ternak',
      description: 'Program Integrated Eco Farming kami terus berkembang, memberikan dampak positif bagi lingkungan dan ekonomi lokal.',
      image: 'https://images.unsplash.com/photo-1715198901384-0b7ff9f37a77?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
    {
      id: 3,
      title: 'Literasi Keuangan Mikro untuk Kemandirian Komunitas',
      description: 'Kami berkomitmen membekali masyarakat dengan pengetahuan keuangan untuk menciptakan lapangan kerja dari rumah.',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bagian Hero */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Latar belakang gambar dengan overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pendidikan Terapan"
            fill
            className="object-cover opacity-30"
            priority
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1920x1080/0A2342/FFFFFF?text=Latar+Belakang+Pendidikan"; }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
            Mencetak Generasi Unggul Melalui Pendidikan Terapan
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            Perusahaan XYZ adalah ekosistem pendidikan terapan berbasis praktik nyata yang mengintegrasikan pelatihan keterampilan, literasi keuangan mikro, dan teknologi digital dalam skema pemberdayaan komunitas.
          </p>
          <Link href="/services" className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 animate-bounce-in">
            Pelajari Layanan Kami
          </Link>
        </div>
      </section>

      {/* Bagian Pengenalan/Latar Belakang Singkat */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
            Solusi Inovatif untuk Tantangan Masa Kini
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Perusahaan XYZ lahir dari keprihatinan terhadap krisis keterampilan di kalangan usia produktif dan ketergantungan masyarakat pada pola konsumsi. Di tengah tingginya angka pengangguran dan masalah sampah organik, XYZ hadir untuk menghadirkan solusi berbasis edukasi terapan dan pemberdayaan ekonomi masyarakat.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Misi utama kami adalah mencetak generasi yang tidak hanya cerdas, tetapi juga unggul secara keterampilan, siap kerja, dan mampu menciptakan lapangan kerja dari rumah.
          </p>
          <Link href="/about" className="inline-block text-blue-700 font-semibold border-b-2 border-blue-700 hover:text-blue-900 hover:border-blue-900 transition-colors duration-300">
            Baca Lebih Lanjut Tentang Kami &rarr;
          </Link>
        </div>
      </section>

      {/* Bagian Keunggulan Utama / Pilar Inti */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
            Delapan Pilar Inti Pemberdayaan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilar 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Pelatihan Keterampilan</h3>
              <p className="text-gray-600">
                Program pelatihan praktis untuk meningkatkan kompetensi dan daya saing.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2m3-2h2M9 9h.01M15 9h.01M9 12h.01M15 12h.01M9 15h.01M15 15h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Demplot Lapangan</h3>
              <p className="text-gray-600">
                Penerapan ilmu secara langsung di lapangan untuk hasil yang optimal.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Literasi Keuangan Mikro</h3>
              <p className="text-gray-600">
                Membekali peserta dengan pemahaman dan pengelolaan keuangan yang baik.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16L2 12l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Teknologi Digital</h3>
              <p className="text-gray-600">
                Integrasi teknologi untuk efisiensi dan jangkauan pemberdayaan yang lebih luas.
              </p>
            </div>

            {/* Pilar 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Learning by Doing</h3>
              <p className="text-gray-600">
                Pendekatan pembelajaran aktif yang mendorong peserta untuk berbuat secara langsung.
              </p>
            </div>

            {/* Pilar 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.106-1.29-.307-1.874M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.106-1.29.307-1.874m0 0a2.001 2.001 0 001.414 1.414L12 20l4.243-4.243a2.001 2.001 0 001.414-1.414M12 12h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Kolaborasi Komunitas</h3>
              <p className="text-gray-600">
                Membangun jaringan dan sinergi antar anggota komunitas untuk dampak yang lebih besar.
              </p>
            </div>

            {/* Pilar 7 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Pengembangan Berkelanjutan</h3>
              <p className="text-gray-600">
                Fokus pada pertumbuhan jangka panjang dan dampak positif yang berkelanjutan.
              </p>
            </div>

            {/* Pilar 8 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895-3-2 1.343-2 3-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21c-1.657 0-3 .895-3 2s1.343 2-3 2-3-.895-3-2 1.343-2 3-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Inovasi Berbasis Data</h3>
              <p className="text-gray-600">
                Pengambilan keputusan yang didukung oleh analisis data yang akurat dan relevan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Berita & Artikel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
            Berita & Artikel Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/D1D5DB/4B5563?text=Artikel"; }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-700 text-base mb-4 line-clamp-3">{article.description}</p>
                  <Link href={article.link} className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            {/* Link ke halaman blog/berita lengkap jika ada */}
            <Link href="#" className="inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
              Lihat Semua Berita & Artikel
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian Integrated Eco Farming */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/6508547/pexels-photo-6508547.jpeg"
              alt="Integrated Eco Farming"
              fill
              className="object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/10B981/FFFFFF?text=Eco+Farming"; }}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Terobosan Kami: Integrated Eco Farming
            </h2>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Salah satu terobosan utama Perusahaan XYZ adalah program Integrated Eco Farming, yaitu sistem pertanian terpadu yang memanfaatkan sampah organik secara lebih berdaya guna. Program ini tidak hanya menciptakan nilai ekonomi, tetapi juga berkontribusi pada keberlanjutan lingkungan.
            </p>
            <Link href="/services" className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
              Pelajari Lebih Lanjut tentang Eco Farming
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian CTA Akhir */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16 text-center  shadow-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Bergabung dengan Ekosistem Kami?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Jelajahi lebih lanjut tentang bagaimana Perusahaan XYZ dapat membantu Anda mencapai potensi penuh.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
