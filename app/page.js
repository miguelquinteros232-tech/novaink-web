"use client";
import React from 'react';

export default function NovaInkAlpha() {
  return (
    <div style={{
      backgroundColor: '#050505',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      margin: '0'
    }}>
      {/* Glow de fondo */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px',
        backgroundColor: 'rgba(0, 255, 163, 0.05)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
      }}></div>

      {/* Header */}
      <header style={{ width: '100%', maxWidth: '1000px', marginBottom: '50px', zIndex: 1 }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>
          NOVA<span style={{ color: '#00ffa3', fontWeight: '200' }}>INK</span>
        </h1>
      </header>

      {/* Grid de 2 Columnas: Esto es lo que va a arreglar la "lista" */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '30px', 
        width: '100%', 
        maxWidth: '1000px',
        zIndex: 1,
        flexWrap: 'wrap' // Para que en celulares se ponga uno abajo del otro
      }}>
        
        {/* Panel Izquierdo (Configuración) */}
        <div style={{ 
          flex: '1',
          minWidth: '300px',
          background: '#0d0d0e', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '40px', 
          borderRadius: '40px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <p style={{ color: '#00ffa3', fontSize: '10px', letterSpacing: '4px', fontWeight: '900', marginBottom: '30px' }}>01 CONFIGURATION</p>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
            <button style={{ flex: 1, background: '#00ffa3', color: 'black', border: 'none', padding: '20px', borderRadius: '15px', fontWeight: '900', cursor: 'pointer' }}>REMERAS</button>
            <button style={{ flex: 1, background: '#151516', color: '#555', border: '1px solid #333', padding: '20px', borderRadius: '15px', fontWeight: '900' }}>GORRAS</button>
            <button style={{ flex: 1, background: '#151516', color: '#555', border: '1px solid #333', padding: '20px', borderRadius: '15px', fontWeight: '900' }}>TAZAS</button>
          </div>

          <div style={{ height: '180px', border: '2px dashed #222', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444', fontWeight: 'bold', fontSize: '11px' }}>
            ARRASTRÁ TU DISEÑO AQUÍ
          </div>
        </div>

        {/* Panel Derecho (Resumen) */}
        <aside style={{ 
          width: '350px',
          background: 'linear-gradient(180deg, #121213 0%, #050505 100%)', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '40px', 
          borderRadius: '40px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.7)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '35px', fontStyle: 'italic' }}>ORDER SUMMARY</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '15px', marginBottom: '15px' }}>
            <span style={{ fontSize: '10px', color: '#555', fontWeight: '900' }}>ITEM</span>
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Remera Pro</span>
          </div>

          <div style={{ marginTop: '50px', marginBottom: '40px' }}>
            <p style={{ fontSize: '10px', color: '#555', fontWeight: '900', marginBottom: '5px' }}>TOTAL</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-2px' }}>$14.500</span>
              <span style={{ color: '#00ffa3', fontSize: '12px', fontWeight: 'bold' }}>ARS</span>
            </div>
          </div>

          <button style={{ 
            width: '100%', padding: '20px', background: 'white', color: 'black', 
            border: 'none', borderRadius: '15px', fontWeight: '900', fontSize: '11px',
            cursor: 'pointer', letterSpacing: '2px'
          }}>
            EXECUTE ORDER
          </button>
        </aside>
      </div>
    </div>
  );
}
