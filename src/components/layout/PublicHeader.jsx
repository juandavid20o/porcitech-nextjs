'use client';

import Link from 'next/link';
import BrandMark from '@/components/BrandMark';

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        
        {/* BRANDMARK IZQUIERDA */}
        <Link href="/" className="transition-transform hover:opacity-95">
          <BrandMark light={false} />
        </Link>

        {/* NAVEGACIÓN CENTRADA */}
        <nav className="hidden md:flex items-center gap-10 text-base font-bold text-slate-500">
          <Link href="#inicio" className="hover:text-slate-800 transition-colors">
            Inicio
          </Link>
          <Link href="#caracteristicas" className="hover:text-slate-800 transition-colors">
            Características
          </Link>
          <Link href="#impacto" className="hover:text-slate-800 transition-colors">
            Impacto
          </Link>
        </nav>

        {/* BOTÓN "ACCEDER" DERECHA */}
        <div className="flex items-center">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-sena-green px-8 py-3 text-base font-bold text-white shadow-md shadow-green-600/20 hover:bg-[#2e8800] transition-all cursor-pointer"
          >
            Acceder
          </Link>
        </div>

      </div>
    </header>
  );
}