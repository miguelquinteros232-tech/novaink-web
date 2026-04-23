"use client";
import React, { useState } from 'react'; // Importamos useState para la lógica
import { Zap, Upload, ChevronRight, BarChart3 } from 'lucide-react';

export default function NovaInk() {
  // 1. Definimos los precios (luego esto vendrá de Google Sheets)
  const prices = {
    'REMERAS': 14500,
    'GORRAS': 8500,
    'TAZAS': 6200
  };

  // 2. Estado para el producto seleccionado
  const [selected, setSelected] = useState('REMERAS');

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body, html { margin: 0; padding: 0; background-color: #000; width: 100%; height: 100%; overflow-x: hidden; }
        .btn-asset { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
        .btn-asset:hover { transform: translateY(-2px); filter: brightness(1.2); }
      ` }} />

      <div style={{
        backgroundColor: '#000',
        backgroundImage: `
          radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0),
          radial-gradient(circle at 0% 0%, rgba(0, 255, 163, 0.08) 0%, transparent 40%)
        `,
        backgroundSize: '30px 30px, 100% 100%',
        color: 'white', minHeight: '100vh', width: '100vw', padding: '60px 20px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box'
      }}>
        
        {/* Header */}
        <header style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ background: '#00ffa3', padding: '10px', borderRadius: '12px', boxShadow: '0 0 30px rgba(0, 255, 163, 0.4)' }}>
              <Zap size={22} color="black" fill="black" />
            </div>
            <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-1.5px', fontStyle: 'italic' }}>
              NOVA<span style={{ fontWeight: '300' }}>INK</span>
            </h1>
          </div>
          <div style={{ color: '#444', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>SYSTEM.ACTIVE</div>
        </header>

        <div style={{ display: 'flex', gap: '30px', width: '100%', maxWidth: '1200px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* PANEL DE CONFIGURACIÓN */}
          <div style={{ 
            flex: '1.5', minWidth: '400px', background: 'rgba(10, 10, 10, 0.8)', border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '45px', padding: '50px', backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ color: '#00ffa3', fontSize: '12px', fontWeight: '900', letterSpacing: '4px', marginBottom: '40px' }}>01 CONFIGURATION</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '50px' }}>
              {['REMERAS', 'GORRAS', 'TAZAS'].map((item) => (
                <button 
                  key={item}
                  onClick={() => setSelected(item)} // Al hacer click cambiamos el estado
                  className="btn-asset"
                  style={{ 
                    background: selected === item ? '#00ffa3' : '#111', 
                    color: selected === item ? 'black' : '#444', 
                    border: selected === item ? 'none' : '1px solid #1a1a1a', 
                    padding: '25px', borderRadius: '25px', fontWeight: '900', fontSize: '13px' 
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div style={{ 
              height: '240px', border: '2px dashed rgba(255,255,255,0.05)', borderRadius: '35px', 
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#333'
            }}>
              <Upload size={32} style={{ marginBottom: '15px', opacity: 0.5 }} />
              <span style={{ fontSize: '12px', fontWeight: '800' }}>DRAG ASSET HERE</span>
            </div>
          </div>

          {/* PANEL SUMMARY (DINÁMICO) */}
          <aside style={{ 
            flex: '1', minWidth: '350px', background: 'rgba(10, 10, 10, 0.8)', border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '45px', padding: '50px', display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '45px' }}>
              <BarChart3 size={18} color="#00ffa3" />
              <h3 style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic' }}>ORDER SUMMARY</h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #151515', paddingBottom: '20px' }}>
              <span style={{ fontSize: '10px', color: '#333', fontWeight: '900' }}>ITEM</span>
              <span style={{ fontSize: '14px', fontWeight: '700' }}>{selected}</span>
            </div>

            <div style={{ marginTop: 'auto', marginBottom: '40px' }}>
              <p style={{ fontSize: '10px', color: '#333', fontWeight: '900', marginBottom: '10px' }}>TOTAL AMOUNT</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span style={{ fontSize: '64px', fontWeight: '900', letterSpacing: '-3px' }}>
                  ${prices[selected].toLocaleString('es-AR')}
                </span>
                <span style={{ color: '#00ffa3', fontSize: '16px', fontWeight: '900' }}>ARS</span>
              </div>
            </div>

            <button style={{ 
              width: '100%', padding: '28px', background: 'white', color: 'black', border: 'none', 
              borderRadius: '25px', fontWeight: '900', cursor: 'pointer', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', gap: '10px', textTransform: 'uppercase'
            }}>
              Execute Order <ChevronRight size={20} />
            </button>
          </aside>
        </div>
      </div>
    </>
  );
}
