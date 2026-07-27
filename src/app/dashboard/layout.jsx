'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

const menuItems = [
    { name: 'Inicio', href: '/dashboard' },
    { name: 'Inventario', href: '/dashboard/inventory' },
    { name: 'Registro de animales', href: '/dashboard/animals' },
    { name: 'Alimentacion', href: '/dashboard/feeding' },
    { name: 'Registro de peso', href: '/dashboard/weight' },
    { name: 'Reproduccion', href: '/dashboard/reproduction' },
    { name: 'Vacunacion', href: '/dashboard/health' },
    { name: 'Alertas y reportes', href: '/dashboard/reports' },
    { name: 'Configuracion de usuarios', href: '/dashboard/settings' }
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-800 font-sans">
      
      {/* BARRA LATERAL (SIDEBAR OSCURO LIMPIO CON LOGO) */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#030712] border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="overflow-y-auto">
          {/* LOGO SENA */}
          <div className="p-6 flex flex-col items-center text-center border-b border-slate-800/80">
            <Image 
              src="/assets/SENA.png" 
              alt="Logo SENA" 
              width={45} 
              height={45} 
              className="object-contain mb-2"
            />
            <span className="font-black text-xl tracking-tight text-white block">PorciTech</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">SENA S.I.G.P.</span>
          </div>

          {/* PERFIL ADMINISTRADOR */}
          <div className="px-4 py-4">
            <div className="bg-[#0b0f19] border border-slate-800/80 rounded-2xl p-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-slate-800 flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <div>
                <span className="block text-[10px] font-black tracking-widest text-indigo-400 uppercase">Administrador</span>
              </div>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <nav className="px-4 space-y-1 pb-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl font-bold text-xs transition-all ${
                    isActive 
                      ? 'bg-sena-green text-white shadow-lg shadow-sena-green/30' 
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
        <div className="p-4 border-t border-slate-800/80">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-white bg-[#0b0f19] border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer"
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL CON FONDO CLARO */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 bg-slate-50">
        <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

    </div>
  );
}