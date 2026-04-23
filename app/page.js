"use client";

export default function NovaInkTerminal() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root { --neon: #00ffa3; --bg: #050505; --panel: #0d0d0e; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: var(--bg); color: white; font-family: sans-serif; }
        
        .main-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px;
        }

        .header {
          width: 100%;
          max-width: 1000px;
          margin-bottom: 50px;
          display: flex;
          justify-content: space-between;
        }

        .logo { font-weight: 900; font-size: 24px; font-style: italic; letter-spacing: -1px; }
        .logo span { color: var(--neon); font-weight: 200; }

        .grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 30px;
          width: 100%;
          max-width: 1000px;
        }

        .card {
          background: var(--panel);
          border: 1px solid #1a1a1b;
          border-radius: 35px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .btn-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-top: 25px; }
        
        .btn-neon {
          background: var(--neon);
          color: black;
          border: none;
          padding: 20px;
          border-radius: 18px;
          font-weight: 900;
          font-size: 11px;
          cursor: pointer;
        }

        .btn-dark {
          background: #151516;
          color: #444;
          border: 1px solid #222;
          padding: 20px;
          border-radius: 18px;
          font-weight: 900;
          font-size: 11px;
        }

        .dropzone {
          margin-top: 40px;
          height: 180px;
          border: 2px dashed #1a1a1b;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          font-weight: bold;
          font-size: 11px;
        }

        .summary {
          background: linear-gradient(180deg, #121213 0%, #050505 100%);
        }

        .total-box { margin: 40px 0; }
        .total-box p { font-size: 9px; color: #444; font-weight: 900; margin-bottom: 5px; }
        .total-box h4 { font-size: 42px; font-weight: 900; letter-spacing: -2px; }
        .total-box span { color: var(--neon); font-size: 11px; }

        .btn-execute {
          width: 100%;
          padding: 22px;
          background: white;
          color: black;
          border: none;
          border-radius: 18px;
          font-weight: 900;
          font-size: 11px;
          cursor: pointer;
          letter-spacing: 2px;
        }
      ` }} />

      <div className="main-container">
        <header className="header">
          <h1 className="logo">NOVA<span>INK</span></h1>
          <div style={{ color: '#444', fontSize: '10px', fontWeight: 'bold' }}>STATION 1.0</div>
        </header>

        <div className="grid">
          <div className="card">
            <p style={{ color: 'var(--neon)', fontSize: '10px', letterSpacing: '4px', fontWeight: '900' }}>01 CONFIGURATION</p>
            <div className="btn-grid">
              <button className="btn-neon">REMERAS</button>
              <button className="btn-dark">GORRAS</button>
              <button className="btn-dark">TAZAS</button>
            </div>
            <div className="dropzone">ARRASTRÁ TU DISEÑO AQUÍ</div>
          </div>

          <div className="card summary">
            <h3 style={{ fontStyle: 'italic', marginBottom: '30px' }}>ORDER DETAILS</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1b', paddingBottom: '10px' }}>
              <span style={{ fontSize: '9px', color: '#444' }}>ITEM</span>
              <span style={{ fontSize: '11px', fontWeight: 'bold' }}>T-Shirt Oversize</span>
            </div>
            <div className="total-box">
              <p>ESTIMATED TOTAL</p>
              <h4>$14.500 <span>ARS</span></h4>
            </div>
            <button className="btn-execute">EXECUTE ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
}
