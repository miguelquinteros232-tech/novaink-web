"use client";
import React from 'react';

export default function NovaInkAlpha() {
  const neon = "#00ffa3";

  return (
    <div style={{
      backgroundColor: '#020203',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
      {/* Resplandor de fondo (Glow) */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px',
        background: `radial-gradient(circle, ${neon}15 0%, transparent 70%)`, filter: 'blur(80px)', pointerEvents: 'none'
      }}></div>

      {/* Header Estilo Alpha */}
      <header style={{ width: '100%', maxWidth: '1050px', marginBottom: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', fontStyle: 'italic' }}>
          NOVA<span style={{ color: neon, fontWeight: '200' }}>INK</span>
        </h1>
        <div style={{ fontSize: '10px', color: '#444', letterSpacing: '3px', fontWeight: 'bold' }}>TERMINAL V.2.0</div>
      </header>

      {/* Grid de 2 Columnas */}
      <div style={{ 
        display: 'grid', gridTemplateColumns: '1fr 360px', gap: '30px', 
        width: '100%', maxWidth: '1050px' 
      }}>
        
        {/* PANEL IZQUIERDO: CONFIGURADOR */}
        <div style={{ 
          background: '#0a0a0b', border: '1px solid #1a1a1b', 
          padding: '40px', borderRadius: '35px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <h2 style={{ fontSize: '10px', color: neon, letterSpacing: '4px', marginBottom: '30px', fontWeight: '900' }}>01 CONFIGURATION</h2>
          
          {/* Botones de Categoría */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '40px' }}>
            <button style={{ background: neon, color: 'black', border: 'none', padding: '22px', borderRadius: '18px', fontWeight: '900', fontSize: '11px', cursor: 'pointer' }}>REMERAS</button>
            <button style={{ background: '#111', color: '#444', border: '1px solid #222', padding: '22px', borderRadius: '18px', fontWeight: '900', fontSize: '11px' }}>GORRAS</button>
            <button style={{ background: '#111', color: '#444', border: '1px solid #222', padding: '22px', borderRadius: '18px', fontWeight: '900', fontSize: '11px' }}>TAZAS</button>
          </div>

          <p style={{ fontSize: '10px', color: '#444', fontWeight: '900', marginBottom: '15px' }}>INPUT ASSET</p>
          <div style={{ 
            width: '100%', height: '160px', border: '2px dashed #1a1a1b', borderRadius: '25px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: '#333', fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px' 
          }}>
            DRAG AND DROP DESIGN
          </div>
        </div>

        {/* PANEL DERECHO: RESUMEN (ORDER SUMMARY) */}
        <aside style={{ 
          background: 'linear-gradient(180deg, #0f0f10 0%, #050505 100%)', 
          border: '1px solid #1a1a1b', padding: '35px', 
          borderRadius: '35px', height: 'fit-content', boxShadow: '0 30px 60px rgba(0,0,0,0.7)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '35px', fontStyle: 'italic' }}>ORDER <span style={{color: neon}}>DETAILS</span></h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #151515', paddingBottom: '12px' }}>
              <span style={{ fontSize: '9px', color: '#444', fontWeight: '900' }}>ASSET</span>
              <span style={{ fontSize: '11px', fontWeight: 'bold' }}>T-Shirt Pro</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #151515', paddingBottom: '12px' }}>
              <span style={{ fontSize: '9px', color: '#444', fontWeight: '900' }}>TECH</span>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: neon }}>HD Sublimation</span>
            </div>
          </div>

          <div style={{ marginTop: '40px', marginBottom: '35px' }}>
            <p style={{ fontSize: '9px', color: '#444', fontWeight: '900', marginBottom: '8px' }}>TOTAL PRICE</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-2px' }}>$14.500</span>
              <span style={{ color: neon, fontSize: '11px', fontWeight: 'bold' }}>ARS</span>
            </div>
          </div>

          <button style={{ 
            width: '100%', padding: '22px', background: 'white', color: 'black', 
            border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '11px',
            cursor: 'pointer', letterSpacing: '2px', transition: '0.2s'
          }}>
            EXECUTE ORDER
          </button>
        </aside>
      </div>
    </div>
  );
}
