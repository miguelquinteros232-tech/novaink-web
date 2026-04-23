"use client";

export default function NovaInk() {
  return (
    <div style={{
      backgroundColor: '#050505',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      padding: '40px'
    }}>
      <header style={{ width: '100%', maxWidth: '1000px', marginBottom: '50px' }}>
        <h1 style={{ fontWeight: '900', fontStyle: 'italic', fontSize: '24px' }}>
          NOVA<span style={{ color: '#00ffa3', fontWeight: '200' }}>INK</span>
        </h1>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 350px', 
        gap: '30px', 
        width: '100%', 
        maxWidth: '1000px' 
      }}>
        
        {/* PANEL IZQUIERDO */}
        <div style={{ 
          background: '#0d0d0e', 
          border: '1px solid #1a1a1b', 
          borderRadius: '35px', 
          padding: '40px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <p style={{ color: '#00ffa3', fontSize: '10px', letterSpacing: '4px', fontWeight: '900', marginBottom: '25px' }}>01 CONFIGURATION</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
            <button style={{ background: '#00ffa3', color: 'black', border: 'none', padding: '20px', borderRadius: '18px', fontWeight: '900', cursor: 'pointer' }}>REMERAS</button>
            <button style={{ background: '#151516', color: '#444', border: '1px solid #222', padding: '20px', borderRadius: '18px', fontWeight: '900' }}>GORRAS</button>
            <button style={{ background: '#151516', color: '#444', border: '1px solid #222', padding: '20px', borderRadius: '18px', fontWeight: '900' }}>TAZAS</button>
          </div>
          <div style={{ marginTop: '40px', height: '180px', border: '2px dashed #1a1a1b', borderRadius: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontWeight: 'bold', fontSize: '11px' }}>
            CARGÁ TU DISEÑO AQUÍ
          </div>
        </div>

        {/* PANEL DERECHO */}
        <div style={{ 
          background: 'linear-gradient(180deg, #121213 0%, #050505 100%)', 
          border: '1px solid #1a1a1b', 
          borderRadius: '35px', 
          padding: '35px' 
        }}>
          <h3 style={{ fontStyle: 'italic', marginBottom: '30px', fontSize: '18px' }}>ORDER DETAILS</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1b', paddingBottom: '12px', marginBottom: '40px' }}>
            <span style={{ fontSize: '9px', color: '#444', fontWeight: '900' }}>ITEM</span>
            <span style={{ fontSize: '11px', fontWeight: 'bold' }}>Remera Oversize</span>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '9px', color: '#444', fontWeight: '900' }}>TOTAL PRICE</p>
            <h4 style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-2px' }}>$14.500 <span style={{ color: '#00ffa3', fontSize: '11px' }}>ARS</span></h4>
          </div>
          <button style={{ width: '100%', padding: '22px', background: 'white', color: 'black', border: 'none', borderRadius: '18px', fontWeight: '900', fontSize: '11px', cursor: 'pointer', letterSpacing: '2px' }}>
            EXECUTE ORDER
          </button>
        </div>

      </div>
    </div>
  );
}
