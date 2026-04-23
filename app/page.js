"use client";
import React, { useState } from 'react';
import { ShoppingCart, ShieldCheck, Truck, RotateCcw, Star, Search, User, Heart } from 'lucide-react';

export default function MercadoNova() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [mainImage, setMainImage] = useState('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1000');

  const product = {
    name: "Remera Oversize Premium - Nova Ink Collection",
    price: 14500,
    oldPrice: 18900,
    installments: "6 cuotas de $2.416 sin interés",
    description: "Confeccionada en algodón 24/1 de máxima calidad. Estampado digital de alta definición que no se siente al tacto y resiste lavados intensos."
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', color: '#333', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* NAVBAR ESTILO E-COMMERCE */}
      <nav style={{ backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0', padding: '15px 0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '30px', padding: '0 20px' }}>
          <h1 style={{ color: '#000', fontWeight: '900', fontSize: '24px', margin: 0 }}>NOVA<span style={{ color: '#00ffa3' }}>INK</span></h1>
          <div style={{ flex: 1, position: 'relative' }}>
            <input type="text" placeholder="Buscar productos..." style={{ width: '100%', padding: '10px 15px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }} />
            <Search style={{ position: 'absolute', right: '10px', top: '10px', color: '#999' }} size={18} />
          </div>
          <div style={{ display: 'flex', gap: '20px', color: '#333' }}>
            <User size={22} />
            <Heart size={22} />
            <ShoppingCart size={22} />
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', backgroundColor: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
          
          {/* COLUMNA IZQUIERDA: IMÁGENES */}
          <div>
            <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee' }}>
              <img src={mainImage} alt="Producto" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ width: '80px', height: '80px', border: '2px solid #eee', borderRadius: '4px', cursor: 'pointer', overflow: 'hidden' }}>
                   <img src={mainImage} style={{ width: '100%' }} />
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '30px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Descripción</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{product.description}</p>
            </div>
          </div>

          {/* COLUMNA DERECHA: COMPRA */}
          <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '25px' }}>
            <span style={{ fontSize: '12px', color: '#999' }}>Nuevo | +500 vendidos</span>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>{product.name}</h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '15px' }}>
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#3483fa" color="#3483fa" />)}
              <span style={{ fontSize: '12px', color: '#3483fa' }}> 124 opiniones</span>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <span style={{ fontSize: '14px', color: '#999', textDecoration: 'line-through' }}>${product.oldPrice.toLocaleString()}</span>
              <div style={{ fontSize: '36px', fontWeight: '300' }}>${product.price.toLocaleString()}</div>
              <span style={{ color: '#00a650', fontWeight: 'bold', fontSize: '14px' }}>23% OFF</span>
              <p style={{ color: '#00a650', marginTop: '10px', fontSize: '14px' }}>{product.installments}</p>
            </div>

            {/* SELECCIÓN DE TALLES */}
            <div style={{ marginBottom: '30px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Talle:</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '10px 20px', borderRadius: '6px', border: selectedSize === size ? '2px solid #3483fa' : '1px solid #ddd',
                      background: '#fff', color: selectedSize === size ? '#3483fa' : '#333', fontWeight: 'bold', cursor: 'pointer'
                    }}
                  >{size}</button>
                ))}
              </div>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <button style={{ width: '100%', padding: '15px', borderRadius: '6px', backgroundColor: '#3483fa', color: '#fff', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginBottom: '10px' }}>
              Comprar ahora
            </button>
            <button style={{ width: '100%', padding: '15px', borderRadius: '6px', backgroundColor: 'rgba(65,137,230,.15)', color: '#3483fa', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
              Agregar al carrito
            </button>

            {/* BENEFICIOS */}
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '10px', color: '#666', fontSize: '14px' }}>
                <Truck size={18} color="#00a650" /> <span>Envío gratis a todo el país</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', color: '#666', fontSize: '14px' }}>
                <RotateCcw size={18} color="#3483fa" /> <span>Devolución gratis (30 días)</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', color: '#666', fontSize: '14px' }}>
                <ShieldCheck size={18} color="#3483fa" /> <span>Compra protegida</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
