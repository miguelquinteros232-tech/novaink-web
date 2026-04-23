"use client";
import React, { useState } from 'react';
import { 
  ShoppingCart, ShieldCheck, Truck, RotateCcw, Star, Search, User, 
  Heart, Instagram, Facebook, Twitter, CreditCard, Upload, Plus, Minus, Zap
} from 'lucide-react';

export default function NovaInkSupernova() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [qty, setQty] = useState(1);

  // Paleta de colores derivada de tu logo
  const neonCyan = "#00f0ff";
  const neonMagenta = "#ff00e6";
  const neonYellow = "#ffe600";
  const cosmicText = "linear-gradient(90deg, #ffe600 0%, #00f0ff 100%)";

  return (
    <div style={{ 
      backgroundColor: '#05000a', // Negro con un toque violeta cósmico
      color: '#fff', 
      minHeight: '100vh', 
      fontFamily: "'Syncopate', sans-serif", // Fuente más futurista/tech
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      {/* EFECTOS DE FONDO CÓSMICO */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');
        
        body { margin: 0; }
        
        /* Estrellas/Polvo cósmico */
        .cosmic-bg {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
                            radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px);
          background-size: 550px 550px, 350px 350px;
          background-position: 0 0, 40px 60px;
          opacity: 0.1; zIndex: 0;
        }

        /* Destellos de color neón en el fondo */
        .neon-glow-1 { position: absolute; top: 20%; left: -10%; width: 400px; height: 400px; background: ${neonMagenta}; filter: blur(150px); opacity: 0.15; }
        .neon-glow-2 { position: absolute; bottom: 10%; right: -10%; width: 500px; height: 500px; background: ${neonCyan}; filter: blur(180px); opacity: 0.15; }
        
        /* Botones con pulso de neón */
        .btn-neon-buy {
          transition: 0.3s;
          box-shadow: 0 0 15px rgba(255, 0, 230, 0.5);
        }
        .btn-neon-buy:hover {
          box-shadow: 0 0 30px rgba(255, 0, 230, 0.8), 0 0 50px rgba(255, 0, 230, 0.5);
          transform: translateY(-2px);
        }
        
        .btn-neon-cart {
          transition: 0.3s;
          box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
        }
        .btn-neon-cart:hover {
          box-shadow: 0 0 25px rgba(0, 240, 255, 0.6);
          transform: translateY(-1px);
        }

        /* Gradiente de texto cósmico */
        .cosmic-text {
          background: ${cosmicText};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      ` }} />
      
      <div className="cosmic-bg"></div>
      <div className="neon-glow-1"></div>
      <div className="neon-glow-2"></div>

      {/* 1. TOP ANNOUNCEMENT BAR (Estilo Eléctrico) */}
      <div style={{ backgroundColor: '#000', color: neonYellow, padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', borderBottom: `2px solid ${neonCyan}`, position: 'relative', zIndex: 10 }}>
        <Zap size={14} style={{verticalAlign: 'middle', marginRight: '8px'}}/> UNLEASH THE COLOR • ENVÍOS EXPRESS CÓSMICOS • 15% OFF PAGANDO CON TRANSFERENCIA <Zap size={14} style={{verticalAlign: 'middle', marginLeft: '8px'}}/>
      </div>

      {/* 2. NAVBAR PRO (Fondo oscuro, acentos neón) */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '20px 0', backgroundColor: 'rgba(5,0,10,0.9)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px' }}>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {/* AQUÍ VA TU LOGO FANTÁSTICO */}
            <img src="/logo_novaink.png" alt="Nova Ink Logo" style={{ height: '70px', marginTop: '-10px', filter: 'drop-shadow(0 0 10px rgba(255,230,0,0.5))' }} />
          </div>
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center', color: '#888' }}>
            <Search size={20} className="hover:text-cyan" style={{cursor: 'pointer'}} />
            <User size={20} className="hover:text-cyan" style={{cursor: 'pointer'}} />
            <div style={{ position: 'relative', cursor: 'pointer' }} className="hover:text-magenta">
              <ShoppingCart size={20} />
              <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: neonMagenta, color: '#000', fontSize: '10px', padding: '3px 7px', borderRadius: '50%', fontWeight: '700' }}>{qty}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. PRODUCT LAYOUT (Paneles oscuros, bordes neón) */}
      <main style={{ maxWidth: '1300px', margin: '80px auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', gap: '80px', marginBottom: '100px' }}>
          
          {/* GALERÍA DE IMÁGENES IZQUIERDA (Look Espacial) */}
          <div style={{ flex: '1.2', display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ width: '90px', height: '110px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', transition: '0.3s' }} className="hover:border-cyan"></div>
              ))}
            </div>
            <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: `1px solid rgba(255,255,255,0.05)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: `0 0 30px rgba(0,0,0,0.5)` }}>
                {/* Salpicadura de color sutil detrás de la prenda */}
                <div style={{position: 'absolute', width: '80%', height: '80%', background: `radial-gradient(circle, ${neonMagenta}10 0%, transparent 70%)`, filter: 'blur(50px)'}}></div>
               <span style={{ color: '#333', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px', zIndex: 1 }}>PREVIEW DE PRENDA</span>
            </div>
          </div>

          {/* INFO DE COMPRA DERECHA */}
          <div style={{ flex: '1' }}>
            <div style={{ marginBottom: '35px' }}>
              <span style={{ color: neonCyan, fontSize: '12px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>ALPHA EDITION</span>
              <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '15px', lineHeight: '1.2', textTransform: 'uppercase', letterSpacing: '-1px' }}>Remera Oversize <span className="cosmic-text">Cosmic Splatter</span></h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', color: neonYellow }}>
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" style={{filter: 'drop-shadow(0 0 5px rgba(255,230,0,0.8))'}} />)}
                </div>
                <span style={{ fontSize: '13px', color: '#888' }}>(48 Opiniones Cósmicas)</span>
              </div>
            </div>

            <div style={{ marginBottom: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', color: '#fff' }}>$14.500</span>
                <span style={{ backgroundColor: '#fff', color: '#000', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>23% OFF</span>
              </div>
              <p style={{ color: neonCyan, fontSize: '15px', fontWeight: '600' }}>o 6 cuotas sin interés de <b>$2.416</b> con Mercado Pago</p>
            </div>

            {/* SELECCIÓN DE TALLES (Acentos Neón) */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }}>
                <span style={{ fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>SELECCIONAR TALLE</span>
                <span style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', color: '#888' }} className="hover:text-cyan">Guía de talles</span>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                {['S', 'M', 'L', 'XL'].map(t => (
                  <button 
                    key={t}
                    onClick={() => setSelectedSize(t)}
                    style={{
                      flex: 1, padding: '18px 0', border: selectedSize === t ? `2px solid ${neonCyan}` : '1px solid rgba(255,255,255,0.1)',
                      backgroundColor: selectedSize === t ? 'rgba(0,240,255,0.1)' : 'rgba(255,255,255,0.02)', color: selectedSize === t ? neonCyan : '#fff',
                      fontWeight: '700', borderRadius: '10px', cursor: 'pointer', transition: '0.3s', textTransform: 'uppercase'
                    }}
                    className="hover:border-cyan"
                  >{t}</button>
                ))}
              </div>
            </div>

            {/* ÁREA DE PERSONALIZACIÓN (Eléctrica) */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.01)', padding: '30px', borderRadius: '15px', border: `2px dashed rgba(255,255,255,0.08)`, marginBottom: '40px', position: 'relative' }}>
               {/* Efecto de destello eléctrico sutil en el borde */}
               <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '15px', boxShadow: `inset 0 0 15px ${neonCyan}10`}}></div>
               
               <h4 style={{ margin: '0 0 12px 0', fontSize: '15px', color: neonYellow, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>🎨 UNLEASH YOUR DESIGN</h4>
               <p style={{ fontSize: '13px', color: '#888', marginBottom: '20px', lineHeight: '1.5' }}>Sube tu arte (PNG, JPG o AI). Nosotros nos encargamos de la magia cósmica de la sublimación.</p>
               <button style={{ width: '100%', padding: '15px', border: `1px solid ${neonYellow}`, borderRadius: '10px', backgroundColor: 'transparent', color: neonYellow, fontWeight: '700', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', cursor: 'pointer', transition: '0.3s', textTransform: 'uppercase', letterSpacing: '1px' }} className="hover:bg-yellow hover:text-black">
                 <Upload size={18} /> ELEGIR ARCHIVO DE ARTE
               </button>
            </div>

            {/* CANTIDAD Y COMPRA (Botones con Glow de Neón) */}
            <div style={{ display: 'flex', gap: '20px' }}>
               <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <button onClick={() => setQty(Math.max(1, qty-1))} style={{ border: 'none', background: 'none', padding: '10px', color: '#888', cursor: 'pointer' }}><Minus size={18}/></button>
                  <span style={{ padding: '0 20px', fontWeight: '700', fontSize: '18px', color: '#fff' }}>{qty}</span>
                  <button onClick={() => setQty(qty+1)} style={{ border: 'none', background: 'none', padding: '10px', color: '#888', cursor: 'pointer' }}><Plus size={18}/></button>
               </div>
               <button 
                 style={{ flex: 1, backgroundColor: neonMagenta, color: '#000', border: 'none', borderRadius: '10px', fontWeight: '800', textTransform: 'uppercase', fontSize: '15px', letterSpacing: '2px', cursor: 'pointer' }}
                 className="btn-neon-buy"
               >
                  Comprar Ahora Cósmico
               </button>
            </div>
            <button 
               style={{ width: '100%', marginTop: '15px', padding: '18px', backgroundColor: 'rgba(0,240,255,0.1)', color: neonCyan, border: `1px solid ${neonCyan}`, borderRadius: '10px', fontWeight: '700', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px', cursor: 'pointer' }}
               className="btn-neon-cart"
            >
               Añadir al Carrito
            </button>
          </div>
        </div>

        {/* 4. SECCIÓN DE VENTAJAS (Íconos Neón) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '80px 0', backgroundColor: 'rgba(255,255,255,0.01)' }}>
          {[
            { Icon: Truck, color: neonCyan, title: "Envíos Supernova", desc: "Recibí en 24/48hs. A la velocidad de la luz." },
            { Icon: ShieldCheck, color: neonMagenta, title: "Garantía Infinita", desc: "30 días de satisfacción galáctica." },
            { Icon: CreditCard, color: neonYellow, title: "Pagos Estelares", desc: "Todas las tarjetas y crypto." },
            { Icon: RotateCcw, color: neonCyan, title: "Cambios Simples", desc: "Sin preguntas espaciales. Fácil." }
          ].map(({ Icon, color, title, desc }) => (
            <div key={title} style={{ textAlign: 'center', padding: '0 20px' }}>
              <Icon size={40} style={{ color: color, marginBottom: '20px', filter: `drop-shadow(0 0 10px ${color}80)` }} />
              <h5 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h5>
              <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.6' }}>{desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* 5. FOOTER (Profundo y Cósmico) */}
      <footer style={{ backgroundColor: '#000', color: '#fff', padding: '100px 40px 60px', borderTop: `1px solid rgba(255,255,255,0.05)`, position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '70px' }}>
          <div>
            {/* Logo en el Footer también brillando */}
            <img src="/logo_novaink.png" alt="Nova Ink Logo" style={{ height: '60px', marginBottom: '25px', filter: 'drop-shadow(0 0 8px rgba(255,230,0,0.4))' }} />
            <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.7', marginBottom: '30px' }}>Líderes en sublimación y estampado cósmico. Transformamos tus ideas en explosiones de color de alta definición.</p>
            <div style={{ display: 'flex', gap: '25px', color: '#555' }}>
              <Instagram size={20} className="hover:text-magenta" /> <Facebook size={20} className="hover:text-cyan" /> <Twitter size={20} className="hover:text-yellow" />
            </div>
          </div>
          {[
            { title: "SERVICIOS", links: ["Sublimación Pro", "Estampado DTF", "Vinilo Textil", "Diseño Galáctico"] },
            { title: "EXPLORAR", links: ["Remeras Oversize", "Gorras Trucker", "Tazas Cerámica", "Sale Eléctrico"] },
            { title: "AYUDA", links: ["Envíos Cósmicos", "Seguimiento", "Términos Galácticos", "FAQ"] }
          ].map(section => (
            <div key={section.title}>
              <h6 style={{ fontSize: '14px', marginBottom: '25px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: '#fff' }}>{section.title}</h6>
              <ul style={{ listStyle: 'none', padding: 0, color: '#888', fontSize: '13px', lineHeight: '2.8' }}>
                {section.links.map(link => <li key={link} className="hover:text-cyan" style={{cursor: 'pointer'}}>{link}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: '1300px', margin: '80px auto 0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', textAlign: 'center', fontSize: '12px', color: '#333', letterSpacing: '1px' }}>
          © 2026 NOVA INK SUBLIMACION & ESTAMPADO CÓSMICO. UNLEASH THE COLOR.
        </div>
      </footer>
    </div>
  );
}
