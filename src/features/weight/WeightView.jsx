'use client';

import React, { useState } from 'react';
import { Scale, Plus, TrendingUp, TrendingDown } from 'lucide-react';

const initialPesajes = [
    { id: 'p1', animalId: 'L-001', etapa: 'Pre Ceba', pesoActual: 24, gdpReciente: 400, tendencia: 'down' },
    { id: 'p2', animalId: 'L-002', etapa: 'Levante', pesoActual: 68, gdpReciente: 900, tendencia: 'up' },
    { id: 'p3', animalId: 'L-003', etapa: 'Ceba / Finalización', pesoActual: 115, gdpReciente: 333, tendencia: 'down' },
    { id: 'p4', animalId: 'L-004', etapa: 'Pre Ceba', pesoActual: 19.5, gdpReciente: 450, tendencia: 'down' },
];

export default function WeightView() {
    const [pesajes, setPesajes] = useState(initialPesajes);
    const [filtroEtapa, setFiltroEtapa] = useState('Todas las Etapas');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [nuevoAnimalId, setNuevoAnimalId] = useState('');
    const [nuevaEtapa, setNuevaEtapa] = useState('Pre Ceba');
    const [nuevoPeso, setNuevoPeso] = useState('');
    const [nuevoGdp, setNuevoGdp] = useState('');

    const handleRegistrar = (e) => {
        e.preventDefault();
        if (!nuevoAnimalId || !nuevoPeso || !nuevoGdp) return;

        const nuevoItem = {
            id: Date.now().toString(),
            animalId: nuevoAnimalId,
            etapa: nuevaEtapa,
            pesoActual: Number(nuevoPeso),
            gdpReciente: Number(nuevoGdp),
            tendencia: Number(nuevoGdp) >= 500 ? 'up' : 'down',
        };

        setPesajes([nuevoItem, ...pesajes]);
        setNuevoAnimalId('');
        setNuevoPeso('');
        setNuevoGdp('');
        setIsModalOpen(false);
    };

    const etapas = ['Todas las Etapas', 'Pre-ceba', 'Levante', 'Ceba / Finalización'];

    const pesajesFiltrados = filtroEtapa === 'Todas las Etapas' 
        ? pesajes 
        : pesajes.filter(p => {
            const etapaFiltro = filtroEtapa.toLowerCase().replace(/[\s-]/g, '');
            const etapaItem = p.etapa.toLowerCase().replace(/[\s-]/g, '');
            return etapaItem.includes(etapaFiltro);
          });

    return (
        <div className="w-full space-y-8 pb-10">
            
            {/* Cabecera principal */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-400"></div>
                <div className="p-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                            <Scale className="text-amber-500 w-8 h-8 shrink-0" strokeWidth={2.2} />
                            Registro y Control de Pesajes
                        </h2>
                        <p className="text-slate-500 mt-1 ml-11 font-medium">Análisis de Ganancia Diaria de Peso (GDP) y conversiones.</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center gap-2 bg-sena-green hover:opacity-90 text-white font-bold px-6 py-3 rounded-2xl shadow-sm transition-all duration-200 cursor-pointer"
                        >
                            <Plus size={20} />
                            Registrar Pesaje
                        </button>
                    </div>
                </div>
            </div>

            {/* Sección Gráfica y Resumen */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 lg:col-span-3">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2.5">
                            <TrendingUp className="text-sena-green" size={24} />
                            Curva de Crecimiento
                        </h3>
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Ideal (Porkcolombia)</span>
                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> Promedio Real (Simulado)</span>
                        </div>
                    </div>
                    
                    <div className="h-64 w-full bg-slate-50/50 rounded-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-between p-6">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none p-6 opacity-40">
                            <div className="border-b border-slate-200 w-full"></div>
                            <div className="border-b border-slate-200 w-full"></div>
                            <div className="border-b border-slate-200 w-full"></div>
                        </div>

                        <div className="flex justify-between text-xs text-slate-400 font-bold z-10">
                            <span>130kg</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 font-bold z-10">
                            <span>65kg</span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 font-bold z-10 items-end pb-2">
                            <span>0kg</span>
                        </div>

                        <div className="absolute inset-0 pointer-events-none flex items-center">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
                                <path d="M 50,140 Q 150,110 230,60" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                                <path d="M 50,125 Q 140,95 210,50" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                                
                                <circle cx="230" cy="155" r="5" fill="#ffffff" stroke="#22c55e" strokeWidth="3" />
                                <circle cx="310" cy="155" r="5" fill="#ffffff" stroke="#22c55e" strokeWidth="3" />
                                <circle cx="345" cy="155" r="5" fill="#ffffff" stroke="#22c55e" strokeWidth="3" />
                                <circle cx="510" cy="120" r="5" fill="#ffffff" stroke="#22c55e" strokeWidth="3" />
                                <circle cx="660" cy="90" r="5" fill="#ffffff" stroke="#22c55e" strokeWidth="3" />
                                <circle cx="770" cy="45" r="5" fill="#ffffff" stroke="#22c55e" strokeWidth="3" />
                            </svg>
                        </div>

                        <div className="absolute inset-x-0 bottom-3 px-8 flex justify-between text-[11px] text-slate-400 font-bold">
                            <span>0 sem</span>
                            <span>Semanas de Edad</span>
                            <span>26 sem</span>
                        </div>
                    </div>
                </div>

                {/* Tarjeta de Promedio Grupal */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between h-full min-h-72.5">
                    <div>
                        <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Promedio del Grupo</span>
                        <h4 className="text-4xl font-black text-slate-900 mt-2">56.6 <span className="text-xl font-bold text-slate-500">kg</span></h4>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">El rendimiento global del lote se encuentra dentro del rango esperado para la etapa actual.</p>
                    </div>
                </div>
            </div>

            {/* Filtros por Etapa */}
            <div className="flex flex-wrap gap-2 items-center bg-white p-2 rounded-2xl border border-slate-100 shadow-sm w-fit">
                {etapas.map((etapa) => (
                    <button
                        key={etapa}
                        onClick={() => setFiltroEtapa(etapa)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                            filtroEtapa === etapa 
                                ? 'bg-slate-900 text-white shadow-sm' 
                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                    >
                        {etapa}
                    </button>
                ))}
            </div>

            {/* Tabla de Registros */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider bg-slate-50/50">
                                <th className="py-4 px-6">ID Animal</th>
                                <th className="py-4 px-6">Etapa</th>
                                <th className="py-4 px-6">Peso Actual</th>
                                <th className="py-4 px-6">GDP Reciente</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {pesajesFiltrados.map((row) => (
                                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors text-sm">
                                    <td className="py-4 px-6 font-bold text-slate-900">{row.animalId}</td>
                                    <td className="py-4 px-6">
                                        <span className="bg-slate-100 text-slate-600 font-bold text-xs px-3 py-1 rounded-full">
                                            {row.etapa}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 font-bold text-slate-900">{row.pesoActual} kg</td>
                                    <td className="py-4 px-6">
                                        {row.tendencia === 'up' ? (
                                            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full">
                                                <TrendingUp size={14} /> {row.gdpReciente} g/día
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 font-bold text-xs px-3 py-1 rounded-full">
                                                <TrendingDown size={14} /> {row.gdpReciente} g/día
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal para Registrar Pesaje */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 w-full max-w-lg shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-black text-slate-900">Registrar Nuevo Pesaje</h3>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-400 hover:text-slate-700 font-bold text-lg cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleRegistrar} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">ID del Animal</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ej: L-005"
                                    value={nuevoAnimalId}
                                    onChange={(e) => setNuevoAnimalId(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sena-green"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Etapa</label>
                                <select
                                    value={nuevaEtapa}
                                    onChange={(e) => setNuevaEtapa(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sena-green"
                                >
                                    <option value="Pre Ceba">Pre Ceba</option>
                                    <option value="Levante">Levante</option>
                                    <option value="Ceba / Finalización">Ceba / Finalización</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Peso Actual (kg)</label>
                                <input
                                    type="number"
                                    required
                                    placeholder="Ej: 45"
                                    value={nuevoPeso}
                                    onChange={(e) => setNuevoPeso(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sena-green"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">GDP Reciente (g/día)</label>
                                <input
                                    type="number"
                                    required
                                    placeholder="Ej: 750"
                                    value={nuevoGdp}
                                    onChange={(e) => setNuevoGdp(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sena-green"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 font-bold text-sm hover:bg-slate-200 transition-all cursor-pointer"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 rounded-xl bg-sena-green text-white font-bold text-sm hover:bg-green-700 transition-all shadow-md cursor-pointer"
                                >
                                    Guardar Pesaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}