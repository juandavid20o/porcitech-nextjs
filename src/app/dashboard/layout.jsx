'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/services/auth/authService';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

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
    logout();
    router.push('/login');
  };

  const userInitial = currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U';
  const userName = currentUser?.name || 'Usuario';
  const userRole = currentUser?.role || 'Invitado';

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
  style={{ width: 'auto', height: 'auto' }}
  className="object-contain mb-2"
/>
            <span className="font-black text-xl tracking-tight text-white block">PorciTech</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">SENA S.I.G.P.</span>
          </div>

          {/* PERFIL DINÁMICO DEL USUARIO */}
          <div className="px-4 py-4">
            <div className="bg-[#0b0f19] border border-slate-800/80 rounded-2xl p-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-sena-green/20 text-sena-green flex items-center justify-center text-xs font-bold">
                {userInitial}
              </div>
              <div className="overflow-hidden">
                <span className="block text-xs font-bold text-white truncate">{userName}</span>
                <span className="block text-[10px] font-black tracking-widest text-indigo-400 uppercase truncate">{userRole}</span>
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

        {/* BOTÓN SESIÓN */}
        <div className="p-4 border-t border-slate-800/80">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs text-white bg-[#0b0f19] border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer"
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 bg-slate-100">
        <main className="flex-1 w-full px-4 sm:px-6 py-6">
          {children}
        </main>
      </div>

    </div>
  );
}