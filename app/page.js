"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, ChevronRight, ShoppingCart, Zap } from 'lucide-react';

export default function NovaInkPremium() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS - Luces de neón dinámicas */}
      <div className="fixed inset-0 -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" 
        />
        <div className="absolute top-1/4 right-0 w-[300px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* NAV BAR ANIMADA */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center mb-16 p-6 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center">
              <Zap size={20} fill="black" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">NOVA<span className="font-thin text-emerald-400">INK</span></h1>
          </div>
          <div className="flex gap-4">
             <button className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <ShoppingCart size={20} className="text-emerald-400" />
             </button>
          </div>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LADO IZQUIERDO - CONFIGURADOR */}
          <motion.div 
            variants={container} initial="hidden" animate="show"
            className="lg:col-span-8 space-y-8"
          >
            <motion.div variants={item} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0A0A0A] border border-white/10 p-10 rounded-[2.5rem]">
                <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-[0.3em] mb-8">01. Configuración de producto</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Remeras', 'Gorras', 'Tazas'].map((cat, i) => (
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      key={cat}
                      className={`py-5 rounded-2xl font-bold text-sm transition-all ${i === 0 ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'bg-white/5 border border-white/5 hover:border-emerald-500/50'}`}
                    >
                      {cat.toUpperCase()}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['A4', 'A3', 'Pocket', 'Full'].map((size, i) => (
                    <motion.div
                      whileHover={{ borderColor: 'rgba(16, 185, 129, 0.5)' }}
                      key={size}
                      className={`p-6 rounded-2xl border text-center cursor-pointer transition-all ${i === 1 ? 'border-emerald-500 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-white/5 bg-white/5'}`}
                    >
                      <p className="text-[10px] text-gray-500 font-bold mb-2">SIZE</p>
                      <p className={`text-lg font-black ${i === 1 ? 'text-emerald-400' : 'text-white'}`}>{size}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* DROPZONE ANIMADA */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.01 }}
              className="bg-[#0A0A0A] border-2 border-dashed border-white/10 p-16 rounded-[2.5rem] flex flex-col items-center justify-center cursor-pointer group"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20"
              >
                <Upload size={24} />
              </motion.div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">Arrastrá tu arte aquí</p>
            </motion.div>
          </motion.div>

          {/* LADO DERECHO - RESUMEN ESTILO DASHBOARD */}
          <motion.aside 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 h-fit"
          >
            <div className="bg-gradient-to-b from-[#111] to-[#050505] border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px]" />
              
              <h3 className="text-xl font-black mb-8 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full" /> RESUMEN
              </h3>

              <div className="space-y-6 mb-12">
                {[
                  { label: 'Producto', val: 'Remera Premium' },
                  { label: 'Técnica', val: 'Sublimación HD', color: 'text-emerald-400' },
                  { label: 'Tiempo', val: '24hs' }
                ].map((row) => (
                  <div key={row.label} className="flex justify-between border-b border-white/5 pb-4">
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{row.label}</span>
                    <span className={`text-xs font-bold ${row.color || 'text-white'}`}>{row.val}</span>
                  </div>
                ))}
              </div>

              <div className="mb-10 p-6 bg-black/50 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-gray-500 uppercase mb-2">Total Estimado</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter">$12.500</span>
                  <span className="text-emerald-400 font-mono text-sm">.00</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-white text-black font-black py-6 rounded-2xl flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
              >
                Confirmar <ChevronRight size={16} />
              </motion.button>
            </div>
          </motion.aside>

        </div>
      </div>
    </main>
  );
}
