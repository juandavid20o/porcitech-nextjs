'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Inicio', href: '/dashboard' },
    { name: 'Inventario', href: '/inventory' },
    { name: 'Registro de animales', href: '/animals' },
    { name: 'Alimentacion', href: '/feeding' },
    { name: 'Registro de peso', href: '/weight' },
    { name: 'Reproduccion', href: '/reproduction' },
    { name: 'Vacunacion', href: '/health' },
    { name: 'Alertas y reportes', href: '/reports' },
    { name: 'Configuracion de usuarios', href: '/settings' }
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-800 font-sans">
      
      {/* BARRA LATERAL LIMPIA CON LOGO Y SIN EMOJIS */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#070e17] text-slate-300 min-h-screen flex flex-col justify-between p-4 border-r border-slate-800 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          {/* LOGO */}
          <div className="flex flex-col items-center my-6">
            <div className="relative w-12 h-12 mb-2 flex items-center justify-center">
              <Image 
                src="/assets/SENA.png" 
                alt="Logo SENA" 
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <span className="font-black text-2xl tracking-tight text-white leading-none">
              PorciTech
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-1">
              SENA S.I.G.P.
            </span>
          </div>

          {/* ROL / BADGE */}
          <div className="bg-[#101b2b] border border-slate-800 rounded-2xl p-3 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
              A
            </div>
            <span className="text-xs font-black tracking-wider uppercase text-indigo-400">
              Administrador
            </span>
          </div>

          {/* MENÚ DE NAVEGACIÓN */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-sena-green text-white shadow-lg shadow-sena-green/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTÓN CERRAR SESIÓN */}
        <div className="pt-4 border-t border-slate-800/80">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer text-left"
          >
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">
              N
            </div>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 bg-slate-50">
        <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

    </div>
  );
}