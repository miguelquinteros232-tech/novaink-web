"use client";
import React from 'react';

export default function NovaInkFinal() {
  const neonGreen = "#00ffa3";
  const darkBg = "#050505";
  const cardBg = "#0d0d0d";

  return (
    <div style={{
      backgroundColor: darkBg,
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Luces de fondo (Glow) */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px',
        background: `radial-gradient(circle, ${neonGreen}1a 0%, transparent 70%)`, filter: 'blur(60px)', zIndex: 0
      }}></div>

      <header style={{ width: '100%', maxWidth: '1100px', marginBottom: '60px', zIndex: 1 }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-1px', fontStyle: 'italic' }}>
          NOVA<span style={{ color: neonGreen, fontWeight: '200' }}>INK</span>
        </h1>
      </header>

      <div style={{ 
        display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', 
        width: '100%', maxWidth: '1100px', zIndex: 1 
      }}>
        
        {/* PANEL IZQUIERDO */}
        <div style={{ 
          background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255,255,255,0.1)', 
          padding: '40px', borderRadius: '40px', backdropFilter: 'blur(20px)'
        }}>
          <h2 style={{ fontSize: '11px', color: neonGreen, letterSpacing: '5px', marginBottom: '30px', fontWeight: '900' }}>01 CONFIGURACIÓN</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <button style={{ background: neonGreen, color: 'black', border: 'none', padding: '25px', borderRadius: '20px', fontWeight: '900', fontSize: '12px', cursor: 'pointer', boxShadow: `0 10px 20px ${neonGreen}33` }}>REMERAS</button>
            <button style={{ background: '#151515', color: '#666', border: '1px solid #333', padding: '25px', borderRadius: '20px', fontWeight: '900', fontSize: '12px' }}>GORRAS</button>
            <button style={{ background: '#151515', color: '#666', border: '1px solid #333', padding: '25px', borderRadius: '20px', fontWeight: '900', fontSize: '12px' }}>TAZAS</button>
          </div>

          <div style={{ marginTop: '50px' }}>
            <p style={{ fontSize: '10px', color: '#444', marginBottom: '15px', fontWeight: '900', letterSpacing: '2px' }}>DROP ASSETS</p>
            <div style={{ width: '100%', height: '180px', border: '2px dashed #222', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444', fontSize: '12px', fontWeight: 'bold' }}>
              CARGÁ TU DISEÑO AQUÍ
            </div>
          </div>
        </div>

        {/* PANEL DERECHO (RESUMEN) */}
        <aside style={{ 
          background: 'linear-gradient(180deg, #121212 0%, #050505 100%)', 
          border: '1px solid rgba(255,255,255,0.1)', padding: '40px', 
          borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.8)', height: 'fit-content'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '40px', italic: 'true' }}>ORDER <span style={{color: neonGreen}}>SUMMARY</span></h3>
          
          <div style={{ spaceY: '20px' }}>
            {[
              { label: 'PRODUCTO', val: 'Oversize Tee' },
              { label: 'ESTAMPA', val: 'Digital Pro', color: neonGreen },
              { label: 'TIEMPO', val: '24hs' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', padding: '15px 0' }}>
                <span style={{ fontSize: '9px', color: '#555', fontWeight: '900' }}>{item.label}</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: item.color || 'white' }}>{item.val}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '50px', marginBottom: '40px' }}>
            <p style={{ fontSize: '10px', color: '#555', marginBottom: '10px', fontWeight: '900' }}>TOTAL AMOUNT</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{ fontSize: '48px', fontWeight: '900', letterSpacing: '-2px' }}>$14.500</span>
              <span style={{ color: neonGreen, fontSize: '12px', fontWeight: 'bold' }}>ARS</span>
            </div>
          </div>

          <button style={{ 
            width: '100%', padding: '25px', background: 'white', color: 'black', 
            border: 'none', borderRadius: '20px', fontWeight: '900', fontSize: '12px',
            cursor: 'pointer', transition: '0.3s', letterSpacing: '2px'
          }}>
            EXECUTE ORDER
          </button>
        </aside>
      </div>
    </div>
  );
}
