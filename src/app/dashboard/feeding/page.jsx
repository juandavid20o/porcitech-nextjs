'use client';

import { useState } from 'react';

export default function FeedingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consumos, setConsumos] = useState([
    { id: 1, fecha: '2026-04-25', alimento: 'Levante', cantidad: '150 kg', destino: 'Lote #42' },
    { id: 2, fecha: '2026-04-25', alimento: 'Pre-iniciador', cantidad: '25 kg', destino: 'Corral 09' },
    { id: 3, fecha: '2026-04-24', alimento: 'Ceba', cantidad: '200 kg', destino: 'Sector A-12' },
    { id: 4, fecha: '2026-04-24', alimento: 'Iniciador', cantidad: '80 kg', destino: 'Lote #15' },
  ]);

  const [nuevoAlimento, setNuevoAlimento] = useState('');
  const [nuevaCantidad, setNuevaCantidad] = useState('');
  const [nuevoDestino, setNuevoDestino] = useState('');

  const handleRegistrar = (e) => {
    e.preventDefault();
    if (!nuevoAlimento || !nuevaCantidad || !nuevoDestino) return;

    const nuevo = {
      id: Date.now(),
      fecha: new Date().toISOString().split('T')[0],
      alimento: nuevoAlimento,
      cantidad: `${nuevaCantidad} kg`,
      destino: nuevoDestino,
    };

    setConsumos([nuevo, ...consumos]);
    setNuevoAlimento('');
    setNuevaCantidad('');
    setNuevoDestino('');
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* TARJETA SUPERIOR PRINCIPAL */}
      <div className="bg-white border border-slate-200 rounded-4xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        {/* Línea decorativa superior amarilla */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-400"></div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                Control de Alimentación
              </h1>
              <p className="text-sm text-slate-500 font-medium">
                Gestión de inventario y consumo diario del plantel.
              </p>
            </div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-5 py-3 bg-sena-green text-white font-bold rounded-xl shadow-md hover:bg-green-700 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>+</span> Registrar Suministro
          </button>
        </div>
      </div>

      {/* INVENTARIO DE SILOS */}
      <div className="space-y-4">
        <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
          Inventario de Silos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          
          {/* SILO 1 */}
          <div className="bg-white border border-slate-200 rounded-4xl p-6 shadow-xs relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Pre-iniciador</span>
                <span className="text-3xl font-black text-slate-900">450 <span className="text-sm font-bold text-slate-500">kg</span></span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">Capacidad: 500kg</span>
                <span className="text-amber-500">90%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>

          {/* SILO 2 */}
          <div className="bg-white border border-slate-200 rounded-4xl p-6 shadow-xs relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Iniciador</span>
                <span className="text-3xl font-black text-slate-900">800 <span className="text-sm font-bold text-slate-500">kg</span></span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">Capacidad: 1000kg</span>
                <span className="text-amber-500">80%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>

          {/* SILO 3 */}
          <div className="bg-white border border-slate-200 rounded-4xl p-6 shadow-xs relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Levante</span>
                <span className="text-3xl font-black text-slate-900">1200 <span className="text-sm font-bold text-slate-500">kg</span></span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">Capacidad: 2000kg</span>
                <span className="text-blue-500">60%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>

          {/* SILO 4 (Crítico) */}
          <div className="bg-white border border-rose-200 rounded-4xl p-6 shadow-xs relative">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 block mb-1">Ceba</span>
                <span className="text-3xl font-black text-slate-900">300 <span className="text-sm font-bold text-slate-500">kg</span></span>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">Capacidad: 2000kg</span>
                <span className="text-rose-500">15%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full rounded-full w-[15%]"></div>
              </div>
              <div className="mt-2 bg-rose-50 border border-rose-100 rounded-xl p-2 flex items-center gap-1.5 text-[11px] font-bold text-rose-600">
                Stock crítico. Reabastecer.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONSUMO DIARIO */}
      <div className="bg-white border border-slate-200 rounded-4xl p-6 sm:p-8 shadow-xs">
        <h2 className="text-lg font-black text-slate-900 tracking-tight mb-6 flex items-center gap-2">
          Consumo Diario
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-4 px-4">Fecha</th>
                <th className="pb-4 px-4">Tipo de Alimento</th>
                <th className="pb-4 px-4">Cantidad (Kg)</th>
                <th className="pb-4 px-4">Lote/Animal Destinado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium">
              {consumos.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-slate-500">{item.fecha}</td>
                  <td className="py-4 px-4 font-bold text-slate-900">{item.alimento}</td>
                  <td className="py-4 px-4 text-slate-600">{item.cantidad}</td>
                  <td className="py-4 px-4 text-slate-500">{item.destino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white border border-slate-200 rounded-4xl p-6 sm:p-8 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black text-slate-900">Registrar Suministro de Alimento</h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRegistrar} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Tipo de Alimento</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Pre-iniciador / Ceba"
                  value={nuevoAlimento}
                  onChange={(e) => setNuevoAlimento(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sena-green"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Cantidad (kg)</label>
                <input
                  type="number"
                  required
                  placeholder="Ej: 100"
                  value={nuevaCantidad}
                  onChange={(e) => setNuevaCantidad(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sena-green"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Lote o Animal Destinado</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Lote #42"
                  value={nuevoDestino}
                  onChange={(e) => setNuevoDestino(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sena-green"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-all cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-sena-green text-white font-bold text-sm hover:bg-green-700 transition-all shadow-md cursor-pointer"
                >
                  Guardar Suministro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}