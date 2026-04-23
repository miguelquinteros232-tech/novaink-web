"use client";
import React from 'react';

export default function NovaInkFinal() {
  return (
    <div style={{
      backgroundColor: '#050505',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Resplandor de fondo (Efecto Trading) */}
      <div style={{
        position: 'fixed',
        top: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        backgroundColor: 'rgba(0, 255, 163, 0.1)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      {/* Header */}
      <header style={{ width: '100%', maxWidth: '1000px', marginBottom: '60px', zIndex: 1 }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-1px' }}>
          NOVA<span style={{ color: '#00ffa3', fontWeight: '200' }}>INK</span>
        </h1>
      </header>

      {/* Grid Principal */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 350px', 
        gap: '30px', 
        width: '100%', 
        maxWidth: '1000px',
        zIndex: 1 
      }}>
        
        {/* Panel de Configuración */}
        <div style={{ 
          background: 'rgba(20, 20, 20, 0.8)', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '40px', 
          borderRadius: '40px',
          backdropFilter: 'blur(20px)'
        }}>
          <h2 style={{ fontSize: '12px', color: '#00ffa3', letterSpacing: '4px', marginBottom: '30px' }}>01 CONFIGURACIÓN</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <button style={{ background: '#00ffa3', color: 'black', border: 'none', padding: '20px', borderRadius: '15px', fontWeight: 'bold' }}>REMERAS</button>
            <button style={{ background: '#1a1a1a', color: '#555', border: '1px solid #333', padding: '20px', borderRadius: '15px' }}>GORRAS</button>
            <button style={{ background: '#1a1a1a', color: '#555', border: '1px solid #333', padding: '20px', borderRadius: '15px' }}>TAZAS</button>
          </div>

          <div style={{ marginTop: '40px' }}>
            <div style={{ width: '100%', height: '150px', border: '2px dashed #333', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
              ARRASTRÁ TU DISEÑO AQUÍ
            </div>
          </div>
        </div>

        {/* Panel de Resumen (El que brilla) */}
        <aside style={{ 
          background: 'linear-gradient(180deg, #151515 0%, #050505 100%)', 
          border: '1px solid rgba(255,255,255,0.1)', 
          padding: '40px', 
          borderRadius: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          height: 'fit-content'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '30px' }}>RESUMEN</h3>
          
          <div style={{ borderBottom: '1px solid #222', paddingBottom: '15px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '10px', color: '#555' }}>PRODUCTO</span>
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Remera Oversize</span>
          </div>

          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <p style={{ fontSize: '10px', color: '#555', marginBottom: '5px' }}>TOTAL</p>
            <span style={{ fontSize: '40px', fontWeight: '900' }}>$14.500</span>
          </div>

          <button style={{ 
            width: '100%', 
            padding: '20px', 
            background: 'white', 
            color: 'black', 
            border: 'none', 
            borderRadius: '15px', 
            fontWeight: '900',
            cursor: 'pointer'
          }}>
            FINALIZAR ORDEN
          </button>
        </aside>
      </div>
    </div>
  );
}
