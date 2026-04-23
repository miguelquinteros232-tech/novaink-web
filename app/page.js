"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, ShieldCheck, Truck, RotateCcw, Star, Search, User, 
  Instagram, Facebook, Twitter, Upload, Plus, Minus, Zap,
  ChevronDown, Award, Flame
} from 'lucide-react';

export default function NovaInkElite() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  const neonCyan = "#00f0ff";
  const neonMagenta = "#ff00e6";
  const neonYellow = "#ffe600";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#020005',
      color: '#fff', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background: #020005; }
        .glass-nav {
          backdrop-filter: blur(15px);
          background: rgba(2, 0, 5, ${scrolled ? '0.9' : '0.5'});
          transition: all 0.4s ease;
        }
        .neon-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: 0.3s;
        }
        .neon-card:hover {
          border-color: ${neonCyan};
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
        }
        .cosmic-text {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      ` }} />

      {/* TOP BAR */}
      <div style={{ background: '#000', color: neonYellow, fontSize: '10px', fontWeight: '900', letterSpacing: '2px', padding: '10px 0', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1000 }}>
        SISTEMA ACTIVO: DESCUENTO DEL 15% EN TODA LA COLECCIÓN • [ 02:45:12 ]
      </div>

      {/* NAVBAR */}
      <nav className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 900, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            <h1 style={{ fontWeight: '900', fontSize: '24px', letterSpacing: '-1px', margin: 0 }}>
              NOVA<span style={{ color: neonCyan }}>INK</span>
            </h1>
            <div style={{ display: 'flex', gap: '25px', fontSize: '12px', fontWeight: '700', color: '#666', textTransform: 'uppercase' }}>
              <span>Catálogo</span>
              <span style={{ color: neonYellow }}>Custom Lab</span>
              <span>Colecciones</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Search size={18} />
            <div style={{ position: 'relative' }}>
              <ShoppingCart size={20} color={neonCyan} />
              <div style={{ position: 'absolute', top: '-8px', right: '-8px', background: neonMagenta, color: '#000', fontSize: '10px', fontWeight: '900', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
          
          {/* VISUALIZER */}
          <div>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.01)', 
              borderRadius: '25px', 
              aspectRatio: '1/1.2', 
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Flame size={40} color={neonMagenta} style={{ opacity: 0.3 }} />
            </div>
          </div>

          {/* PURCHASE INFO */}
          <div>
            <div style={{ background: 'rgba(0,240,255,0.1)', color: neonCyan, padding: '5px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: '900', display: 'inline-block', marginBottom: '15px' }}>EDICIÓN LIMITADA</div>
            <h2 className="cosmic-text" style={{ fontSize: '42px', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1 }}>REMERA ALPHA <br/>COSMIC SPLATTER</h2>
            
            <div style={{ margin: '40px 0' }}>
              <span style={{ fontSize: '50px', fontWeight: '900' }}>$14.500</span>
              <p style={{ color: neonCyan, fontSize: '13px', fontWeight: '800', marginTop: '10px' }}>6 CUOTAS SIN INTERÉS</p>
            </div>

            {/* SIZES */}
            <div style={{ marginBottom: '35px' }}>
              <p style={{ fontSize: '11px', fontWeight: '900', color: '#444', marginBottom: '15px' }}>CONFIGURAR TALLE</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {['S', 'M', 'L', 'XL'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setSelectedSize(t)}
                    style={{
                      padding: '15px 0',
                      background: selectedSize === t ? '#fff' : 'transparent',
                      color: selectedSize === t ? '#000' : '#fff',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      fontWeight: '900',
                      cursor: 'pointer'
                    }}
                  >{t}</button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button style={{ width: '100%', padding: '20px', background: neonMagenta, border: 'none', borderRadius: '12px', color: '#000', fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', cursor: 'pointer', boxShadow: `0 0 20px ${neonMagenta}40` }}>
              Añadir al Carrito
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#000', padding: '80px 40px', marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontWeight: '900', fontSize: '20px', marginBottom: '20px' }}>NOVA<span style={{ color: neonCyan }}>INK</span></h3>
          <p style={{ color: '#333', fontSize: '12px' }}>© 2026 PREMIUM STUDIO / UNLEASH THE COLOR</p>
        </div>
      </footer>
    </div>
  );
}
