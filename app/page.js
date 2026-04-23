"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, ShieldCheck, Truck, RotateCcw, Star, Search, User, 
  Heart, Instagram, Facebook, Twitter, CreditCard, Upload, Plus, Minus, Zap,
  ChevronDown, LayoutGrid, Award, Flame
} from 'lucide-react';

export default function NovaInkElite() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  // Colores extraídos de tu logo
  const neonCyan = "#00f0ff";
  const neonMagenta = "#ff00e6";
  const neonYellow = "#ffe600";

  // Efecto para la navegación al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      backgroundColor: '#020005', // Más profundo aún
      color: '#fff', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        .glass-nav {
          backdrop-filter: blur(15px);
          background: rgba(2, 0, 5, ${scrolled ? '0.85' : '0.4'});
          transition: all 0.4s ease;
        }
        .neon-border-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        .neon-border-card:hover {
          border-color: ${neonCyan};
          box-shadow: 0 0 20px ${neonCyan}20;
          transform: translateY(-5px);
        }
        .cosmic-gradient-text {
          background: linear-gradient(135deg, ${neonYellow} 0%, #fff 50%, ${neonCyan} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glow-button-magenta {
          background: ${neonMagenta};
          box-shadow: 0 0 15px ${neonMagenta}40;
          transition: all 0.3s ease;
        }
        .glow-button-magenta:hover {
          box-shadow: 0 0 30px ${neonMagenta}80;
          filter: brightness(1.1);
        }
      ` }} />
      
      {/* Luces de fondo (Atmósfera) */}
      <div style={{ position: 'fixed', top: '-10%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: `radial-gradient(circle, ${neonMagenta}15 0%, transparent 70%)`, filter: 'blur(100px)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'fixed', bottom: '0', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: `radial-gradient(circle, ${neonCyan}10 0%, transparent 70%)`, filter: 'blur(100px)', pointerEvents: 'none' }}></div>

      {/* 1. BARRA SUPERIOR DINÁMICA */}
      <div style={{ background: '#000', color: neonYellow, fontSize: '10px', fontWeight: '900', letterSpacing: '2px', padding: '8px 0', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1000 }}>
        <span style={{ opacity: 0.8 }}>● SISTEMA ACTIVO:</span> DESCUENTO DEL 15% EN TODA LA COLECCIÓN COSMIC SPLATTER <span style={{ color: '#fff' }}>[ 02:45:12 ]</span>
      </div>

      {/* 2. NAVEGACIÓN ELITE */}
      <nav className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 900, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '15px 40px' : '25px 40px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
            <h1 style={{ fontWeight: '900', fontSize: '24px', letterSpacing: '-1.5px', margin: 0 }}>
              NOVA<span style={{ color: neonCyan }}>INK</span>
            </h1>
            
            {/* Categorías Sophisticated */}
            <div style={{ display: 'flex', gap: '30px' }}>
              {['Catálogo', 'Custom Lab', 'Colecciones', 'Soporte'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', color: '#aaa' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>
                  {item} {item !== 'Custom Lab' && <ChevronDown size={14} />}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 15px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Search size={16} color="#666" />
              <input placeholder="Buscar en el cosmos..." style={{ background: 'none', border: 'none', color: '#fff', fontSize: '12px', outline: 'none', width: '150px' }} />
            </div>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <ShoppingCart size={20} color={neonCyan} />
              <div style={{ position: 'absolute', top: '-8px', right: '-8px', background: neonMagenta, color: '#000', fontSize: '10px', fontWeight: '900', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. MAIN PRODUCT INTERFACE */}
      <main style={{ maxWidth: '1400px', margin: '60px auto', padding: '0 40px' }}>
        
        {/* Breadcrumb minimalista */}
        <div style={{ fontSize: '11px', color: '#444', marginBottom: '40px', fontWeight: '700', letterSpacing: '1px' }}>
          HOME / CATÁLOGO / REMERAS / <span style={{ color: neonCyan }}>COSMIC-SPLATTER-01</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '100px' }}>
          
          {/* VISUALIZER SIDE */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', color: 'rgba(255,255,255,0.02)', fontSize: '120px', fontWeight: '900', zIndex: 0, pointerEvents: 'none' }}>ALPHA</div>
            
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.01)', 
              borderRadius: '30px', 
              aspectRatio: '1/1.2', 
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)'
            }}>
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <Flame size={48} color={neonMagenta} style={{ marginBottom: '20px', opacity: 0.5 }} />
                <p style={{ color: '#222', fontWeight: '900', letterSpacing: '10px', fontSize: '20px' }}>3D PREVIEW</p>
              </div>
            </div>

            {/* Selector de vistas secundario */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
              {[1, 2, 3].map(i => (
                <div key={i} className="neon-border-card" style={{ flex: 1, height: '120px', borderRadius: '15px', cursor: 'pointer' }}></div>
              ))}
            </div>
          </div>

          {/* PURCHASE SIDE */}
          <div>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{ background: 'rgba(0,240,255,0.1)', color: neonCyan, padding: '5px 12px', borderRadius: '4px', fontSize: '10px', fontWeight: '900', border: `1px solid ${neonCyan}30` }}>NUEVA EDICIÓN</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: neonYellow }}>
                  <Star size={14} fill="currentColor" />
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#fff' }}>4.9</span>
                </div>
              </div>
              <h2 className="cosmic-gradient-text" style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 20px 0', lineHeight: 1, letterSpacing: '-2px' }}>
                REMERA COSMIC <br/>SPLATTER ALPHA
              </h2>
              <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.6', maxWidth: '450px' }}>
                Nuestra prenda insignia. Algodón de gramaje pesado con terminación en seda y estampado reactivo que brilla bajo luz UV.
              </p>
            </div>

            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                <span style={{ fontSize: '56px', fontWeight: '900' }}>$14.500</span>
                <span style={{ fontSize: '18px', color: '#444', textDecoration: 'line-through' }}>$18.900</span>
              </div>
              <p style={{ color: neonCyan, fontSize: '13px', fontWeight: '800', marginTop: '5px' }}>
                6 CUOTAS SIN INTERÉS DE $2.416
              </p>
            </div>

            {/* Talles Sophisticated */}
            <div style={{ marginBottom: '40px' }}>
              <p style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '2px', color: '#555', marginBottom: '20px' }}>SELECT CONFIGURATION [SIZE]</p>
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
                      borderRadius: '12px',
                      fontWeight: '900',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >{t}</button>
                ))}
              </div>
            </div>

            {/* Lab / Personalización */}
            <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Zap size={18} color={neonYellow} />
                  <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '1px' }}>CUSTOM LAB</span>
                </div>
                <span style={{ fontSize: '10px', color: '#555' }}>V 2.0.4</span>
              </div>
              <button style={{ width: '100%', padding: '15px', background: 'transparent', border: `1px solid ${neonYellow}40`, color: neonYellow, borderRadius: '12px', fontSize: '12px', fontWeight: '900', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }} onMouseEnter={(e) => e.target.style.background = `${neonYellow}10`}>
                <Upload size={16} /> SUBIR ASSET DE DISEÑO
              </button>
            </div>

            {/* Acciones de compra */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '5px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: 'none', border: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Minus size={16}/></button>
                <span style={{ width: '30px', textAlign: 'center', fontWeight: '900' }}>{qty}</span>
                <button onClick={() => setQty(qty+1)} style={{ background: 'none', border: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Plus size={16}/></button>
              </div>
              <button className="glow-button-magenta" style={{ flex: 1, border: 'none', borderRadius: '12px', color: '#000', fontWeight: '900', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>
                Añadir al Carrito de Compra
              </button>
            </div>
          </div>
        </div>

        {/* 4. TRUST SECTION (ELITE STYLE) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginTop: '120px', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {[
            { icon: Truck, title: "Envío Prioritario", desc: "Entrega garantizada en 24hs para pedidos Alpha." },
            { icon: Award, title: "Calidad de Estudio", desc: "Cada prenda es inspeccionada por nuestros diseñadores." },
            { icon: ShieldCheck, title: "Protección Total", desc: "Transacciones encriptadas de grado militar." }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '12px', height: 'fit-content' }}>
                <item.icon size={24} color={idx === 1 ? neonMagenta : neonCyan} />
              </div>
              <div>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '15px', fontWeight: '800' }}>{item.title}</h5>
                <p style={{ margin: 0, fontSize: '13px', color: '#555', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 5. FOOTER DE ALTO NIVEL */}
      <footer style={{ background: '#000', padding: '100px 40px 40px', marginTop: '100px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '80px', marginBottom: '80px' }}>
            <div>
              <h3 style={{ fontWeight: '900', fontSize: '24px', marginBottom: '25px' }}>NOVA<span style={{ color: neonCyan }}>INK</span></h3>
              <p style={{ color: '#444', fontSize: '14px', lineHeight: '1.8', maxWidth: '300px' }}>
                Redefiniendo los límites de la sublimación. Tecnología cósmica aplicada al diseño textil.
              </p>
              <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                <Instagram size={20} color="#333" />
                <Facebook size={20} color="#333" />
                <Twitter size={20} color="#333" />
              </div>
            </div>
            {[
              { t: 'PRODUCTOS', l: ['Remeras Pro', 'Accesorios', 'Ediciones Limitadas', 'Custom'] },
              { t: 'COMPAÑÍA', l: ['Sobre Nova', 'Nuestra Tecnología', 'Sustentabilidad', 'Carreras'] },
              { t: 'LEGAL', l: ['Privacidad', 'Términos', 'Envíos', 'Devoluciones'] }
            ].map(col => (
              <div key={col.t}>
                <h6 style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '2px', marginBottom: '25px', color: '#fff' }}>{col.t}</h6>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {col.l.map(link => <li key={link} style={{ fontSize: '13px', color: '#444', marginBottom: '15px', cursor: 'pointer' }}>{link}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #111', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#222', fontWeight: '800' }}>
            <span>© 2026 NOVA INK PREMIUM STUDIO / ALL RIGHTS RESERVED</span>
            <div style={{ display: 'flex', gap: '30px' }}>
              <span>ARGENTINA</span>
              <span>USD/ARS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
