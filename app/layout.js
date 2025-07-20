// app/layout.js
import './globals.css'; // Pastikan ini ada dan sesuai untuk Tailwind CSS v4
import Header from '../components/Header'; // Import komponen Header
import Footer from '../components/Footer'; // Import komponen Footer
import { Inter } from 'next/font/google'; // Import font Inter dari next/font/google

// Inisialisasi font Inter
const inter = Inter({ subsets: ['latin'] });

// Metadata untuk aplikasi Anda
export const metadata = {
  title: 'Perusahaan XYZ - Ekosistem Pendidikan Terapan',
  description: 'Perusahaan XYZ adalah ekosistem pendidikan terapan berbasis praktik nyata yang mengintegrasikan pelatihan keterampilan, literasi keuangan mikro, dan teknologi digital dalam skema pemberdayaan komunitas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <Header /> {/* Komponen Header */}
        <main className="flex-grow">
          {children} {/* Konten halaman akan dirender di sini */}
        </main>
        <Footer /> {/* Komponen Footer */}
      </body>
    </html>
  );
}