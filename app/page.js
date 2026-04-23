"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, ShieldCheck, Truck, RotateCcw, Star, Search, User, 
  Instagram, Facebook, Twitter, Upload, Plus, Minus, Zap, Globe
} from 'lucide-react';

export default function NovaInkInmersive() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('shop'); // Estado para la navegación

  // Paleta de colores derivada del logo
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

  // Función para las animaciones de fundido al cambiar de sección
  const FadeInSection = ({ children, isActive }) => (
    <div style={{
      opacity: isActive ? 1 : 0,
      transform: isActive ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      pointerEvents: isActive ? 'auto' : 'none',
    }}>
      {children}
    </div>
  );

  return (
    <div style={{ 
      backgroundColor: '#03001a', // AZUL ESPACIAL PROFUNDO
      color: '#fff', 
      minHeight: '100vh', 
      fontFamily: "'Syncopate', sans-serif", // FUENTE FUTURISTA / TECH
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      {/* 🌌 CSS DE PARTÍCULAS Y ANIMACIONES 🌌 */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');
        
        body { margin: 0; padding: 0; background: #03001a; }
        
        /* Patrón de estrellas de fondo sutil */
        .stars-bg {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(white, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 50px 50px; opacity: 0.05; zIndex: 0;
        }

        /* Gotas de tinta cósmica en movimiento (Llamativas) */
        @keyframes floatParticles {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        .paint-drop {
          position: fixed; border-radius: 2px; pointer-events: none; zIndex: 1;
          animation: floatParticles linear infinite;
        }

        /* Navegación de Cristal */
        .glass-nav {
          backdrop-filter: blur(25px);
          background: rgba(3, 0, 26, ${scrolled ? '0.9' : '0.5'});
          transition: 0.4s;
          border-bottom: 1px solid rgba(255, 255, 255, ${scrolled ? '0.1' : '0.05'});
        }

        /* Texto Cósmico de Nova Ink */
        .glow-title {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.2));
        }

        /* Botón de compra con Glow Pulso */
        .btn-magenta {
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: ${neonMagenta}; color: #000; font-weight: 900;
          box-shadow: 0 0 15px ${neonMagenta}40;
        }
        .btn-magenta:hover {
          box-shadow: 0 0 40px ${neonMagenta}70, 0 0 70px ${neonMagenta}40;
          transform: translateY(-3px) scale(1.02);
        }
      ` }} />
      
      <div className="stars-bg"></div>

      {/* 🔴 GENERACIÓN DE 60 PARTÍCULAS LLAMATIVAS 🔴 */}
      {[...Array(60)].map((_, i) => (
        <div 
          key={i} 
          className="paint-drop"
          style={{
            width: Math.random() * 5 + 3 + 'px',
            height: Math.random() * 5 + 3 + 'px',
            left: Math.random() * 100 + '%',
            bottom: '-20px',
            backgroundColor: [neonCyan, neonMagenta, neonYellow][i % 3],
            animationDuration: Math.random() * 15 + 8 + 's',
            animationDelay: Math.random() * 12 + 's',
            boxShadow: `0 0 10px ${[neonCyan, neonMagenta, neonYellow][i % 3]}`
          }}
        />
      ))}

      {/* Luces de Nebulosa Sutiles de fondo */}
      <div style={{ position: 'fixed', top: '20%', left: '-10%', width: '700px', height: '700px', background: `radial-gradient(circle, ${neonCyan}10 0%, transparent 70%)`, filter: 'blur(120px)', zIndex: 0 }}></div>
      <div style={{ position: 'fixed', bottom: '10%', right: '-10%', width: '700px', height: '700px', background: `radial-gradient(circle, ${neonMagenta}10 0%, transparent 70%)`, filter: 'blur(120px)', zIndex: 0 }}></div>

      {/* 1. STATUS BAR ELÉCTRICO */}
      <div style={{ background: '#000', color: neonYellow, fontSize: '11px', fontWeight: 'bold', letterSpacing: '3px', padding: '12px 0', textAlign: 'center', borderBottom: `1px solid ${neonCyan}30`, position: 'relative', zIndex: 1000 }}>
        <Zap size={14} style={{verticalAlign: 'middle', marginRight: '8px'}}/> UNLEASH THE COLOR • CUSTOM LAB ACTIVE • WORLDWIDE SHIPPING <Zap size={14} style={{verticalAlign: 'middle', marginLeft: '8px'}}/>
      </div>

      {/* 2. NAVEGACIÓN DE ALTO NIVEL (De Cristal) */}
      <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            {/* AQUÍ VA TU LOGO FANTÁSTICO */}
            <img src="/logo_novaink.png" alt="Nova Ink Logo" style={{ height: '70px', marginTop: '-10px', filter: 'drop-shadow(0 0 10px rgba(255,230,0,0.4))' }} />
            
            {/* MENÚ INTERACTIVO */}
            <nav style={{ display: 'flex', gap: '30px', fontSize: '13px', fontWeight: 'bold', color: '#888', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {['SHOP', 'ABOUT NOVA', 'CUSTOM LAB', 'DROPS'].map((item) => (
                <span 
                  key={item} 
                  onClick={() => setActiveSection(item.toLowerCase())} // Cambiamos de sección
                  style={{ 
                    color: activeSection === item.toLowerCase() ? '#fff' : '#888', 
                    cursor: 'pointer', 
                    transition: '0.3s',
                    position: 'relative'
                  }}
                  className="hover:text-cyan"
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div style={{position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '2px', background: neonCyan, boxShadow: `0 0 10px ${neonCyan}`}}></div>
                  )}
                </span>
              ))}
            </nav>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', color: '#666' }}>
            <Search size={20} className="hover:text-cyan" style={{cursor: 'pointer'}} />
            <div style={{ position: 'relative', cursor: 'pointer' }} className="hover:text-magenta">
              <ShoppingCart size={22} color={neonCyan} />
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '10px', fontWeight: '900', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. CONTENIDO INTERACTIVO POR SECCIONES */}
      <main style={{ maxWidth: '1400px', margin: '60px auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        
        {/* === SECCIÓN SHOP (Predefinida) === */}
        <FadeInSection isActive={activeSection === 'shop'}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px' }}>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '30px', aspectRatio: '1/1.2', border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)'
            }}>
               {/* Pre visualizador Cósmico de Prenda */}
               <Flame size={80} color={neonMagenta} style={{ opacity: 0.3 }} />
            </div>

            {/* INFO DE COMPRA */}
            <div>
              <div style={{ marginBottom: '40px' }}>
                <span style={{ fontSize: '12px', color: neonCyan, fontWeight: 'bold', letterSpacing: '4px' }}>ALPHA EDITION</span>
                <h2 className="glow-title" style={{ fontSize: '56px', fontWeight: '900', margin: '15px 0', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-2px' }}>Remera <span style={{ color: neonYellow }}>Splatter</span> Cosmic</h2>
                <p style={{ color: '#aaa', fontSize: '16px', lineHeight: '1.7', marginTop: '20px' }}>Descubre la explosión de color cósmico. Nuestra Remera Alpha combina algodón premium con estampados de alta definición reactivos. UNLEASH THE COLOR.</p>
              </div>

              <div style={{ marginBottom: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                  <span style={{ fontSize: '64px', fontWeight: '900', color: '#fff' }}>$14.500</span>
                  <span style={{ color: '#444', textDecoration: 'line-through', fontSize: '24px' }}>$18.900</span>
                </div>
                <p style={{ color: neonCyan, fontSize: '14px', fontWeight: '900', marginTop: '10px' }}>o 6 cuotas sin interés de <b>$2.416</b> con Mercado Pago</p>
              </div>

              {/* SELECCIÓN DE TALLES */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#555', marginBottom: '20px' }}>CONFIGURAR TALLE</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                  {['S', 'M', 'L', 'XL'].map(t => (
                    <button key={t} onClick={() => setSelectedSize(t)} style={{ padding: '20px 0', border: selectedSize === t ? `2px solid ${neonCyan}` : '1px solid rgba(255,255,255,0.1)', backgroundColor: selectedSize === t ? 'rgba(0,240,255,0.1)' : 'rgba(255,255,255,0.02)', color: selectedSize === t ? neonCyan : '#fff', fontWeight: 'bold', borderRadius: '12px', cursor: 'pointer', transition: '0.3s' }}>{t}</button>
                  ))}
                </div>
              </div>

              {/* BOTONES DE COMPRA */}
              <div style={{ display: 'flex', gap: '15px' }}>
                 <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '5px' }}>
                    <button onClick={() => setQty(Math.max(1, qty-1))} style={{ border: 'none', background: 'none', padding: '15px', color: '#888', cursor: 'pointer' }}><Minus size={18}/></button>
                    <span style={{ padding: '0 20px', fontWeight: '900', fontSize: '20px' }}>{qty}</span>
                    <button onClick={() => setQty(qty+1)} style={{ border: 'none', background: 'none', padding: '15px', color: '#888', cursor: 'pointer' }}><Plus size={18}/></button>
                 </div>
                 <button className="btn-magenta" style={{ flex: 1, padding: '20px', borderRadius: '12px', fontWeight: '900', textTransform: 'uppercase', fontSize: '15px', letterSpacing: '2px', cursor: 'pointer', border: 'none' }}>
                    Añadir al Carrito Cósmico
                 </button>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* === SECCIÓN ABOUT NOVA (Interactiva) === */}
        <FadeInSection isActive={activeSection === 'about nova'}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '100px auto' }}>
            <Zap size={60} color={neonYellow} style={{marginBottom: '30px', filter: 'drop-shadow(0 0 10px ${neonYellow})'}} />
            <h2 className="glow-title" style={{fontSize: '56px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 1, marginBottom: '40px'}}>Nosotros somos <br/>NOVA INK</h2>
            <p style={{fontSize: '18px', color: '#aaa', lineHeight: '1.9', marginBottom: '50px'}}>Nova Ink nació bajo la premisa de la disrupción: ¿Por qué la ropa tiene que ser aburrida? <br/>Transformamos la tinta en energía pura. Somos un estudio de sublimación y estampado de alto nivel dedicado a crear prendas que son verdaderas explosiones de color y diseño. No hacemos remeras, creamos piezas de arte cósmico para una generación que no le teme a destacar.</p>
            <span style={{ color: neonCyan, fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px'}}>#UnleashTheColor</span>
          </div>
        </FadeInSection>

        {/* === SECCIÓN CUSTOM LAB (Interactiva) === */}
        <FadeInSection isActive={activeSection === 'custom lab'}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '80px', borderRadius: '30px', border: `2px dashed rgba(255,255,255,0.08)`, display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                  <Flame size={24} color={neonMagenta} />
                  <span style={{ color: neonMagenta, fontSize: '12px', fontWeight: 'bold', letterSpacing: '4px'}}>ALPHA DESIGN LAB V2.0</span>
              </div>
              <h2 className="glow-title" style={{fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-2px', lineHeight: 1, marginBottom: '30px'}}>UNLEASH <span style={{ color: neonYellow }}>YOUR</span> DESIGN</h2>
              <p style={{color: '#aaa', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px'}}>Nuestra tecnología de sublimación reactiva te permite estampar lo que quieras con una definición que no creerás. Subí tu logo, tu arte o tu idea cósmica en PNG o JPG y nosotros nos encargamos de convertirlo en una prenda premium que no se siente al tacto y resiste lavados infinitos.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
               <button style={{ width: '100%', padding: '20px', border: `2px solid ${neonYellow}`, backgroundColor: 'transparent', color: neonYellow, fontWeight: '900', borderRadius: '15px', cursor: 'pointer', transition: '0.3s', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px'}} className="hover:bg-yellow hover:text-black">
                 <Upload size={18} style={{marginRight: '10px'}}/> Subir tu Diseño Cósmico
               </button>
               <p style={{fontSize: '11px', color: '#555', marginTop: '15px'}}>Formatos: PNG, JPG (Máx. 15MB)</p>
            </div>
          </div>
        </FadeInSection>

      </main>

      {/* 4. FOOTER CÓSMICO */}
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '100px 40px 40px', borderTop: `1px solid rgba(255,255,255,0.05)`, marginTop: '100px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
          <div>
            {/* Logo en el Footer brillando sutilmente */}
            <img src="/logo_novaink.png" alt="Nova Ink Logo" style={{ height: '60px', marginBottom: '25px', filter: 'drop-shadow(0 0 8px rgba(255,230,0,0.3))' }} />
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.7', marginBottom: '30px' }}>Líderes en sublimación galáctica y estampados disruptivos. Nova Ink es para los que no temen destacar.</p>
            <div style={{ display: 'flex', gap: '20px', color: '#444' }}>
              <Instagram size={20} className="hover:text-magenta" /> <Facebook size={20} className="hover:text-cyan" /> <Twitter size={20} className="hover:text-yellow" />
            </div>
          </div>
          <div>
            <h6 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', color: '#fff' }}>EXPLORAR</h6>
            <ul style={{ listStyle: 'none', padding: 0, color: '#888', fontSize: '13px', lineHeight: '2.8' }}>
              <li>Remeras Cósmicas</li>
              <li>Custom Design Lab</li>
              <li>Últimos Drops</li>
              <li>Colección Invierno</li>
            </ul>
          </div>
          <div>
            <h6 style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', color: '#fff' }}>SOPORTE</h6>
            <ul style={{ listStyle: 'none', padding: 0, color: '#888', fontSize: '13px', lineHeight: '2.8' }}>
              <li>Envíos y Seguimiento</li>
              <li>Términos Cósmicos</li>
              <li>Preguntas Frecuentes (FAQ)</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1400px', margin: '60px auto 0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', textAlign: 'center', fontSize: '12px', color: '#333' }}>
          © 2026 NOVA INK PREMIUM STUDIO. TODOS LOS DERECHOS RESERVADOS. UNLEASH THE COLOR.
        </div>
      </footer>
    </div>
  );
}
