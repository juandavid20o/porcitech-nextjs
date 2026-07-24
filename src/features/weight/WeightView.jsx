'use client';

import React, { useState } from 'react';
import { Scale, TrendingUp, TrendingDown, ArrowUpRight, Activity, Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import weightStandards from './data/weightStandards.json';

const initialAnimals = [
    { id: 'L-001', etapa: 'Pre Ceba', pesos: [{ fecha: '2026-04-10', peso: 20 }, { fecha: '2026-04-20', peso: 24 }] }, 
    { id: 'L-002', etapa: 'Levante', pesos: [{ fecha: '2026-04-05', peso: 50 }, { fecha: '2026-04-25', peso: 68 }] }, 
    { id: 'L-003', etapa: 'Ceba Finalizacion', pesos: [{ fecha: '2026-04-10', peso: 110 }, { fecha: '2026-04-25', peso: 115 }] }, 
    { id: 'L-004', etapa: 'Pre Ceba', pesos: [{ fecha: '2026-04-15', peso: 15 }, { fecha: '2026-04-25', peso: 19.5 }] }, 
];

const GrowthChart = () => {
    const dataRoot = weightStandards.default || weightStandards;
    const configCrecimiento = dataRoot.configuracion_crecimiento_colombia || {};
    const curvaRef = configCrecimiento.curva_crecimiento_referencia || {};
    
    const puntos_grafica_edad_semanas = curvaRef.puntos_grafica_edad_semanas || [0, 4, 8, 12, 16, 20, 24, 26];
    const puntos_grafica_peso_kg = curvaRef.puntos_grafica_peso_kg || [1.5, 10, 25, 45, 70, 95, 120, 130];

    const maxX = 26; 
    const maxY = 130; 
    
    const getX = (week) => (week / maxX) * 100;
    const getY = (weight) => 100 - (weight / maxY) * 100;
    
    const idealPoints = puntos_grafica_edad_semanas.map((week, idx) => `${getX(week)},${getY(puntos_grafica_peso_kg[idx])}`).join(' ');

    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm mb-8 border border-slate-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <TrendingUp className="text-blue-500 w-6 h-6" />
                    Curva de Crecimiento
                </h3>
                <div className="flex gap-4 text-sm font-semibold bg-slate-50 px-4 py-2 rounded-xl">
                    <div className="flex items-center gap-2 text-slate-600">
                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Ideal (Porkcolombia)
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                        <div className="w-3 h-3 rounded-full bg-blue-500 border border-blue-200"></div> Promedio Real (Simulado)
                    </div>
                </div>
            </div>
            
            <div className="relative w-full h-72 bg-slate-50/30 rounded-2xl border border-slate-100 p-6 ml-6 mt-4">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    {[0, 25, 50, 75, 100].map(p => (
                        <line key={`h-${p}`} x1="0" y1={`${p}%`} x2="100%" y2={`${p}%`} stroke="#f1f5f9" strokeWidth="2" />
                    ))}
                    {[0, 25, 50, 75, 100].map(p => (
                        <line key={`v-${p}`} x1={`${p}%`} y1="0" x2={`${p}%`} y2="100%" stroke="#f1f5f9" strokeWidth="2" />
                    ))}
                    
                    <polyline 
                        points={idealPoints}
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-sm opacity-80"
                    />

                    {puntos_grafica_edad_semanas.map((week, idx) => (
                        <circle 
                            key={idx}
                            cx={`${getX(week)}%`} 
                            cy={`${getY(puntos_grafica_peso_kg[idx])}%`} 
                            r="5" 
                            fill="#ffffff" 
                            stroke="#10b981" 
                            strokeWidth="3" 
                            className="shadow-sm transition-all"
                        />
                    ))}
                    
                    <polyline 
                        points="15.38,76.92 38.46,50 61.53,30" 
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-md"
                    />
                </svg>
                
                <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-slate-400 font-bold px-0">
                    <span>0 sem</span>
                    <span>Semanas de Edad</span>
                    <span>26 sem</span>
                </div>
                <div className="absolute top-0 bottom-0 -left-12 flex flex-col justify-between items-end text-xs text-slate-400 font-bold py-0 pr-2">
                    <span>130kg</span>
                    <span>65kg</span>
                    <span>0kg</span>
                </div>
            </div>
        </div>
    );
};

export default function WeightView() {
    const [animals, setAnimals] = useState(initialAnimals);
    const [filterEtapa, setFilterEtapa] = useState('todas');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({ animalId: '', peso: '', fecha: new Date().toISOString().split('T')[0] });

    const dataRoot = weightStandards.default || weightStandards;
    const alertas = dataRoot.configuracion_crecimiento_colombia?.alertas_rendimiento || {};
    const gdpCritica = alertas.gdp_critica_bajo_rendimiento || 600; 
    const gdpExcelente = 900; 

    const computeGDP = (pesos) => {
        if (!pesos || pesos.length < 2) return null;
        const sorted = [...pesos].sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
        const latest = sorted[sorted.length - 1];
        const prev = sorted[sorted.length - 2];
        
        const diffDays = (new Date(latest.fecha).getTime() - new Date(prev.fecha).getTime()) / (1000 * 60 * 60 * 24);
        if (diffDays <= 0) return 0;
        
        return Math.round(((latest.peso - prev.peso) / diffDays) * 1000);
    };

    const getLatestWeight = (pesos) => {
        if (!pesos || pesos.length === 0) return 0;
        const sorted = [...pesos].sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
        return sorted[sorted.length - 1].peso;
    };

    const filteredAnimals = filterEtapa === 'todas' 
        ? animals 
        : animals.filter(a => a.etapa.toLowerCase().replace(/[\s/]+/g, '_') === filterEtapa.toLowerCase().replace(/[\s/]+/g, '_'));

    const averageWeight = filteredAnimals.length > 0 
        ? (filteredAnimals.reduce((acc, curr) => acc + getLatestWeight(curr.pesos), 0) / filteredAnimals.length).toFixed(1)
        : '0';

    const handleAddWeight = (e) => {
        e.preventDefault();
        if(form.animalId && form.peso) {
            setAnimals(prev => prev.map(a => 
                a.id === form.animalId 
                ? { ...a, pesos: [...a.pesos, { fecha: form.fecha, peso: parseFloat(form.peso) }] }
                : a
            ));
        }
        setIsModalOpen(false);
        setForm({ animalId: '', peso: '', fecha: new Date().toISOString().split('T')[0] });
    };

    const columns = [
        { key: 'id', header: 'ID ANIMAL' },
        { 
            key: 'etapa', 
            header: 'ETAPA', 
            render: (row) => (
                <span className="text-slate-600 font-medium text-sm px-3 py-1 bg-slate-100 rounded-lg">
                    {row.etapa}
                </span>
            ) 
        },
        { 
            key: 'pesoActual', 
            header: 'PESO ACTUAL', 
            render: (row) => <span className="font-bold text-slate-800 text-base">{getLatestWeight(row.pesos)} kg</span> 
        },
        { 
            key: 'gdp', 
            header: 'GDP RECIENTE', 
            render: (row) => {
                const gdp = computeGDP(row.pesos);
                if (gdp === null) return <span className="text-slate-400 text-sm font-medium italic">Sin historial</span>;
                
                let colorClass = "text-slate-600 bg-slate-100";
                let Icon = Activity;
                
                if (gdp < gdpCritica) {
                    colorClass = "text-rose-600 bg-rose-50 border border-rose-100";
                    Icon = TrendingDown;
                } else if (gdp >= gdpExcelente) {
                    colorClass = "text-emerald-700 bg-emerald-100 border border-emerald-200";
                    Icon = ArrowUpRight;
                } else {
                    colorClass = "text-blue-700 bg-blue-50 border border-blue-100";
                    Icon = TrendingUp;
                }

                return (
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-semibold ${colorClass}`}>
                        <Icon size={16} strokeWidth={2.5} />
                        {gdp} g/día
                    </div>
                );
            } 
        },
    ];

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-10">
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border border-slate-100">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                        <div className="p-2.5 bg-slate-900 rounded-2xl shadow-sm">
                            <Scale className="text-white w-7 h-7" />
                        </div>
                        Registro y Control de Pesajes
                    </h2>
                    <p className="text-slate-500 mt-2 font-medium">Análisis de Ganancia Diaria de Peso (GDP) y conversiones.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-2xl shadow-sm transition-all duration-200"
                    >
                        <Plus size={20} />
                        Registrar Pesaje
                    </Button>
                </div>
            </div>

            <GrowthChart />

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 w-full md:w-auto overflow-x-auto">
                    {[
                        { id: 'todas', label: 'Todas las Etapas' },
                        { id: 'pre_ceba', label: 'Pre-ceba' },
                        { id: 'levante', label: 'Levante' },
                        { id: 'ceba_finalizacion', label: 'Ceba / Finalización' }
                    ].map(etp => (
                        <button
                            key={etp.id}
                            onClick={() => setFilterEtapa(etp.id)}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-colors whitespace-nowrap ${
                                filterEtapa === etp.id 
                                ? 'bg-slate-900 text-white shadow-md' 
                                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                            }`}
                        >
                            {etp.label}
                        </button>
                    ))}
                </div>

                <div className="bg-white rounded-2xl py-4 px-6 border border-slate-100 shadow-sm flex items-center gap-4 w-full md:w-auto">
                    <div className="p-3 bg-slate-900 rounded-xl">
                        <Activity className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">PROMEDIO DEL GRUPO</p>
                        <p className="text-2xl font-black text-slate-900">{averageWeight} kg</p>
                    </div>
                </div>
            </div>

            <section>
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden p-2 border border-slate-100">
                    <Table columns={columns} rows={filteredAnimals} />
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl relative border border-slate-100">
                        <form onSubmit={handleAddWeight} className="space-y-5">
                            <button 
                                type="button" 
                                onClick={() => setIsModalOpen(false)} 
                                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 font-bold"
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl font-black mb-6 text-slate-900 flex items-center gap-2">
                                <Scale className="text-slate-900 w-6 h-6" />
                                Nuevo Pesaje
                            </h2>
                            
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">ID Animal</label>
                                <input 
                                    type="text"
                                    placeholder="Ej: L-045" 
                                    value={form.animalId}
                                    onChange={(e) => setForm({...form, animalId: e.target.value})}
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                                    required 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Peso Actual (kg)</label>
                                <input 
                                    type="number"
                                    step="0.1"
                                    placeholder="Ej: 45.5" 
                                    value={form.peso}
                                    onChange={(e) => setForm({...form, peso: e.target.value})}
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                                    required 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Fecha de Pesaje</label>
                                <input 
                                    type="date" 
                                    value={form.fecha}
                                    onChange={(e) => setForm({...form, fecha: e.target.value})}
                                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                                    required 
                                />
                            </div>

                            <div className="flex gap-4 mt-8">
                                <Button type="button" tone="soft" onClick={() => setIsModalOpen(false)} className="flex-1 font-bold rounded-xl py-3">
                                    Cancelar
                                </Button>
                                <Button type="submit" className="flex-1 font-black bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3">
                                    Guardar Peso
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}