"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Star, Search, User, Instagram, Facebook, 
  Twitter, Upload, Plus, Minus, Zap, ChevronDown, Flame, Globe
} from 'lucide-react';

export default function NovaInkCosmicFinal() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  const neonCyan = "#00f0ff";
  const neonMagenta = "#ff00e6";
  const neonYellow = "#ffe600";

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#07020d', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background: #07020d; }
        
        @keyframes floatParticles {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .paint-drop {
          position: fixed; border-radius: 2px; pointer-events: none; z-index: 1;
          animation: floatParticles linear infinite;
        }

        .glass-nav {
          backdrop-filter: blur(20px);
          background: rgba(7, 2, 13, ${scrolled ? '0.9' : '0.5'});
          transition: 0.4s;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glow-text {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.3));
        }
      ` }} />

      {/* PARTÍCULAS DE PINTURA EN MOVIMIENTO */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="paint-drop"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            left: Math.random() * 100 + '%',
            bottom: '-20px',
            backgroundColor: [neonCyan, neonMagenta, neonYellow][i % 3],
            animationDuration: Math.random() * 15 + 10 + 's',
            animationDelay: Math.random() * 10 + 's',
            boxShadow: `0 0 10px ${[neonCyan, neonMagenta, neonYellow][i % 3]}`
          }}
        />
      ))}

      {/* NEBULOSAS DE FONDO (SUBIMOS OPACIDAD) */}
      <div style={{ position: 'fixed', top: '15%', left: '-10%', width: '700px', height: '700px', background: `radial-gradient(circle, ${neonCyan}25 0%, transparent 60%)`, filter: 'blur(120px)', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', bottom: '10%', right: '-10%', width: '700px', height: '700px', background: `radial-gradient(circle, ${neonMagenta}20 0%, transparent 60%)`, filter: 'blur(120px)', zIndex: 0 }}></div>

      {/* NAVBAR */}
      <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px' }}>
          <h1 style={{ fontWeight: '900', fontSize: '22px', margin: 0 }}>
            NOVA<span style={{ color: neonCyan }}>INK</span>
          </h1>
          <div style={{ display: 'flex', gap: '25px', fontSize: '11px', fontWeight: '900', letterSpacing: '2px', color: '#888', textTransform: 'uppercase' }}>
            <span style={{ color: '#fff' }}>SHOP</span>
            <span>CUSTOM LAB</span>
            <span>DROPS</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
             <Search size={20} />
             <div style={{ position: 'relative' }}>
                <ShoppingCart size={20} color={neonCyan} />
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '9px', fontWeight: '900', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
             </div>
          </div>
        </div>
      </header>

      {/* MAIN PRODUCT */}
      <main style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px' }}>
          
          {/* IMAGE AREA */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '30px', aspectRatio: '1/1.2', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
             <Flame size={60} color={neonMagenta} style={{ opacity: 0.4 }} />
          </div>

          {/* TEXT AREA */}
          <div>
            <h2 className="glow-text" style={{ fontSize: '50px', fontWeight: '900', margin: 0, lineHeight: 1 }}>REMERA ALPHA <br/>COSMIC SPLATTER</h2>
            
            <div style={{ margin: '40px 0' }}>
              <span style={{ fontSize: '60px', fontWeight: '900' }}>$14.500</span>
              <p style={{ color: neonCyan, fontWeight: '800', fontSize: '14px', marginTop: '10px' }}>6 CUOTAS SIN INTERÉS</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '10px', fontWeight: '900', color: '#555', marginBottom: '15px' }}>SELECT_SIZE</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {['S', 'M', 'L', 'XL'].map(t => (
                  <button key={t} onClick={() => setSelectedSize(t)} style={{ padding: '20px 0', background: selectedSize === t ? '#fff' : 'transparent', color: selectedSize === t ? '#000' : '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontWeight: '900', cursor: 'pointer' }}>{t}</button>
                ))}
              </div>
            </div>

            <button style={{ width: '100%', padding: '20px', background: neonMagenta, border: 'none', borderRadius: '12px', color: '#000', fontWeight: '900', textTransform: 'uppercase', fontSize: '14px', cursor: 'pointer', boxShadow: `0 0 30px ${neonMagenta}50` }}>
              Añadir al Carrito
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
