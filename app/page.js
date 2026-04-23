import React from 'react';

export default function NovaInkFinal() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      
      {/* Fondo con resplandor neón (Como en tu captura) */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[300px] h-[300px] bg-emerald-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-10">
        
        {/* Encabezado Principal */}
        <header className="flex justify-between items-center mb-16 border-b border-white/5 pb-8">
          <h1 className="text-3xl font-black italic tracking-tighter">
            NOVA<span className="text-emerald-400 font-light">INK</span>
          </h1>
          <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-gray-500">
            <span className="text-emerald-400">PRODUCTOS</span>
            <span className="hover:text-white cursor-pointer transition-colors">DISEÑOS</span>
            <span className="hover:text-white cursor-pointer transition-colors">AYUDA</span>
            <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white">🛒</div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LADO IZQUIERDO: SELECCIÓN DE PRODUCTO */}
          <div className="lg:col-span-8 space-y-8">
            
            <section className="bg-[#111111] border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="text-8xl font-black">01</span>
              </div>

              <h2 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-8 italic">Configurá tu pedido</h2>
              
              <div className="space-y-10">
                {/* Selector de Categoría (Copiando el estilo de botones de la foto) */}
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold mb-4 tracking-widest">¿Qué vamos a estampar?</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-emerald-500 text-black font-black py-5 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-all">
                      REMERAS
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:border-white/20 py-5 rounded-2xl font-bold transition-all text-gray-400 hover:text-white">
                      GORRAS
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:border-white/20 py-5 rounded-2xl font-bold transition-all text-gray-400 hover:text-white">
                      TAZAS
                    </button>
                  </div>
                </div>

                {/* Selector de Tamaño (Como el de $50k de la foto) */}
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold mb-4 tracking-widest">Tamaño de la estampa</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['A4', 'A3', 'Pocket', 'Full Print'].map((item, index) => (
                      <div key={item} className={`p-5 rounded-2xl border text-center transition-all cursor-pointer ${index === 0 ? 'border-emerald-500 bg-emerald-500/10' : 'border-white/5 bg-white/5 hover:border-white/30'}`}>
                        <span className={`text-sm font-black ${index === 0 ? 'text-emerald-400' : 'text-gray-400'}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Zona de carga de archivos */}
            <div className="bg-[#111111]/50 border-2 border-dashed border-white/10 p-12 rounded-[3rem] flex flex-col items-center justify-center group hover:border-emerald-500/40 transition-all cursor-pointer">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Subí tu diseño aquí</p>
              <div className="mt-4 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-125 transition-all">+</div>
            </div>
          </div>

          {/* LADO DERECHO: RESUMEN DE PAGO (Inspirado en el panel derecho de la foto) */}
          <aside className="lg:col-span-4">
            <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden h-fit sticky top-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px]"></div>
              
              <h2 className="text-xl font-black mb-10 border-b border-white/5 pb-6">DETALLE</h2>

              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Base</span>
                  <span className="text-sm font-bold">Remera Premium</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Estampa</span>
                  <span className="text-sm font-bold text-emerald-400 italic">Tamaño A4</span>
                </div>
              </div>

              <div className="mb-10">
                <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-widest">Inversión Total</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter text-white">$9.500</span>
                  <span className="text-emerald-500 font-bold font-mono">.00</span>
                </div>
              </div>

              <button className="w-full bg-white text-black font-black py-6 rounded-2xl hover:scale-105 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] uppercase text-xs tracking-widest">
                Realizar Pedido
              </button>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
