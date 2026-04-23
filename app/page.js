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

  const neonCyan = "#00f0ff";
  const neonMagenta = "#ff00e6";
  const neonYellow = "#ffe600";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#020005', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; background: #020005; }
        .glass-header {
          backdrop-filter: blur(20px);
          background: rgba(2, 0, 5, ${scrolled ? '0.9' : '0.4'});
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(255, 255, 255, ${scrolled ? '0.1' : '0.05'});
        }
        .nav-item {
          font-size: 11px; font-weight: 800; letter-spacing: 2px; color: #666;
          text-transform: uppercase; cursor: pointer; transition: 0.3s;
        }
        .nav-item:hover { color: ${neonCyan}; }
        .cosmic-title {
          background: linear-gradient(135deg, ${neonYellow}, #fff, ${neonCyan});
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .action-button {
          background: ${neonMagenta}; color: #000; font-weight: 900;
          border: none; border-radius: 4px; cursor: pointer; transition: 0.3s;
          box-shadow: 0 0 20px ${neonMagenta}30;
        }
        .action-button:hover { transform: translateY(-2px); box-shadow: 0 0 35px ${neonMagenta}60; }
      ` }} />

      {/* 1. SISTEMA DE CATEGORÍAS & STATUS */}
      <div style={{ background: '#000', color: neonYellow, fontSize: '9px', fontWeight: '900', letterSpacing: '3px', padding: '12px 0', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1000 }}>
        <Globe size={10} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        WORLDWIDE SHIPPING AVAILABLE • DESIGN LAB STATUS: <span style={{ color: '#00ff00' }}>ONLINE</span>
      </div>

      {/* 2. NAVEGACIÓN PROFESIONAL */}
      <header className="glass-header" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '15px 40px' : '25px 40px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            <h1 style={{ fontWeight: '900', fontSize: '22px', letterSpacing: '-1.5px', margin: 0 }}>
              NOVA<span style={{ color: neonCyan }}>INK</span>
            </h1>
            
            <nav style={{ display: 'flex', gap: '35px' }}>
              {['Shop', 'Collections', 'Design Lab', 'Drops'].map(item => (
                <div key={item} className="nav-item">{item}</div>
              ))}
            </nav>
          </div>

          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Search size={18} color="#444" />
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <ShoppingCart size={20} color={neonCyan} />
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '9px', fontWeight: '900', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{qty}</div>
            </div>
            <User size={18} color="#444" />
          </div>
        </div>
      </header>

      {/* 3. ESTRUCTURA DE PRODUCTO ELITE */}
      <main style={{ maxWidth: '1300px', margin: '80px auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px' }}>
          
          {/* LADO VISUAL */}
          <div style={{ position: 'relative' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderRadius: '4px', aspectRatio: '1/1.25', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <Flame size={40} color={neonMagenta} style={{ opacity: 0.2 }} />
               <div style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '10px', color: '#333', fontWeight: '800' }}>[ ASSET_VIEWER_V1 ]</div>
            </div>
          </div>

          {/* LADO DE VENTA */}
          <div>
            <div style={{ borderLeft: `3px solid ${neonCyan}`, paddingLeft: '25px', marginBottom: '40px' }}>
              <p style={{ fontSize: '11px', fontWeight: '900', color: neonCyan, letterSpacing: '4px', marginBottom: '10px' }}>NEW ARRIVAL</p>
              <h2 className="cosmic-title" style={{ fontSize: '54px', fontWeight: '900', margin: 0, lineHeight: 0.9, letterSpacing: '-2.5px' }}>
                COSMIC <br/>SPLATTER
              </h2>
            </div>

            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                <span style={{ fontSize: '64px', fontWeight: '900', color: '#fff' }}>$14.500</span>
                <span style={{ color: '#444', textDecoration: 'line-through', fontSize: '20px' }}>$18.900</span>
              </div>
              <p style={{ color: '#666', fontSize: '12px', marginTop: '10px', fontWeight: '700' }}>IVA INCLUIDO • PAGÁ EN 6 CUOTAS SIN INTERÉS</p>
            </div>

            {/* SELECTOR DE CONFIGURACIÓN */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', color: '#555', letterSpacing: '2px' }}>SELECT_SIZE</span>
                <span style={{ fontSize: '10px', color: neonCyan, cursor: 'pointer' }}>SIZE GUIDE</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {['S', 'M', 'L', 'XL'].map(t => (
                  <button key={t} onClick={() => setSelectedSize(t)} style={{ padding: '18px 0', background: selectedSize === t ? '#fff' : 'transparent', color: selectedSize === t ? '#000' : '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2px', fontWeight: '900', cursor: 'pointer', transition: '0.2s' }}>{t}</button>
                ))}
              </div>
            </div>

            {/* BOTÓN DE ACCIÓN PRINCIPAL */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
                <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: 'none', border: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Minus size={14}/></button>
                <span style={{ width: '30px', textAlign: 'center', fontWeight: '900', fontSize: '14px' }}>{qty}</span>
                <button onClick={() => setQty(qty+1)} style={{ background: 'none', border: 'none', color: '#fff', padding: '15px', cursor: 'pointer' }}><Plus size={14}/></button>
              </div>
              <button className="action-button" style={{ flex: 1, fontSize: '14px', letterSpacing: '1px' }}>
                ADD TO CART
              </button>
            </div>

            {/* CUSTOM LAB SECTION */}
            <div style={{ marginTop: '50px', padding: '25px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <Zap size={16} color={neonYellow} />
                  <span style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '1px' }}>DESIGN_LAB.EXE</span>
               </div>
               <button style={{ width: '100%', padding: '15px', background: 'transparent', border: `1px solid ${neonYellow}40`, color: neonYellow, fontSize: '11px', fontWeight: '900', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                 <Upload size={14} /> UPLOAD YOUR ASSET
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* 4. FOOTER CORPORATIVO */}
      <footer style={{ background: '#000', padding: '100px 40px 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '100px' }}>
          <div>
            <h3 style={{ fontWeight: '900', fontSize: '20px', marginBottom: '20px' }}>NOVA<span style={{ color: neonCyan }}>INK</span></h3>
            <p style={{ color: '#444', fontSize: '13px', lineHeight: '1.8', maxWidth: '350px' }}>PREMIUM SUBLIMATION STUDIO BASED IN ARGENTINA. HIGH DEFINITION APPAREL FOR THE COSMIC GENERATION.</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px', color: '#222' }}>
              <Instagram size={20} /> <Facebook size={20} /> <Twitter size={20} />
            </div>
          </div>
          <div>
            <h6 style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '2px', marginBottom: '25px' }}>COLLECTIONS</h6>
            <ul style={{ listStyle: 'none', padding: 0, color: '#444', fontSize: '12px', lineHeight: '2.5' }}>
              <li>Oversize Tees</li>
              <li>Trucker Hats</li>
              <li>Ceramic Assets</li>
              <li>Limited Drops</li>
            </ul>
          </div>
          <div>
            <h6 style={{ fontSize: '11px', fontWeight: '900', letterSpacing: '2px', marginBottom: '25px' }}>SUPPORT</h6>
            <ul style={{ listStyle: 'none', padding: 0, color: '#444', fontSize: '12px', lineHeight: '2.5' }}>
              <li>Shipping Policy</li>
              <li>Terms of Service</li>
              <li>Refund Center</li>
              <li>Contact Lab</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: '1300px', margin: '80px auto 0', textAlign: 'center', fontSize: '10px', color: '#222', fontWeight: '800', letterSpacing: '1px' }}>
          © 2026 NOVA INK • DESIGNED FOR THE BEYOND
        </div>
      </footer>
    </div>
  );
}
