"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Star, Search, User, Instagram, Facebook, 
  Twitter, Upload, Plus, Minus, Zap, Flame, Globe, ChevronDown, MessageSquare
} from 'lucide-react';

export default function NovaInkFullPlatform() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todas');

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

  const categories = ['Todas', 'Remeras', 'Tazas', 'Gorras', 'Almohadones', 'Vasos'];

  return (
    <div style={{ backgroundColor: '#03001a', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background: #03001a; scroll-behavior: smooth; }
        .stars-bg {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(white, rgba(255,255,255,.05) 1px, transparent 1px);
          background-size: 60px 60px; opacity: 0.1; z-index: 0;
        }
        @keyframes floatParticles {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.7; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .paint-drop {
          position: fixed; border-radius: 50%; pointer-events: none; z-index: 1;
          animation: floatParticles linear infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: 0.4s;
        }
        .glass-card:hover {
          border-color: ${neonCyan};
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
        }
        .glow-title {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-link {
          cursor: pointer; font-size: 11px; font-weight: 800; letter-spacing: 2px;
          color: #777; transition: 0.3s;
        }
        .nav-link:hover { color: ${neonCyan}; }
      ` }} />
      
      <div className="stars-bg"></div>

      {/* PARTÍCULAS DINÁMICAS */}
      {[...Array(40)].map((_, i) => (
        <div key={i} className="paint-drop" style={{
          width: Math.random() * 5 + 3 + 'px', height: Math.random() * 5 + 3 + 'px',
          left: Math.random() * 100 + '%', bottom: '-20px',
          backgroundColor: [neonCyan, neonMagenta, neonYellow][i % 3],
          animationDuration: Math.random() * 10 + 10 + 's',
          animationDelay: Math.random() * 10 + 's',
          boxShadow: `0 0 15px ${[neonCyan, neonMagenta, neonYellow][i % 3]}70`
        }} />
      ))}

    {/* NAVBAR CON LOGO REAL */}
<header style={{ 
  position: 'sticky', top: 0, zIndex: 1000, 
  background: scrolled ? 'rgba(3, 0, 26, 0.95)' : 'transparent',
  borderBottom: scrolled ? `1px solid rgba(255,255,255,0.1)` : 'none',
  backdropFilter: 'blur(20px)', transition: '0.4s'
}}>
  <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 40px' }}>
    
    {/* CONTENEDOR DEL LOGO */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <img 
        src="/logo_novaink.png" 
        alt="Nova Ink Logo" 
        style={{ 
          height: '65px', // Ajusta este tamaño según prefieras
          width: 'auto',
          filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))', // Le da un aura de neón
          cursor: 'pointer'
        }}
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      />
      
      <nav style={{ display: 'flex', gap: '30px' }}>
        {['INICIO', 'PRODUCTOS', 'LABORATORIO'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ textDecoration: 'none' }}>{item}</a>
        ))}
      </nav>
    </div>

    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ position: 'relative', cursor: 'pointer' }}>
        <ShoppingCart size={22} color={neonCyan} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '10px', fontWeight: '900', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
      </div>
    </div>
  </div>
</header>

      {/* 1. HERO SECTION (PRESENTACIÓN) */}
      <section id="inicio" style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: `radial-gradient(circle, ${neonCyan}10 0%, transparent 60%)`, filter: 'blur(100px)', zIndex: -1 }}></div>
        <h2 className="glow-title" style={{ fontSize: 'clamp(40px, 8vw, 90px)', fontWeight: '900', lineHeight: 0.9, margin: 0, letterSpacing: '-4px' }}>
          REINVENTANDO <br/>EL ESTILO DIGITAL
        </h2>
        <p style={{ maxWidth: '700px', fontSize: '18px', color: '#888', lineHeight: '1.6', marginTop: '30px', fontWeight: '500' }}>
          Desde remeras premium y gorras exclusivas hasta tazas y almohadones con arte galáctico. En Nova Ink transformamos objetos cotidianos en piezas de colección con tecnología de sublimación reactiva.
        </p>
        <a href="#productos" style={{ marginTop: '50px', padding: '20px 45px', background: neonMagenta, color: '#000', fontWeight: '900', borderRadius: '50px', textDecoration: 'none', fontSize: '14px', letterSpacing: '1px', boxShadow: `0 10px 40px ${neonMagenta}40`, transition: '0.3s' }}>
          EXPLORAR CATÁLOGO
        </a>
        <ChevronDown size={30} color={neonCyan} style={{ marginTop: '80px', animation: 'bounce 2s infinite' }} />
      </section>

      {/* 2. SECCIÓN DE PRODUCTOS Y CATEGORÍAS */}
      <section id="productos" style={{ maxWidth: '1400px', margin: '100px auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ color: neonCyan, fontWeight: '900', letterSpacing: '5px', fontSize: '11px' }}>EXPLORA NUESTRO UNIVERSO</span>
          <h3 style={{ fontSize: '40px', fontWeight: '900', marginTop: '10px' }}>EQUIPAMIENTO CÓSMICO</h3>
          
          {/* FILTRO DE CATEGORÍAS */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: '10px 25px', borderRadius: '30px', border: activeCategory === cat ? `1px solid ${neonCyan}` : '1px solid rgba(255,255,255,0.1)',
                background: activeCategory === cat ? 'rgba(0,240,255,0.1)' : 'transparent', color: activeCategory === cat ? neonCyan : '#555',
                fontWeight: '800', cursor: 'pointer', transition: '0.3s', fontSize: '12px'
              }}>{cat}</button>
            ))}
          </div>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[1, 2, 3].map(item => (
            <div key={item} className="glass-card" style={{ padding: '20px' }}>
              <div style={{ width: '100%', aspectRatio: '1/1', background: 'rgba(255,255,255,0.03)', borderRadius: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Flame size={40} color={neonMagenta} style={{ opacity: 0.2 }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '900' }}>Remera Alpha V{item}</h4>
                  <p style={{ fontSize: '12px', color: '#555', marginTop: '5px' }}>Sublimación reactiva de alta densidad.</p>
                </div>
                <span style={{ color: neonYellow, fontWeight: '900' }}>$14.500</span>
              </div>
              
              {/* RATING Y COMENTARIOS */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px' }}>
                <div style={{ display: 'flex', color: neonYellow }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < 4 ? neonYellow : 'none'} />)}
                </div>
                <span style={{ fontSize: '10px', color: '#444', fontWeight: 'bold' }}>(12 Opiniones)</span>
              </div>
              
              <button style={{ width: '100%', marginTop: '20px', padding: '15px', border: 'none', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: '900', cursor: 'pointer' }}>VER DETALLES</button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LABORATORIO DE DISEÑO (CARGA TU DISEÑO) */}
      <section id="laboratorio" style={{ maxWidth: '1200px', margin: '150px auto', padding: '0 40px' }}>
        <div className="glass-card" style={{ padding: '80px', textAlign: 'center', border: `2px dashed ${neonCyan}30` }}>
          <Zap size={50} color={neonYellow} style={{ marginBottom: '30px' }} />
          <h3 className="glow-title" style={{ fontSize: '45px', fontWeight: '900', margin: 0 }}>NOVA CUSTOM LAB</h3>
          <p style={{ color: '#888', maxWidth: '600px', margin: '20px auto 40px' }}>
            ¿Tienes una idea? Nosotros la materializamos. Sube tu diseño y elige el producto: remeras, tazas, fundas y más. Calidad industrial a tu alcance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button style={{ padding: '20px 40px', borderRadius: '12px', background: neonCyan, color: '#000', fontWeight: '900', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Upload size={20} /> SUBIR DISEÑO (.PNG / .JPG)
            </button>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer style={{ background: '#000', padding: '80px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontWeight: '900' }}>NOVA<span style={{ color: neonCyan }}>INK</span></h2>
          <p style={{ color: '#444', fontSize: '12px', marginTop: '20px' }}>© 2026 UNLEASH THE COLOR. PREMIUM SUBLIMATION STUDIO.</p>
        </div>
      </footer>

      {/* ANIMATION KEYFRAMES */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
          40% {transform: translateY(-20px) translateX(-50%);}
          60% {transform: translateY(-10px) translateX(-50%);}
        }
      ` }} />
    </div>
  );
}
