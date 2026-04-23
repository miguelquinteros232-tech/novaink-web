import React from 'react';
import { Upload, ChevronRight, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function NovaInkFinal() {
  return (
    <div className="min-h-screen bg-[#020203] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* BACKGROUND GLOWS - Animados con CSS puro */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        
        {/* NAV BAR ESTILO VIDRIO */}
        <nav className="flex justify-between items-center mb-12 p-5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Zap size={20} fill="black" stroke="black" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">NOVA<span className="text-emerald-400 font-extralight">INK</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.3em] text-gray-500">
            <span className="text-emerald-400 cursor-pointer">BUILDER</span>
            <span className="hover:text-white cursor-pointer transition-all">GALLERY</span>
            <span className="hover:text-white cursor-pointer transition-all">SQUAD</span>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
            <span className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase">Live Beta</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SECCIÓN IZQUIERDA */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-[#0A0A0B] border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-all duration-700"></div>
              
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl font-black text-white/10 italic">01</span>
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-emerald-400">Selección de Activo</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Remeras', 'Gorras', 'Tazas'].map((name, i) => (
                  <button key={name} className={`group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${i === 0 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_10px_30px_rgba(16,185,129,0.2)]' : 'bg-white/10 hover:bg-white/20'}`}>
                    <div className={`${i === 0 ? 'bg-emerald-500 text-black' : 'bg-[#0F0F10] text-gray-400'} py-6 px-4 rounded-2xl flex flex-col items-center gap-1`}>
                      <span className="font-black text-xs uppercase tracking-widest">{name}</span>
                      <span className={`text-[9px] uppercase opacity-60 ${i === 0 ? 'text-black' : 'text-emerald-400'}`}>Premium Quality</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6">Configuración de Escala</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['A4 Std', 'A3 Pro', 'Pocket', 'Full Print'].map((size, i) => (
                    <div key={size} className={`p-5 rounded-2xl border transition-all cursor-pointer group ${i === 1 ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-white/5 bg-white/5 hover:border-white/20'}`}>
                      <p className={`text-xs font-black ${i === 1 ? 'text-emerald-400' : 'text-gray-400'}`}>{size}</p>
                      <div className="h-1 w-0 group-hover:w-full bg-emerald-500/40 transition-all duration-500 mt-2 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* UPLOAD AREA */}
            <div className="relative group cursor-pointer overflow-hidden rounded-[3rem]">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
              <div className="relative bg-[#0A0A0B] border-2 border-dashed border-white/10 p-16 flex flex-col items-center justify-center transition-all group-hover:border-emerald-500/50">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <Upload size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-black tracking-[0.4em] text-gray-400 uppercase">Importar Diseño</h3>
                <p className="text-[9px] text-gray-600 mt-3 font-mono">SUPPORTED: PNG, JPG, PDF, AI</p>
              </div>
            </div>
          </div>

          {/* PANEL DE CONTROL DERECHO */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-b from-[#121214] to-[#050505] border border-white/10 p-10 rounded-[3rem] shadow-2xl relative">
              <h3 className="text-sm font-black mb-10 flex items-center gap-3 italic">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                RESUMEN OPERATIVO
              </h3>

              <div className="space-y-6 mb-12">
                {[
                  { icon: <Zap size={14}/>, label: 'Asset', val: 'Oversize Tee' },
                  { icon: <ShieldCheck size={14}/>, label: 'Finish', val: 'Sublimation Max', color: 'text-emerald-400' },
                  { icon: <Clock size={14}/>, label: 'Delivery', val: '24-48 Hours' }
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center group">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-600 group-hover:text-emerald-400 transition-colors">{row.icon}</div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">{row.label}</span>
                    </div>
                    <span className={`text-[11px] font-black tracking-tight ${row.color || 'text-white'}`}>{row.val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black/50 p-8 rounded-3xl border border-white/5 mb-10 shadow-inner">
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-3">Total Balance</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter">$14.500</span>
                  <span className="text-emerald-500 font-mono text-sm font-bold">.00</span>
                </div>
              </div>

              <button className="w-full relative group overflow-hidden bg-white py-6 rounded-2xl transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3 text-black group-hover:text-white font-black text-[11px] tracking-[0.3em] uppercase">
                  Ejecutar Orden <ChevronRight size={18} />
                </div>
              </button>
            </div>
            
            {/* Pequeña tarjeta informativa extra */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl flex items-center justify-between">
               <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Status</span>
                  <span className="text-[10px] text-emerald-400 font-black">SISTEMA ONLINE</span>
               </div>
               <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-black"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700 border-2 border-black"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-black"></div>
               </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
