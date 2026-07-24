import Link from 'next/link';
import Image from 'next/image';

// Datos actualizados directamente para la sección de características
const landingStats = [
  { value: "+30%", label: "Eficiencia en Lotes" },
  { value: "24/7", label: "Monitoreo Activo" },
  { value: "100%", label: "Trazabilidad" },
  { value: "SENA", label: "Tecnología Aplicada" }
];

const landingFeatures = [
  {
    title: "Analisis Predictivo",
    body: "Utiliza algoritmos avanzados para predecir el crecimiento y detectar anomalias en la produccion antes de que ocurran."
  },
  {
    title: "Salud Animal",
    body: "Monitoreo constante de variables ambientales y sanitarias para garantizar el bienestar animal y la calidad del producto."
  },
  {
    title: "Alertas Inteligentes",
    body: "Sistema de notificaciones en tiempo real directo a tu movil sobre niveles de alimento, temperatura y seguridad."
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* NAVBAR */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex flex-col items-center gap-0.5">
          <div className="relative w-10 h-6">
            <Image 
              src="/assets/logo-sena.png" 
              alt="Logo SENA" 
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-slate-900 font-extrabold text-lg tracking-tight leading-none">
            Porci<span className="text-sena-green">Tech</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
          <a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a>
          <a href="#caracteristicas" className="hover:text-emerald-600 transition-colors">Características</a>
          <a href="#impacto" className="hover:text-emerald-600 transition-colors">Impacto</a>
        </nav>

        <div>
          <Link 
            href="/login" 
            className="bg-sena-green hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold text-xs transition-all shadow-sm"
          >
            Acceder
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="bg-white text-slate-900 py-20 px-6 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold tracking-wide px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Ecosistema Integral
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              El futuro de la porcicultura es <span className="text-sena-green">Inteligente</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Optimiza la producción porcícola con tecnología de precisión. Análisis de datos y alertas tempranas para un campo más productivo y sostenible.
            </p>
            <div>
              <Link 
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-sena-green hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md text-xs"
              >
                Comenzar Ahora 
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* TARJETA CON LA IMAGEN DEL CERDITO */}
          <div className="w-full max-w-lg bg-slate-50 border border-slate-200 rounded-3xl p-4 shadow-xl">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-4 border border-slate-200">
              <Image 
                src="/assets/cerdito.jpg" 
                alt="Granja porcina" 
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Estado del Lote</span>
                <span className="text-xl font-black text-slate-900">98%</span>
                <span className="text-[11px] text-slate-500 block">Eficiencia productiva</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Activo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="bg-slate-50 text-slate-900 py-12 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {landingStats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-sena-green tracking-tight">{stat.value}</div>
              <div className="text-[11px] font-semibold text-slate-600 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CARACTERÍSTICAS PRINCIPALES */}
      <section id="caracteristicas" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sena-green block">Ecosistema Integral</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Soluciones para cada etapa
          </h2>
          <p className="text-slate-600 text-sm">
            Nuestra plataforma integra las mejores practicas zootecnicas con tecnologia de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingFeatures.map((feature, index) => {
            const modernIcons = ['📈', '🛡️', '🔔'];

            return (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                    {modernIcons[index]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">{feature.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feature.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECCIÓN TECNOLOGÍA ADAPTADA (Con id="impacto" para el enlace del menú) */}
      <section id="impacto" className="py-16 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 my-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg h-72 sm:h-80 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-200 shadow-sm">
            <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-amber-400/80 blur-[1px]"></div>
            <div className="w-4/5 h-3/5 bg-slate-900 rounded-2xl shadow-xl flex flex-col p-3 border border-slate-800">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex-1 bg-white rounded-lg flex items-center justify-around p-4">
                <div className="w-14 h-14 rounded-full border-4 border-sena-green flex items-center justify-center text-xs font-bold text-slate-700">98%</div>
                <div className="space-y-2 w-1/2">
                  <div className="h-2.5 bg-slate-100 rounded-full w-full"></div>
                  <div className="h-2.5 bg-sena-green rounded-full w-3/4"></div>
                  <div className="h-2.5 bg-slate-100 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tecnología adaptada para la porcicultura colombiana
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Entendemos los retos del campo nacional. Nuestra plataforma esta diseñada para funcionar en zonas con conectividad variable y adaptarse a las necesidades especificas del pequeño y mediano productor.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
              Soporte tecnico especializado SENA
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
              Integracion con programas de fomento agropecuario
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
              Reportes automaticos
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN FINAL */}
      <section className="bg-sena-green py-20 px-6 text-white text-center mt-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ¿Listo para transformar tu produccion?
          </h2>
          <p className="text-emerald-50 text-sm sm:text-base font-normal">
            Unete a la red de productores que ya estan optimizando sus recursos con PorciTech.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link 
              href="/dashboard" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md text-xs"
            >
              Registrar mi Granja
            </Link>
            <Link 
              href="/dashboard" 
              className="bg-transparent hover:bg-emerald-600 border border-white/80 text-white font-semibold px-6 py-3 rounded-xl transition-all text-xs"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7">
                <Image 
                  src="/assets/logo-sena.png" 
                  alt="Logo SENA" 
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-base">PorciTech</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Plataforma de gestion inteligente alineada con los estandares de calidad y sostenibilidad del sector agropecuario.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Plataforma</h4>
            <p><a href="#caracteristicas" className="hover:text-white transition-colors">Caracteristicas</a></p>
            <p><a href="#" className="hover:text-white transition-colors">Precios</a></p>
            <p><a href="#" className="hover:text-white transition-colors">Casos de Exito</a></p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Recursos</h4>
            <p><a href="#" className="hover:text-white transition-colors">Blog SENA</a></p>
            <p><a href="#" className="hover:text-white transition-colors">Guias de Usuario</a></p>
            <p><a href="#" className="hover:text-white transition-colors">Soporte Tecnico</a></p>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">Contacto</h4>
            <p>Bogota D.C., Colombia</p>
            <p>+57 (1) 5481500</p>
            <p>contacto@porcitech.co</p>
          </div>
        </div>
      </footer>

    </div>
  );
}