import React from 'react';
import { Zap, Upload, ChevronRight, Target, Layers } from 'lucide-react';

export default function NovaInkX() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* CAPA DE ANIMACIÓN DE FONDO */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-emerald-700/5 rounded-full blur-[100px]"></div>
        {/* Grilla de fondo tipo Dashboard */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-12">
        
        {/* HEADER TIPO INTERFAZ DE ALTA GAMA */}
        <header className="flex justify-between items-center mb-20 animate-in fade-in slide-in-from-top duration-1000">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover:rotate-12 transition-transform duration-500">
              <Zap size={24} fill="black" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">
              NOVA<span className="text-emerald-400 font-extralight tracking-widest">INK</span>
            </h1>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            <span className="text-emerald-400 text-[10px] font-black tracking-[0.4em] uppercase">System v1.0.4</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* PANEL IZQUIERDO: SELECTORES CON EFECTO VIDRIO */}
          <div className="lg:col-span-8 space-y-10 animate-in fade-in slide-in-from-left duration-1000 delay-200">
            
            <section className="relative group">
              {/* Resplandor externo de la tarjeta */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-[#0D0D0E]/80 backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] shadow-2xl">
                <div className="flex items-center gap-3 mb-10">
                  <Target className="text-emerald-500" size={18} />
                  <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-500">Configuration Mesh</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Remeras', 'Gorras', 'Tazas'].map((cat, i) => (
                    <button key={cat} className={`relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 hover:translate-y-[-4px] ${i === 0 ? 'bg-emerald-500 shadow-[0_15px_40px_rgba(16,185,129,0.2)]' : 'bg-white/10 hover:bg-white/20'}`}>
                      <div className={`${i === 0 ? 'bg-emerald-500 text-black' : 'bg-[#121214] text-gray-400'} py-8 px-6 rounded-2xl flex flex-col items-center justify-center`}>
                        <span className="font-black text-sm uppercase tracking-tighter">{cat}</span>
                        <div className={`w-8 h-[2px] mt-2 ${i === 0 ? 'bg-black/20' : 'bg-emerald-500/30'}`}></div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-16">
                  <div className="flex items-center gap-3 mb-6">
                    <Layers className="text-emerald-500" size={16} />
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Dimension Scaling</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['A4 Standard', 'A3 Pro', 'Pocket', 'Full Print'].map((size, i) => (
                      <div key={size} className={`p-6 rounded-[1.5rem] border transition-all duration-500 cursor-pointer ${i === 1 ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.1)] scale-105' : 'border-white/5 bg-white/5 hover:border-white/20'}`}>
                        <p className={`text-xs font-black tracking-tight ${i === 1 ? 'text-emerald-400' : 'text-gray-500'}`}>{size}</p>
                        <p className="text-[9px] text-gray-700 mt-1 uppercase">Select Unit</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* DROPZONE CON ESTILO DE CARGA DE DATOS */}
            <div className="relative group cursor-pointer overflow-hidden rounded-[3rem] transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-[#0D0D0E] border-2 border-dashed border-white/5 p-20 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:rotate-90 transition-all duration-700">
                  <Upload size={32} strokeWidth={1} />
                </div>
                <h3 className="text-xs font-black tracking-[0.5em] text-gray-500 uppercase">Upload Asset</h3>
                <p className="text-[10px] text-gray-700 mt-4 font-mono italic">Ready for ingestion...</p>
              </div>
            </div>
          </div>

          {/* PANEL DERECHO: RESUMEN TIPO FACTURA DE TRADING */}
          <aside className="lg:col-span-4 animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <div className="bg-[#0D0D0E] border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden h-fit sticky top-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 blur-[60px]"></div>
              
              <h3 className="text-xl font-black mb-12 italic flex items-center gap-4">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                ORDER SUMMARY
              </h3>

              <div className="space-y-8 mb-16">
                {[
                  { label: 'Asset Class', val: 'Oversize Hoodie' },
                  { label: 'Printing Tech', val: 'Digital Neon', color: 'text-emerald-400' },
                  { label: 'Priority', val: 'Express (24h)' }
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{row.label}</span>
                    <span className={`text-sm font-bold ${row.color || 'text-white'}`}>{row.val}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 p-8 rounded-[2rem] border border-white/5 mb-10">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-4">Total Amount</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter">$14.500</span>
                  <span className="text-emerald-400 font-mono text-xs font-bold uppercase">ars</span>
                </div>
              </div>

              <button className="w-full relative group overflow-hidden bg-white py-8 rounded-2xl transition-all hover:scale-[1.02] active:scale-95">
                <div className="absolute inset-0 bg-emerald-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="relative flex items-center justify-center gap-4 text-black group-hover:text-white font-black text-xs tracking-[0.5em] uppercase">
                  Execute Order <ChevronRight size={20} />
                </div>
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
