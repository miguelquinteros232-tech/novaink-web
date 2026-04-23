"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Star, Search, User, Instagram, Facebook, 
  Twitter, Upload, Plus, Minus, Zap, ChevronDown, Flame, Globe
} from 'lucide-react';

export default function NovaInkCosmicDynamic() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);

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
    <div style={{ backgroundColor: '#05010a', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* SISTEMA DE PARTÍCULAS Y ANIMACIONES */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background: #05010a; }
        
        @keyframes floatParticles {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }

        .particle {
          position: fixed; border-radius: 50%; pointer-events: none; z-index: 1;
          filter: blur(2px); animation: floatParticles linear infinite;
        }

        .glass-header {
          backdrop-filter: blur(25px);
          background: rgba(5, 1, 10, ${scrolled ? '0.9' : '0.4'});
          transition: all 0.4s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cosmic-title {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.2));
        }

        .action-button {
          background: ${neonMagenta}; color: #000; font-weight: 900;
          border: none; border-radius: 8px; cursor: pointer; transition: 0.3s;
          box-shadow: 0 0 25px ${neonMagenta}50;
        }
        .action-button:hover { transform: translateY(-3px); box-shadow: 0 0 45px ${neonMagenta}80; }
      ` }} />

      {/* GENERACIÓN DE PARTÍCULAS (Simuladas con Divs) */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i} 
          className="particle"
          style={{
            width: Math.random() * 6 + 'px',
            height: Math.random() * 6 + 'px',
            left: Math.random() * 100 + '%',
            bottom: '-10px',
            backgroundColor: [neonCyan, neonMagenta, neonYellow][i % 3],
            animationDuration: Math.random() * 10 + 10 + 's',
            animationDelay: Math.random() * 5 + 's',
          }}
        />
      ))}

      {/* RESPLANDORES DE COLOR EN EL FONDO (Nebulosas) */}
      <div style={{ position: 'fixed', top: '10%', left: '-5%', width: '600px', height: '600px', background: `radial-gradient(circle, ${neonCyan}15 0%, transparent 70%)`, filter: 'blur(100px)', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', bottom: '10%', right: '-5%', width: '600px', height: '600px', background: `radial-gradient(circle, ${neonMagenta}15 0%, transparent 70%)`, filter: 'blur(100px)', zIndex: 0 }}></div>

      {/* TOP STATUS BAR */}
      <div style={{ background: '#000', color: neonYellow, fontSize: '10px', fontWeight: '900', letterSpacing: '3px', padding: '12px 0', textAlign: 'center', borderBottom: `1px solid ${neonCyan}40`, position: 'relative', zIndex: 1000 }}>
        UNLEASH THE COLOR • CUSTOM LAB ACTIVE • [ 2026_EST ]
      </div>

      {/* NAVIGATION */}
      <header className="glass-header" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '15px 40px' : '25px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            <h1 style={{ fontWeight: '900', fontSize: '24px', letterSpacing: '-1.5px', margin: 0 }}>
              NOVA<span style={{ color: neonCyan }}>INK</span>
            </h1>
            <nav style={{ display: 'flex', gap: '30px', fontSize: '12px', fontWeight: '800', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
              <span style={{ color: '#fff', cursor: 'pointer' }}>Shop</span>
              <span style={{ cursor: 'pointer' }}>Design Lab</span>
              <span style={{ cursor: 'pointer' }}>Drops</span>
            </nav>
          </div>
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Search size={20} color="#666" />
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <ShoppingCart size={22} color={neonCyan} />
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '10px', fontWeight: '900', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1300px', margin: '60px auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px' }}>
          
          {/* PRODUCT VISUALIZER */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.02)', 
              borderRadius: '30px', 
              aspectRatio: '1/1.2', 
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', width: '100%', height: '100%', background: `radial-gradient(circle, ${neonMagenta}10 0%, transparent 70%)` }}></div>
              <Flame size={60} color={neonMagenta} style={{ opacity: 0.3, zIndex: 1 }} />
            </div>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ flex: 1, height: '100px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px' }}></div>
              ))}
            </div>
          </div>

          {/* PURCHASE DETAILS */}
          <div>
            <div style={{ marginBottom: '40px' }}>
              <span style={{ fontSize: '11px', fontWeight: '900', color: neonCyan, letterSpacing: '4px' }}>ALPHA SERIES</span>
              <h2 className="cosmic-title" style={{ fontSize: '56px', fontWeight: '900', margin: '10px 0', lineHeight: 1, letterSpacing: '-2px' }}>
                COSMIC <br/>SPLATTER
              </h2>
              <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.6', marginTop: '20px' }}>
                Transformamos el arte digital en prendas de alta definición. Algodón premium con tecnología de sublimación reactiva.
              </p>
            </div>

            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                <span style={{ fontSize: '60px', fontWeight: '900' }}>$14.500</span>
                <span style={{ color: '#444', textDecoration: 'line-through', fontSize: '22px' }}>$18.900</span>
              </div>
              <p style={{ color: neonCyan, fontWeight: '800', fontSize: '14px', marginTop: '10px' }}>6 CUOTAS SIN INTERÉS DE $2.416</p>
            </div>

            {/* SIZE SELECTOR */}
            <div style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '11px', fontWeight: '900', color: '#555', letterSpacing: '2px', marginBottom: '20px' }}>SELECT_SIZE</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                {['S', 'M', 'L', 'XL'].map(t => (
                  <button 
                    key={t} 
                    onClick={() => setSelectedSize(t)} 
                    style={{ 
                      padding: '20px 0', 
                      background: selectedSize === t ? '#fff' : 'transparent', 
                      color: selectedSize === t ? '#000' : '#fff', 
                      border: selectedSize === t ? 'none' : '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '12px', fontWeight: '900', cursor: 'pointer', transition: '0.2s' 
                    }}
                  >{t}</button>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center' }}>
                <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: 'none', border: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Minus size={18}/></button>
                <span style={{ width: '40px', textAlign: 'center', fontWeight: '900', fontSize: '18px' }}>{qty}</span>
                <button onClick={() => setQty(qty+1)} style={{ background: 'none', border: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Plus size={18}/></button>
              </div>
              <button className="action-button" style={{ flex: 1, fontSize: '15px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Añadir al Carrito
              </button>
            </div>

            {/* DESIGN LAB CALLOUT */}
            <div style={{ marginTop: '50px', padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: `1px dashed ${neonYellow}40` }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <Zap size={20} color={neonYellow} />
                  <span style={{ fontSize: '14px', fontWeight: '900', letterSpacing: '1px' }}>CUSTOM DESIGN LAB</span>
               </div>
               <button style={{ width: '100%', padding: '15px', background: 'transparent', border: `1px solid ${neonYellow}`, color: neonYellow, borderRadius: '10px', fontSize: '12px', fontWeight: '900', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                 <Upload size={16} /> SUBIR TU DISEÑO .PNG
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#000', padding: '80px 40px', marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontWeight: '900', fontSize: '22px', marginBottom: '20px' }}>NOVA<span style={{ color: neonCyan }}>INK</span></h2>
          <p style={{ color: '#444', fontSize: '12px', letterSpacing: '2px' }}>© 2026 NOVA INK PREMIUM STUDIO / UNLEASH THE COLOR</p>
        </div>
      </footer>
    </div>
  );
}
