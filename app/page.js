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
