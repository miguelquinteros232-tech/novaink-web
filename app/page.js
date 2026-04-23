"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Star, Search, User, Instagram, Facebook, 
  Twitter, Upload, Plus, Minus, Zap, ChevronDown, Flame, Globe
} from 'lucide-react';

export default function NovaInkUltraElite() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  // Colores seguros
  const neonCyan = "#00f0ff";
  const neonMagenta = "#ff00e6";
  const neonYellow = "#ffe600";

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#020005', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background: #020005; }
        .glass-header {
          backdrop-filter: blur(20px);
          background: rgba(2, 0, 5, ${scrolled ? '0.95' : '0.4'});
          transition: all 0.4s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .cosmic-gradient {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-magenta {
          background: ${neonMagenta};
          color: #000;
          transition: 0.3s;
          border: none;
          box-shadow: 0 0 20px ${neonMagenta}40;
        }
        .btn-magenta:hover {
          box-shadow: 0 0 40px ${neonMagenta}70;
          transform: translateY(-2px);
        }
      ` }} />

      {/* STATUS BAR */}
      <div style={{ background: '#000', color: neonYellow, fontSize: '10px', fontWeight: 'bold', letterSpacing: '2px', padding: '12px 0', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 1000, position: 'relative' }}>
        WORLDWIDE SHIPPING • SYSTEM STATUS: ONLINE • [ 2026_ACTIVE ]
      </div>

      {/* HEADER */}
      <header className="glass-header" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            <h1 style={{ fontWeight: '900', fontSize: '24px', letterSpacing: '-1px', margin: 0 }}>
              NOVA<span style={{ color: neonCyan }}>INK</span>
            </h1>
            <nav style={{ display: 'flex', gap: '30px', fontSize: '12px', fontWeight: 'bold', color: '#666', textTransform: 'uppercase' }}>
              <span style={{ color: '#fff' }}>Shop</span>
              <span>Collections</span>
              <span style={{ color: neonYellow }}>Design Lab</span>
            </nav>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Search size={18} />
            <div style={{ position: 'relative' }}>
              <ShoppingCart size={20} color={neonCyan} />
              <div style={{ position: 'absolute', top: '-8px', right: '-8px', background: neonMagenta, color: '#000', fontSize: '10px', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
            </div>
          </div>
        </div>
      </header>

      {/* PRODUCT GRID */}
      <main style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
          
          {/* MEDIA */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', aspectRatio: '1/1.2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Flame size={48} color={neonMagenta} style={{ opacity: 0.2 }} />
          </div>

          {/* INFO */}
          <div>
            <div style={{ marginBottom: '40px' }}>
              <p style={{ color: neonCyan, fontSize: '11px', fontWeight: 'bold', letterSpacing: '3px' }}>EDICIÓN PREMIUM</p>
              <h2 className="cosmic-gradient" style={{ fontSize: '48px', fontWeight: '900', margin: '10px 0', lineHeight: 1 }}>REMERA ALPHA <br/>COSMIC SPLATTER</h2>
              <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>Siente la energía del cosmos en cada hilo. Estampado de alta definición con tecnología reactiva.</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <span style={{ fontSize: '56px', fontWeight: '900' }}>$14.500</span>
              <p style={{ color: neonCyan, fontSize: '13px', fontWeight: 'bold' }}>HASTA 6 CUOTAS SIN INTERÉS</p>
            </div>

            {/* CONFIG */}
            <div style={{ marginBottom: '30px' }}>
              <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#444', marginBottom: '15px' }}>CONFIG_SIZE</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {['S', 'M', 'L', 'XL'].map(t => (
                  <button key={t} onClick={() => setSelectedSize(t)} style={{ padding: '15px 0', background: selectedSize === t ? '#fff' : 'transparent', color: selectedSize === t ? '#000' : '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>{t}</button>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', padding: '5px' }}>
                <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: 'none', border: 'none', color: '#fff', padding: '10px', cursor: 'pointer' }}><Minus size={16}/></button>
                <span style={{ width: '30px', textAlign: 'center', fontWeight: 'bold' }}>{qty}</span>
                <button onClick={() => setQty(qty+1)} style={{ background: 'none', border: 'none', color: '#fff', padding: '10px', cursor: 'pointer' }}><Plus size={16}/></button>
              </div>
              <button className="btn-magenta" style={{ flex: 1, borderRadius: '8px', fontWeight: '900', fontSize: '14px', cursor: 'pointer' }}>
                AÑADIR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '100px 40px 40px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <h3 style={{ fontWeight: '900', letterSpacing: '-1px' }}>NOVA<span style={{ color: neonCyan }}>INK</span></h3>
        <p style={{ color: '#222', fontSize: '10px', marginTop: '20px' }}>© 2026 NOVA INK STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
      </footer>
    </div>
  );
}
