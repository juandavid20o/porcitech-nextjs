'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#030712] text-white overflow-hidden font-sans selection:bg-sena-green selection:text-white">
      
      {/* PANEL IZQUIERDO (Alineado al centro tal como en la referencia) */}
      <div className="hidden lg:flex lg:w-3/5 flex-col justify-center items-center p-12 xl:p-16 relative overflow-hidden bg-[#030712] text-center">
        
        {/* EFECTOS DE LUZ AMBIENTAL DE FONDO */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-sena-green/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[24px_24px] opacity-20 pointer-events-none"></div>

        {/* CONTENIDO CENTRADO */}
        <div className="max-w-xl space-y-6 relative z-10 flex flex-col items-center">
          
          {/* LOGO Y MARCA CENTRADOS (Apilados verticalmente) */}
          <div className="flex flex-col items-center gap-1.5 mb-2">
            <div className="relative w-12 h-8">
              <Image 
                src="/assets/logo-sena.png" 
                alt="Logo SENA" 
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Porci<span className="text-sena-green">Tech</span>
            </span>
          </div>

          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-sena-green">
            ACCESO SEGURO
          </span>
          
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-white">
            Bienvenido al Sistema <br />
            Integral de Gestión <br />
            Porcina
          </h1>

        </div>
      </div>

      {/* PANEL DERECHO (Tarjeta Blanca con el Formulario) */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-6 sm:p-12 bg-[#030712] relative">
        <div className="absolute hidden lg:block w-72 h-72 bg-sena-green/5 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 border border-slate-100">
          
          {/* CABECERA DEL FORMULARIO */}
          <div className="mb-8">
            <p className="text-[11px] font-black uppercase tracking-widest text-sena-green mb-1.5">
              INICIAR SESION
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Ingresa a tu cuenta
            </h2>
          </div>

          {/* FORMULARIO */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Usuario
              </label>
              <input
                type="text"
                required
                defaultValue="operador@porcitech.co"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sena-green focus:bg-white transition-all text-sm font-medium"
                placeholder="operador@porcitech.co"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                required
                defaultValue="••••••••"
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sena-green focus:bg-white transition-all text-sm font-medium"
              />
            </div>

            <div className="flex items-center justify-end text-xs pt-1">
              <Link
                href="/forgot-password"
                className="font-bold text-sena-green hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-4 bg-sena-green text-white font-bold rounded-xl shadow-lg shadow-sena-green/30 hover:bg-green-700 transition-all duration-200 cursor-pointer text-sm tracking-wide disabled:opacity-50 mt-2 active:scale-[0.98]"
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>

        </div>
      </div>

    </div>
  );
}