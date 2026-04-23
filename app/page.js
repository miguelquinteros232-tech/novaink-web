import React from 'react';

export default function NovaInkHome() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white p-8 font-sans">
      
      {/* HEADER: Nombre de la empresa */}
      <header className="flex justify-between items-center max-w-6xl mx-auto mb-12">
        <h1 className="text-3xl font-bold tracking-tighter italic">
          NOVA<span className="text-[#00FFA3] font-light">INK</span>
        </h1>
        <div className="bg-[#161616] px-6 py-2 rounded-full border border-[#2A2A2A] text-sm font-medium">
          🛒 Carrito (0)
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL: Inspirado en tu captura de pantalla */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: Configuración del Pedido */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Bloque 1: Tipo de Producto */}
          <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-[#2A2A2A]">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">Seleccionar Producto</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-[#00FFA3] text-black font-extrabold py-4 rounded-2xl shadow-[0_0_15px_rgba(0,255,163,0.3)]">
                Remeras
              </button>
              <button className="bg-[#2A2A2A] hover:bg-[#333] py-4 rounded-2xl transition-all border border-transparent hover:border-gray-500">
                Gorras
              </button>
              <button className="bg-[#2A2A2A] hover:bg-[#333] py-4 rounded-2xl transition-all border border-transparent hover:border-gray-500">
                Tazas
              </button>
            </div>
          </div>

          {/* Bloque 2: Tamaño de Estampa (Inspirado en el selector de $50k) */}
          <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-[#2A2A2A]">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">Tamaño de Estampa</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="py-5 border-2 border-[#00FFA3] bg-[#1A3A32] text-[#00FFA3] rounded-2xl font-bold text-lg">
                A4
              </button>
              <button className="py-5 border border-[#2A2A2A] bg-transparent rounded-2xl hover:border-gray-400 transition-all">
                A3
              </button>
              <button className="py-5 border border-[#2A2A2A] bg-transparent rounded-2xl hover:border-gray-400 transition-all">
                Bolsillo
              </button>
              <button className="py-5 border border-[#2A2A2A] bg-transparent rounded-2xl hover:border-gray-400 transition-all">
                Full Print
              </button>
            </div>
          </div>

          {/* Bloque 3: Subida de Diseño */}
          <div className="bg-[#161616] p-8 rounded-[2.5rem] border border-[#2A2A2A] border-dashed">
            <div className="flex flex-col items-center justify-center py-4">
              <span className="text-[#00FFA3] mb-2">📁</span>
              <p className="text-gray-400 text-sm">Arrastra tu diseño aquí o haz clic para subir</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Resumen de Pedido (Sidebar) */}
        <aside className="bg-[#161616] p-8 rounded-[2.5rem] border border-[#2A2A2A] h-fit sticky top-8">
          <h2 className="text-2xl font-bold mb-8">Resumen Nova</h2>
          
          <div className="space-y-5 text-sm border-b border-[#2A2A2A] pb-8 mb-8">
            <div className="flex justify-between">
              <span className="text-gray-500">Cuenta / Producto:</span>
              <span className="font-medium text-[#00FFA3]">Remera Premium</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Medida seleccionada:</span>
              <span>A4 (21x29cm)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Plataforma:</span>
              <span>Sublimación Textil</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-10">
            <span className="text-gray-500 font-medium">TOTAL:</span>
            <span className="text-3xl font-black text-[#00FFA3] tracking-tighter">$ 0.00</span>
          </div>

          {/* Botón de Acción Principal */}
          <button className="w-full bg-gradient-to-r from-[#00FFA3] to-[#00D1FF] text-black font-black py-5 rounded-2xl shadow-[0_10px_30px_rgba(0,255,163,0.25)] hover:scale-[1.03] active:scale-[0.98] transition-all uppercase tracking-widest text-sm">
            Confirmar Pedido
          </button>
        </aside>

      </section>

      {/* Footer simple */}
      <footer className="mt-20 text-center text-gray-600 text-xs tracking-widest uppercase">
        &copy; 2026 Nova Ink Studio - Design & Quality
      </footer>
    </main>
  );
}
