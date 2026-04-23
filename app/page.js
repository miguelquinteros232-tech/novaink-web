"use client";
import React from 'react';
import { Zap, Upload, ChevronRight, BarChart3 } from 'lucide-react';

export default function NovaInk() {
  return (
    <div style={{
      backgroundColor: '#000000', color: 'white', minHeight: '100vh',
      fontFamily: 'Inter, system-ui, sans-serif', padding: '60px 20px',
      display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      
      {/* Header Superior */}
      <header style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#00ffa3', padding: '10px', borderRadius: '12px' }}>
            <Zap size={22} color="black" fill="black" />
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', letterSpacing: '-1.5px', fontStyle: 'italic' }}>
            NOVA<span style={{ fontWeight: '300' }}>INK</span>
          </h1>
        </div>
        <div style={{ color: '#444', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>SYSTEM.ACTIVE</div>
      </header>

      {/* Grid Principal */}
      <div style={{ 
        display: 'flex', gap: '30px', width: '100%', maxWidth: '1200px', flexWrap: 'wrap', justifyContent: 'center' 
      }}>
        
        {/* PANEL 01 CONFIGURATION */}
        <div style={{ 
          flex: '1.5', minWidth: '400px', background: '#0a0a0a', border: '1px solid #151515',
          borderRadius: '45px', padding: '50px'
        }}>
          <h2 style={{ color: '#00ffa3', fontSize: '12px', fontWeight: '900', letterSpacing: '4px', marginBottom: '40px' }}>01 CONFIGURATION</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '50px' }}>
            <button style={{ background: '#00ffa3', color: 'black', border: 'none', padding: '25px', borderRadius: '25px', fontWeight: '900', fontSize: '13px', cursor: 'pointer' }}>REMERAS</button>
            <button style={{ background: '#111', color: '#333', border: '1px solid #1a1a1a', padding: '25px', borderRadius: '25px', fontWeight: '900', fontSize: '13px' }}>GORRAS</button>
            <button style={{ background: '#111', color: '#333', border: '1px solid #1a1a1a', padding: '25px', borderRadius: '25px', fontWeight: '900', fontSize: '13px' }}>TAZAS</button>
          </div>

          <div style={{ 
            height: '240px', border: '2px dashed #1a1a1a', borderRadius: '35px', 
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: '#333', cursor: 'pointer'
          }}>
            <Upload size={32} style={{ marginBottom: '15px' }} />
            <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '1px' }}>DRAG ASSET HERE</span>
          </div>
        </div>

        {/* PANEL ORDER SUMMARY */}
        <aside style={{ 
          flex: '1', minWidth: '350px', background: '#0a0a0a', border: '1px solid #151515',
          borderRadius: '45px', padding: '50px', display: 'flex', flexDirection: 'column'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '45px' }}>
            <BarChart3 size={18} color="#00ffa3" />
            <h3 style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic' }}>ORDER <span style={{color: '#00ffa3'}}>SUMMARY</span></h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #151515', paddingBottom: '20px', marginBottom: '40px' }}>
            <span style={{ fontSize: '10px', color: '#333', fontWeight: '900', letterSpacing: '1px' }}>SELECTED ITEM</span>
            <span style={{ fontSize: '14px', fontWeight: '700' }}>Premium Tee</span>
          </div>

          <div style={{ marginTop: 'auto', marginBottom: '40px' }}>
            <p style={{ fontSize: '10px', color: '#333', fontWeight: '900', letterSpacing: '1px', marginBottom: '10px' }}>TOTAL AMOUNT</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <span style={{ fontSize: '64px', fontWeight: '900', letterSpacing: '-3px' }}>$14.500</span>
              <span style={{ color: '#00ffa3', fontSize: '16px', fontWeight: '900' }}>ARS</span>
            </div>
          </div>

          <button style={{ 
            width: '100%', padding: '28px', background: 'white', color: 'black', 
            border: 'none', borderRadius: '25px', fontWeight: '900', fontSize: '14px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            textTransform: 'uppercase', letterSpacing: '1px'
          }}>
            Execute Order <ChevronRight size={20} />
          </button>
        </aside>

      </div>
    </div>
  );
}
