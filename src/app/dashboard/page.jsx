'use client';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* CABECERA PRINCIPAL CON LOTE DESTACADO */}
      <div className="bg-white border border-slate-200/85 rounded-4xl p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-400"></div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Resumen de información clave
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Panel general de control operativo del plantel porcino.
          </p>
        </div>
        <div className="bg-slate-900 text-white px-4 py-2.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold self-start sm:self-auto shadow-md">
          <span className="text-slate-400 font-medium">Lote destacado</span>
          <span className="text-sena-green font-black">Lote #42</span>
        </div>
      </div>

      {/* TARJETAS DE MÉTRICAS SUPERIORES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* TOTAL DE CERDOS */}
        <div className="bg-white border border-slate-200/85 rounded-4xl p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] relative transition-all hover:border-slate-300">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total de Cerdos</span>
            <div className="h-8 w-8 rounded-xl bg-emerald-50 text-sena-green flex items-center justify-center text-xs font-bold">🐖</div>
          </div>
          <div className="flex items-baseline gap-2 mb-2.5">
            <span className="text-2xl font-black text-slate-900">1.500</span>
            <span className="text-[10px] font-bold text-sena-green bg-emerald-50 px-2 py-0.5 rounded-full">+2.5%</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-sena-green h-full rounded-full w-full"></div>
          </div>
        </div>

        {/* CERDOS EN CRECIMIENTO */}
        <div className="bg-white border border-slate-200/85 rounded-4xl p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] relative transition-all hover:border-slate-300">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cerdos Crecimiento</span>
            <div className="h-8 w-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">📈</div>
          </div>
          <div className="flex items-baseline justify-between mb-2.5">
            <span className="text-2xl font-black text-slate-900">1.200</span>
            <span className="text-[10px] font-bold text-slate-500">80% del total</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full w-[80%]"></div>
          </div>
        </div>

        {/* LISTOS PARA VENTA */}
        <div className="bg-white border border-slate-200/85 rounded-4xl p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] relative transition-all hover:border-slate-300">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Listos para Venta</span>
            <div className="h-8 w-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold">🏷️</div>
          </div>
          <div className="flex items-baseline justify-between mb-2.5">
            <span className="text-2xl font-black text-slate-900">300</span>
            <span className="text-[10px] font-bold text-slate-500">20% del total</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full rounded-full w-[20%]"></div>
          </div>
        </div>

        {/* RENDIMIENTO CRECIMIENTO */}
        <div className="bg-white border border-slate-200/85 rounded-4xl p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] relative transition-all hover:border-slate-300">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rendimiento Crec.</span>
            <div className="h-8 w-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold">⚡</div>
          </div>
          <div className="flex items-baseline justify-between mb-2.5">
            <span className="text-2xl font-black text-slate-900">820 <span className="text-xs font-normal text-slate-400">g/d</span></span>
            <span className="text-[10px] font-bold text-sena-green bg-emerald-50 px-2 py-0.5 rounded-full">Óptimo</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full w-[85%]"></div>
          </div>
        </div>

        {/* CUMPLIMIENTO SANITARIO */}
        <div className="bg-white border border-slate-200/85 rounded-4xl p-5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] relative transition-all hover:border-slate-300">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cumplimiento Sanitario</span>
            <div className="h-8 w-8 rounded-xl bg-emerald-50 text-sena-green flex items-center justify-center text-xs font-bold">🛡️</div>
          </div>
          <div className="flex items-baseline justify-between mb-2.5">
            <span className="text-2xl font-black text-slate-900">85 <span className="text-sm font-bold text-slate-400">%</span></span>
            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">ICA</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-sena-green h-full rounded-full w-[85%]"></div>
          </div>
        </div>

      </div>

      {/* ACCESOS RÁPIDOS */}
      <div className="bg-white border border-slate-200/85 rounded-4xl p-6 sm:p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="bg-emerald-50 text-sena-green text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider border border-emerald-100">Accesos Rápidos</span>
          <h2 className="text-base font-black text-slate-900">Acciones frecuentes</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <button className="p-4 rounded-2xl bg-slate-50/50 border border-slate-200/70 hover:border-sena-green hover:bg-emerald-50/20 transition-all text-sm font-bold text-slate-700 flex items-center justify-center cursor-pointer shadow-2xs">
            Registrar nuevo cerdo
          </button>
          <button className="p-4 rounded-2xl bg-slate-50/50 border border-slate-200/70 hover:border-sena-green hover:bg-emerald-50/20 transition-all text-sm font-bold text-slate-700 flex items-center justify-center cursor-pointer shadow-2xs">
            Ver inventario
          </button>
          <button className="p-4 rounded-2xl bg-slate-50/50 border border-slate-200/70 hover:border-sena-green hover:bg-emerald-50/20 transition-all text-sm font-bold text-slate-700 flex items-center justify-center cursor-pointer shadow-2xs">
            Registrar alimentación
          </button>
          <button className="p-4 rounded-2xl bg-slate-50/50 border border-slate-200/70 hover:border-sena-green hover:bg-emerald-50/20 transition-all text-sm font-bold text-slate-700 flex items-center justify-center cursor-pointer shadow-2xs">
            Ver reportes de salud
          </button>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: ACTIVIDAD RECIENTE Y ALERTA DE RENDIMIENTO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ACTIVIDAD RECIENTE */}
        <div className="lg:col-span-2 bg-white border border-slate-200/85 rounded-4xl p-6 sm:p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)]">
          <h2 className="text-lg font-black text-slate-900 tracking-tight mb-6">
            Actividad reciente
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-4 px-4">Actividad</th>
                  <th className="pb-4 px-4">Momento</th>
                  <th className="pb-4 px-4">Ubicación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium">
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">Nuevo lote registrado</td>
                  <td className="py-4 px-4 text-slate-500">Hace 2 horas</td>
                  <td className="py-4 px-4 text-slate-600 font-medium">Sector B-04</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">Vacunacion completada</td>
                  <td className="py-4 px-4 text-slate-500">Hace 5 horas</td>
                  <td className="py-4 px-4 text-slate-600 font-medium">Sector A-12</td>
                </tr>
                <tr className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900">Alerta de peso bajo</td>
                  <td className="py-4 px-4 text-slate-500">Ayer</td>
                  <td className="py-4 px-4 text-slate-600 font-medium">Corral 09</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ALERTA DE RENDIMIENTO */}
        <div className="bg-[#450a0a] border border-rose-950/40 rounded-4xl p-6 sm:p-8 shadow-[0_15px_35px_-5px_rgba(69,10,10,0.3)] text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-rose-600/10 rounded-full blur-2xl"></div>
          
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-[11px] font-bold uppercase tracking-wider mb-3">
              <span>⚠️</span> Prioridad Alta
            </div>
            <h3 className="text-xl font-black tracking-tight mb-3 text-rose-100">
              Alerta de Rendimiento
            </h3>
            <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed font-medium mb-6">
              El Lote <strong className="text-white font-black underline decoration-rose-500/50 underline-offset-2">L-042</strong> presenta un crecimiento por debajo del estándar de Porkcolombia (680 g/día vs esperado de 800 g/día). Revisar conversión alimenticia.
            </p>
          </div>

          <button className="w-full py-3.5 bg-sena-green hover:bg-green-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-900/40 transition-all text-sm cursor-pointer flex items-center justify-center">
            Ver Análisis
          </button>
        </div>

      </div>

    </div>
  );
}