"use client";
import React, { useState } from 'react';
import { 
  ShoppingCart, ShieldCheck, Truck, RotateCcw, Star, Search, User, 
  Heart, Instagram, Facebook, Twitter, CreditCard, Upload, Plus, Minus, Zap
} from 'lucide-react';

export default function NovaInkSupernova() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);

  const neonCyan = "#00f0ff";
  const neonMagenta = "#ff00e6";
  const neonYellow = "#ffe600";

  return (
    <div style={{ 
      backgroundColor: '#05000a',
      color: '#fff', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background-color: #05000a; }
        .cosmic-bg {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(white, rgba(255,255,255,.05) 1px, transparent 2px);
          background-size: 50px 50px;
          opacity: 0.1; z-index: 0;
        }
        .btn-neon-buy { transition: 0.3s; box-shadow: 0 0 15px rgba(255, 0, 230, 0.4); }
        .btn-neon-buy:hover { box-shadow: 0 0 30px rgba(255, 0, 230, 0.7); transform: translateY(-2px); }
        .cosmic-text {
          background: linear-gradient(90deg, #ffe600 0%, #00f0ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      ` }} />
      
      <div className="cosmic-bg"></div>

      {/* TOP BAR */}
      <div style={{ backgroundColor: '#000', color: neonYellow, padding: '10px', textAlign: 'center', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', borderBottom: `1px solid ${neonCyan}`, position: 'relative', zIndex: 10 }}>
        UNLEASH THE COLOR • ENVÍOS EXPRESS • 15% OFF TRANSFERENCIA
      </div>

      {/* NAVBAR */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0', backgroundColor: 'rgba(5,0,10,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
          <h1 style={{ fontWeight: '900', fontSize: '22px', margin: 0, letterSpacing: '-1px' }}>
            NOVA<span style={{ color: neonCyan }}>INK</span>
          </h1>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', color: '#888' }}>
            <Search size={20} />
            <div style={{ position: 'relative' }}>
              <ShoppingCart size={20} />
              <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '10px', padding: '2px 6px', borderRadius: '50%', fontWeight: '900' }}>{qty}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* PRODUCT CONTENT */}
      <main style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
          
          {/* LEFT: IMAGE */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ color: '#333', fontWeight: '900', letterSpacing: '2px' }}>PREVIEW AREA</span>
            </div>
          </div>

          {/* RIGHT: INFO */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px', textTransform: 'uppercase' }}>
              Remera <span className="cosmic-text">Cosmic Splatter</span>
            </h2>
            
            <div style={{ margin: '30px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '42px', fontWeight: '800' }}>$14.500</span>
                <span style={{ backgroundColor: '#fff', color: '#000', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '900' }}>23% OFF</span>
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div style={{ marginBottom: '30px' }}>
              <p style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1px', marginBottom: '15px' }}>SELECCIONAR TALLE</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['S', 'M', 'L', 'XL'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setSelectedSize(t)}
                    style={{
                      flex: 1, padding: '15px 0', border: selectedSize === t ? `2px solid ${neonCyan}` : '1px solid rgba(255,255,255,0.1)',
                      backgroundColor: selectedSize === t ? 'rgba(0,240,255,0.1)' : 'transparent', color: selectedSize === t ? neonCyan : '#fff',
                      fontWeight: '700', borderRadius: '8px', cursor: 'pointer'
                    }}
                  >{t}</button>
                ))}
              </div>
            </div>

            {/* PERSONALIZATION */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '15px', border: `1px dashed rgba(255,255,255,0.1)`, marginBottom: '30px' }}>
               <h4 style={{ margin: '0 0 10px 0', fontSize: '13px', color: neonYellow }}>🎨 PERSONALIZAR DISEÑO</h4>
               <button style={{ width: '100%', padding: '12px', border: `1px solid ${neonYellow}`, borderRadius: '8px', backgroundColor: 'transparent', color: neonYellow, fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}>
                 SUBIR ARCHIVO
               </button>
            </div>

            {/* CTA BUTTONS */}
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
               <button className="btn-neon-buy" style={{ flex: 1, backgroundColor: neonMagenta, color: '#000', border: 'none', borderRadius: '10px', padding: '20px', fontWeight: '900', textTransform: 'uppercase', cursor: 'pointer' }}>
                  Comprar Ahora
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER SIMPLE PARA EVITAR ERRORES */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '50px' }}>
        <p style={{ color: '#444', fontSize: '12px' }}>© 2026 NOVA INK PREMIUM STUDIO</p>
      </footer>
    </div>
  );
}
