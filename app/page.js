"use client";
import React from 'react';
import { Zap, Upload, ChevronRight } from 'lucide-react';

export default function NovaInkTerminal() {
  return (
    <main style={{
      backgroundColor: '#050505', color: '#fff', minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif', padding: '40px', display: 'flex',
      flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden'
    }}>
      {/* Glow Efecto Trading */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,163,0.15) 0%, transparent 70%)',
        filter: 'blur(80px)', zIndex: 0
      }}></div>

      <header style={{ width: '100%', maxWidth: '1000px', marginBottom: '50px', zIndex: 10 }}>
        <h1 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1px' }}>
          NOVA<span style={{ color: '#00ffa3', fontWeight: '200' }}>INK</span>
        </h1>
      </header>

      <div style={{ 
        display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px', 
        width: '100%', maxWidth: '1000px', zIndex: 10 
      }}>
        
        <div style={{ 
          background: '#0d0d0e', border: '1px solid rgba(255,255,255,0.05)', 
          padding: '40px', borderRadius: '35px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <p style={{ color: '#00ffa3', fontSize: '10px', fontWeight: '900', letterSpacing: '4px', marginBottom: '30px' }}>01 CONFIGURATION</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <button style={{ background: '#00ffa3', color: '#000', border: 'none', padding: '20px', borderRadius: '18px', fontWeight: '900', cursor: 'pointer' }}>REMERAS</button>
            <button style={{ background: '#151516', color: '#444', border: '1px solid #222', padding: '20px', borderRadius: '18px', fontWeight: '900' }}>GORRAS</button>
            <button style={{ background: '#151516', color: '#444', border: '1px solid #222', padding: '20px', borderRadius: '18px', fontWeight: '900' }}>TAZAS</button>
          </div>
          <div style={{ marginTop: '40px', height: '180px', border: '2px dashed #1a1a1b', borderRadius: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
             <Upload size={24} style={{ marginBottom: '10px' }} />
             <span style={{ fontSize: '11px', fontWeight: 'bold' }}>DRAG ASSET HERE</span>
          </div>
        </div>

        <aside style={{ 
          background: 'linear-gradient(180deg, #111 0%, #050505 100%)', 
          border: '1px solid rgba(255,255,255,0.05)', padding: '35px', 
          borderRadius: '35px', boxShadow: '0 30px 60px rgba(0,0,0,0.7)', height: 'fit-content'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '30px', fontStyle: 'italic' }}>ORDER <span style={{color: '#00ffa3'}}>DETAILS</span></h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1b', paddingBottom: '12px', marginBottom: '40px' }}>
            <span style={{ fontSize: '9px', color: '#444', fontWeight: '900' }}>ASSET CLASS</span>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Oversize Tee</span>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '9px', color: '#444', fontWeight: '900', marginBottom: '5px' }}>ESTIMATED TOTAL</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
              <span style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-2px' }}>$14.500</span>
              <span style={{ color: '#00ffa3', fontSize: '11px', fontWeight: 'bold' }}>ARS</span>
            </div>
          </div>
          <button style={{ width: '100%', padding: '22px', background: '#fff', color: '#000', border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            EXECUTE ORDER <ChevronRight size={16} />
          </button>
        </aside>

      </div>
    </main>
  );
}
