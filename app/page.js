import React from 'react';

export default function NovaInkPro() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
      
      {/* Fondo con Luces Difusas (Esto da el toque de la foto) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        
        {/* Header Superior sutil */}
        <header className="flex justify-between items-center mb-16 border-b border-white/5 pb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
            <h1 className="text-xl font-bold tracking-[0.2em] uppercase">Nova<span className="text-emerald-400 font-light">Ink</span></h1>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-medium text-gray-400 tracking-widest">
            <span className="text-white border-b border-emerald-400 pb-1">CATÁLOGO</span>
            <span className="hover:text-white cursor-pointer transition-colors">PERSONALIZADOS</span>
            <span className="hover:text-white cursor-pointer transition-colors">MI CUENTA</span>
          </nav>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LADO IZQUIERDO: CONFIGURADOR (65% del ancho) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Configuración de Producto</h2>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">PASO 01</span>
              </div>

              {/* Selectores Estilo Trading (Como el de Account Type) */}
              <div className="grid grid-cols-3 gap-3 p-1.5 bg-black/40 rounded-2xl border border-white/5">
                <button className="py-3 px-4 rounded-xl text-xs font-bold transition-all bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">REMERAS</button>
                <button className="py-3 px-4 rounded-xl text-xs font-bold transition-all text-gray-500 hover:text-white">GORRAS</button>
                <button className="py-3 px-4 rounded-xl text-xs font-bold transition-all text-gray-500 hover:text-white">TAZAS</button>
              </div>

              <div className="mt-10">
                <h3 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">Tamaño de Impresión</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['A4 Standard', 'A3 Pro', 'Bolsillo', 'Full Print'].map((size, index) => (
                    <div key={size} className={`p-4 rounded-2xl border transition-all cursor-pointer ${index === 1 ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/5 bg-white/[0.02] hover:border-white/20'}`}>
                      <p className="text-[10px] text-gray-500 mb-1 font-bold uppercase">Medida</p>
                      <p className={`text-sm font-bold ${index === 1 ? 'text-emerald-400' : 'text-gray-300'}`}>{size}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dropzone de archivos estilo "Upload" */}
            <div className="bg-[#111111]/40 border-2 border-dashed border-white/5 p-12 rounded-[2rem] flex flex-col items-center justify-center group hover:border-emerald-500/40 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-emerald-400 text-xl">+</span>
              </div>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">Cargar Archivo de Diseño</p>
              <p className="text-[10px] text-gray-600 mt-2">PNG, JPG o SVG (Max. 50MB)</p>
            </div>
          </div>

          {/* LADO DERECHO: PANEL DE COSTOS (Resumen) */}
          <aside className="lg:col-span-4 h-fit">
            <div className="bg-gradient-to-b from-[#161616] to-[#0A0A0A] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              {/* Adorno de luz en el resumen */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] -z-10"></div>
              
              <h2 className="text-lg font-bold mb-8 flex items-center gap-2">
                Resumen del <span className="text-emerald-400 font-light italic">Pedido</span>
              </h2>

              <div className="space-y-6 mb-10 text-xs">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 uppercase tracking-tighter">Producto base</span>
                  <span className="font-bold">Remera Over-Size</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 uppercase tracking-tighter">Estampa</span>
                  <span className="font-bold text-emerald-400">A3 PRO Premium</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-gray-500 uppercase tracking-tighter">Tiempo Estimado</span>
                  <span className="font-bold italic text-gray-300">24-48 hs</span>
                </div>
              </div>

              <div className="mb-10">
                <p className="text-[10px] text-gray-500 uppercase font-bold mb-1 tracking-widest">Total a pagar</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tighter">$7.500</span>
                  <span className="text-emerald-500 text-xs font-bold font-mono">.00</span>
                </div>
              </div>

              <button className="w-full bg-[#E5E5E5] hover:bg-white text-black font-black py-5 rounded-2xl transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] active:scale-95 uppercase text-xs tracking-[0.2em]">
                Siguiente Paso
              </button>

              <p className="text-center text-[9px] text-gray-600 mt-6 uppercase tracking-widest">Pagos seguros vía Mercado Pago</p>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
