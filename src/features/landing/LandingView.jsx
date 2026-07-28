import Link from 'next/link';
import Image from 'next/image';
import { landingStats, landingFeatures } from './data';

export default function LandingView() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-sena-green/20">
      
      {/* NAVEGACIÓN SUPERIOR FIJA (STICKY) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs px-6 sm:px-10 py-4 w-full transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO Y MARCA */}
          <div className="flex flex-col items-center">
            <Image 
              src="/assets/SENA.png" 
              alt="Logo SENA" 
              width={40} 
              height={40} 
              className="object-contain mb-0.5"
              priority
            />
            <span className="font-black text-2xl tracking-tight text-slate-900 leading-none">
              PorciTech
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500">
            <Link href="#inicio" className="hover:text-slate-900 transition-colors">Inicio</Link>
            <Link href="#caracteristicas" className="hover:text-slate-900 transition-colors">Características</Link>
            {/* ENLACE IMPACTO DIRIGIDO A TECNOLOGÍA ADAPTADA */}
            <Link href="#tecnologia" className="hover:text-slate-900 transition-colors">Impacto</Link>
          </nav>

          <Link 
            href="/login" 
            className="px-7 py-2.5 bg-sena-green text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-md shadow-sena-green/20"
          >
            Acceder
          </Link>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div className="grow">
        {/* SECCIÓN HERO */}
        <main id="inicio" className="max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <div className="space-y-6 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-sena-green text-xs font-black tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-sena-green"></span>
              INNOVACIÓN SENA
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-black tracking-tight text-[#0f172a] leading-[1.05]">
              El futuro de la<br />
              porcicultura es<br />
              <span className="text-sena-green">Inteligente</span>
            </h1>
            
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium max-w-lg">
              Optimiza la producción porcícola con tecnología de precisión. Análisis de datos y alertas tempranas para un campo más productivo y sostenible.
            </p>
            
            <div className="pt-4">
              <Link 
                href="/login"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sena-green text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-[0_8px_30px_-5px_rgba(34,197,94,0.4)] cursor-pointer text-sm sm:text-base"
              >
                Comenzar Ahora 
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* IMAGEN Y TARJETA FLOTANTE */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-4xl overflow-hidden shadow-2xl border-[6px] border-white/50 bg-slate-100 aspect-4/3">
              <img 
                src="/assets/cerdito.jpg" 
                alt="Cerdito en el campo" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-2 sm:bottom-8 sm:left-8 right-4 sm:right-auto bg-white/95 backdrop-blur-sm rounded-4xl p-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] border border-white sm:w-72">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Estado del lote
                </span>
                <span className="text-[10px] font-black tracking-widest text-sena-green uppercase">
                  Activo
                </span>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-4xl font-black text-[#0f172a] tracking-tighter mb-0.5">
                    98%
                  </div>
                  <div className="text-xs font-semibold text-slate-500">
                    Eficiencia productiva
                  </div>
                </div>
                
                <div className="flex items-end gap-1.5 h-10 pb-1">
                  <div className="w-2 h-4 bg-blue-100 rounded-t-sm"></div>
                  <div className="w-2 h-6 bg-blue-400 rounded-t-sm"></div>
                  <div className="w-2 h-9 bg-sena-green rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* SECCIÓN DE ESTADÍSTICAS DINÁMICAS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-t border-slate-100 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {landingStats.map((stat, index) => (
              <div key={index} className="bg-slate-50/60 border border-slate-100 rounded-3xl p-6 text-center">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN DE CARACTERÍSTICAS DINÁMICAS (SOLUCIONES PARA CADA ETAPA) */}
        <section id="caracteristicas" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 mb-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-sena-green uppercase mb-2 block">
              Ecosistema Integral
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">Soluciones para cada etapa</h2>
            <p className="text-slate-500 text-sm font-medium">Nuestra plataforma integra las mejores practicas zootecnicas con tecnologia de vanguardia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {landingFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-slate-200/80 rounded-4xl p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:border-sena-green/50 transition-all">
                
                {/* ICONOS DINÁMICOS */}
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-sena-green flex items-center justify-center font-bold text-lg mb-6 shadow-xs">
                  {index === 0 && '📈'}
                  {index === 1 && '🛡️'}
                  {index === 2 && '⚡'}
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: TECNOLOGÍA ADAPTADA PARA LA PORCICULTURA COLOMBIANA (CON ID PARA EL ENLACE IMPACTO) */}
        <section id="tecnologia" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Ilustración o Panel Dashboard Minimalista */}
            <div className="relative bg-slate-100 rounded-4xl p-8 border border-slate-200 flex flex-col justify-center items-center">
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-amber-400"></div>
              <div className="w-full bg-white rounded-2xl shadow-lg p-6 border border-slate-200 mt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sena-green/10 flex items-center justify-center text-sena-green font-bold">📊</div>
                  <div>
                    <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
                    <div className="h-3 w-20 bg-slate-100 rounded"></div>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-24 pt-4 border-t border-slate-100 justify-around">
                  <div className="w-8 h-10 bg-slate-200 rounded-t"></div>
                  <div className="w-8 h-16 bg-sena-green rounded-t"></div>
                  <div className="w-8 h-22 bg-[#030712] rounded-t"></div>
                  <div className="w-8 h-12 bg-slate-200 rounded-t"></div>
                  <div className="w-8 h-8 bg-slate-100 rounded-t"></div>
                </div>
              </div>
              <div className="w-full h-4 bg-slate-800 rounded-b-xl mt-2"></div>
            </div>

            {/* Textos y Checks */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Tecnología adaptada para la porcicultura colombiana
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                Entendemos los retos del campo nacional. Nuestra plataforma esta diseñada para funcionar en zonas con conectividad variable y adaptarse a las necesidades especificas del pequeño y mediano productor.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-sena-green flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-bold text-slate-700">Soporte tecnico especializado SENA</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-sena-green flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-bold text-slate-700">Integracion con programas de fomento agropecuario</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-sena-green flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-bold text-slate-700">Reportes automaticos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CTA (Llamada a la acción verde) */}
        <section className="bg-sena-green py-20 px-6 text-center text-white mt-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              ¿Listo para transformar tu producción?
            </h2>
            <p className="text-emerald-50 text-sm sm:text-base font-medium max-w-xl mx-auto">
              Únete a la red de productores que ya estan optimizando sus recursos con PorciTech.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                href="/login"
                className="px-8 py-4 bg-[#0a192f] text-white font-bold rounded-full hover:bg-slate-900 transition-all shadow-lg text-sm"
              >
                Registrar mi Granja
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm"
              >
                Contactar Asesor
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER COMPLETO AZUL OSCURO */}
      <footer className="bg-[#002233] text-slate-300 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <Image 
                src="/assets/SENA.png" 
                alt="Logo SENA" 
                width={40} 
                height={40} 
                className="object-contain mb-1"
              />
              <span className="font-black text-2xl tracking-tight text-white leading-none">
                PorciTech
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Plataforma de gestion inteligente alineada con los estandares de calidad y sostenibilidad del sector agropecuario.
            </p>
          </div>

          {/* Columna 2: Plataforma */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Plataforma</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><Link href="#caracteristicas" className="hover:text-white transition-colors">Caracteristicas</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Precios</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Casos de Exito</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Integraciones</Link></li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Recursos</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Blog SENA</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Guias de Usuario</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Soporte Tecnico</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Normativa</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm">Contacto</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li className="flex items-center gap-2">Bogota D.C., Colombia</li>
              <li className="flex items-center gap-2">+57 (1) 5461500</li>
              <li className="flex items-center gap-2">contacto@porcitech.co</li>
            </ul>
          </div>

        </div>
      </footer>

    </div>
  );
}