"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Search, User, Instagram, Facebook, 
  Twitter, Upload, Plus, Minus, Zap, Flame, Globe
} from 'lucide-react';

export default function NovaInkInmersive() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('shop');

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
    <div style={{ 
      backgroundColor: '#03001a',
      color: '#fff', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background: #03001a; }
        
        .stars-bg {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 50px 50px; opacity: 0.05; z-index: 0;
        }

        @keyframes floatParticles {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.9; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .paint-drop {
          position: fixed; border-radius: 50%; pointer-events: none; z-index: 1;
          animation: floatParticles linear infinite;
        }

        .glass-nav {
          backdrop-filter: blur(20px);
          background: rgba(3, 0, 26, ${scrolled ? '0.95' : '0.6'});
          transition: 0.4s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glow-title {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .fade-in-section {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .btn-magenta {
          background: ${neonMagenta}; color: #000; font-weight: 900;
          border: none; border-radius: 12px; cursor: pointer; transition: 0.3s;
          box-shadow: 0 0 20px ${neonMagenta}40;
        }
        .btn-magenta:hover {
          box-shadow: 0 0 40px ${neonMagenta}70;
          transform: translateY(-3px);
        }
      ` }} />
      
      <div className="stars-bg"></div>

      {/* PARTÍCULAS REFORZADAS */}
      {[...Array(50)].map((_, i) => (
        <div 
          key={i} 
          className="paint-drop"
          style={{
            width: Math.random() * 6 + 4 + 'px',
            height: Math.random() * 6 + 4 + 'px',
            left: Math.random() * 100 + '%',
            bottom: '-20px',
            backgroundColor: [neonCyan, neonMagenta, neonYellow][i % 3],
            animationDuration: Math.random() * 12 + 6 + 's',
            animationDelay: Math.random() * 10 + 's',
            boxShadow: `0 0 15px ${[neonCyan, neonMagenta, neonYellow][i % 3]}`
          }}
        />
      ))}

      {/* NEBULOSAS AZULADAS */}
      <div style={{ position: 'fixed', top: '10%', left: '-5%', width: '800px', height: '800px', background: `radial-gradient(circle, #1a00ff15 0%, transparent 70%)`, filter: 'blur(130px)', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', bottom: '10%', right: '-5%', width: '800px', height: '800px', background: `radial-gradient(circle, ${neonMagenta}10 0%, transparent 70%)`, filter: 'blur(130px)', zIndex: 0 }}></div>

      {/* TOP BAR */}
      <div style={{ background: '#000', color: neonYellow, fontSize: '10px', fontWeight: '900', letterSpacing: '4px', padding: '12px 0', textAlign: 'center', borderBottom: `1px solid ${neonCyan}30`, position: 'relative', zIndex: 1000 }}>
        UNLEASH THE COLOR • HIGH DEFINITION APPAREL • EST. 2026
      </div>

      {/* NAVBAR */}
      <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            <h1 style={{ fontWeight: '900', fontSize: '26px', letterSpacing: '-1.5px', margin: 0, cursor: 'pointer' }} onClick={() => setActiveSection('shop')}>
              NOVA<span style={{ color: neonCyan }}>INK</span>
            </h1>
            
            <nav style={{ display: 'flex', gap: '35px', fontSize: '12px', fontWeight: '900', color: '#666', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {['SHOP', 'ABOUT NOVA', 'CUSTOM LAB'].map((item) => (
                <span 
                  key={item} 
                  onClick={() => setActiveSection(item.toLowerCase())}
                  style={{ 
                    color: activeSection === item.toLowerCase() ? '#fff' : '#666', 
                    cursor: 'pointer', transition: '0.3s'
                  }}
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <ShoppingCart size={22} color={neonCyan} />
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '10px', fontWeight: '900', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ maxWidth: '1300px', margin: '60px auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        
        {activeSection === 'shop' && (
          <div className="fade-in-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '30px', aspectRatio: '1/1.2', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Flame size={80} color={neonMagenta} style={{ opacity: 0.3 }} />
            </div>

            <div>
              <span style={{ color: neonCyan, fontWeight: '900', fontSize: '11px', letterSpacing: '5px' }}>EDICIÓN ALPHA</span>
              <h2 className="glow-title" style={{ fontSize: '60px', fontWeight: '900', margin: '15px 0', lineHeight: 1 }}>SPLATTER <br/>COSMIC</h2>
              <p style={{ color: '#888', fontSize: '17px', lineHeight: '1.8', margin: '30px 0' }}>La prenda definitiva para quienes buscan disrupción. Algodón premium con tecnología de estampado de alta definición que brilla en el espectro digital.</p>
              
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '64px', fontWeight: '900' }}>$14.500</span>
                <p style={{ color: neonCyan, fontWeight: '900', marginTop: '10px' }}>HASTA 6 CUOTAS SIN INTERÉS</p>
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '5px' }}>
                  <button onClick={() => setQty(Math.max(1, qty-1))} style={{ border: 'none', background: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Minus size={18}/></button>
                  <span style={{ width: '40px', textAlign: 'center', fontWeight: '900', fontSize: '20px' }}>{qty}</span>
                  <button onClick={() => setQty(qty+1)} style={{ border: 'none', background: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Plus size={18}/></button>
                </div>
                <button className="btn-magenta" style={{ flex: 1, textTransform: 'uppercase', letterSpacing: '2px' }}>Añadir al Carrito</button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'about nova' && (
          <div className="fade-in-section" style={{ textAlign: 'center', maxWidth: '800px', margin: '100px auto' }}>
            <h2 className="glow-title" style={{ fontSize: '50px', fontWeight: '900', marginBottom: '40px' }}>REVOLUCIÓN CÓSMICA</h2>
            <p style={{ fontSize: '20px', color: '#888', lineHeight: '2' }}>No somos una tienda de ropa convencional. Nova Ink es un laboratorio de color. Nacimos en 2026 para romper la monotonía urbana con piezas de sublimación que desafían los límites de la definición y el contraste.</p>
          </div>
        )}

        {activeSection === 'custom lab' && (
          <div className="fade-in-section" style={{ background: 'rgba(255,255,255,0.02)', padding: '80px', borderRadius: '30px', border: `2px dashed ${neonYellow}30`, textAlign: 'center' }}>
            <h2 className="glow-title" style={{ fontSize: '45px', fontWeight: '900', marginBottom: '30px' }}>TU DISEÑO, NUESTRA TINTA</h2>
            <p style={{ color: '#888', marginBottom: '40px', fontSize: '18px' }}>Sube tu arte y lo convertimos en una prenda premium de alta gama.</p>
            <button style={{ padding: '20px 40px', background: 'transparent', border: `2px solid ${neonYellow}`, color: neonYellow, borderRadius: '12px', fontWeight: '900', cursor: 'pointer' }}>
              SUBIR ARCHIVO .PNG
            </button>
          </div>
        )}

      </main>

      <footer style={{ background: '#000', padding: '80px 40px', marginTop: '100px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h3 style={{ fontWeight: '900', fontSize: '22px' }}>NOVA<span style={{ color: neonCyan }}>INK</span></h3>
        <p style={{ color: '#444', fontSize: '11px', marginTop: '20px' }}>© 2026 NOVA INK PREMIUM STUDIO. BUENOS AIRES, ARGENTINA.</p>
      </footer>
    </div>
  );
}
