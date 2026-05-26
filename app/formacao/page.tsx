'use client'

import { useState } from 'react'

export default function FormacaoPage() {
  const [nome, setNome] = useState('')
  const [whats, setWhats] = useState('')
  const [enviado, setEnviado] = useState(false)

  function enviar() {
    if (!nome.trim() || !whats.trim()) return
    const msg = encodeURIComponent(
      `🔥 CORRE.IA — Lista de Espera\n\nNome: ${nome}\nWhatsApp: ${whats}`
    )
    window.open(`https://wa.me/5554996865236?text=${msg}`, '_blank')
    setEnviado(true)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;900&family=Mulish:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .corr-page {
          min-height: 100vh;
          background: #0A0909;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Mulish', sans-serif;
        }

        .corr-page::before {
          content: '';
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(200,100,40,.18) 0%, transparent 65%);
          pointer-events: none;
        }

        .corr-page::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
          background-size: 200px 200px;
          opacity: .22;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 0;
        }

        .corr-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 480px;
          text-align: center;
          color: #F0E8D8;
        }

        .corr-logo {
          font-family: 'Big Shoulders Display', sans-serif;
          font-weight: 900;
          font-size: clamp(72px, 18vw, 100px);
          letter-spacing: -.03em;
          line-height: 1;
          margin-bottom: 4px;
        }
        .corr-logo .c { color: #C86428; }
        .corr-logo .ghost { color: rgba(240,232,216,.2); }

        .corr-sub {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: rgba(240,232,216,.3);
          margin-bottom: 48px;
        }

        .corr-h1 {
          font-family: 'Big Shoulders Display', sans-serif;
          font-weight: 900;
          font-size: clamp(30px, 7vw, 44px);
          line-height: .92;
          letter-spacing: -.02em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .corr-h1 em { color: #C86428; font-style: normal; }

        .corr-desc {
          font-size: 15px;
          line-height: 1.75;
          color: rgba(240,232,216,.5);
          max-width: 360px;
          margin: 0 auto 36px;
        }

        .corr-live {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: rgba(240,232,216,.3);
          border: 1px solid rgba(240,232,216,.08);
          padding: 6px 16px;
          margin-bottom: 32px;
        }
        .corr-live-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #C86428;
          box-shadow: 0 0 8px #C86428;
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

        .corr-tools {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 36px;
        }
        .corr-tool {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(240,232,216,.2);
          border: 1px solid rgba(240,232,216,.07);
          padding: 4px 10px;
        }

        .corr-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }

        .corr-input {
          width: 100%;
          background: rgba(240,232,216,.05);
          border: 1px solid rgba(240,232,216,.1);
          color: #F0E8D8;
          font-family: 'Mulish', sans-serif;
          font-size: 15px;
          padding: 16px 20px;
          outline: none;
          transition: border-color .2s;
          -webkit-appearance: none;
          border-radius: 0;
        }
        .corr-input::placeholder { color: rgba(240,232,216,.25); }
        .corr-input:focus { border-color: rgba(200,100,40,.5); }

        .corr-btn {
          font-family: 'Big Shoulders Display', sans-serif;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: .06em;
          text-transform: uppercase;
          background: #C86428;
          color: #F0E8D8;
          border: none;
          padding: 18px;
          cursor: pointer;
          transition: background .2s;
          width: 100%;
        }
        .corr-btn:hover { background: #A0501E; }

        .corr-note {
          font-size: 12px;
          color: rgba(240,232,216,.2);
          line-height: 1.6;
        }

        .corr-success {
          background: rgba(200,100,40,.07);
          border: 1px solid rgba(200,100,40,.2);
          padding: 32px 24px;
        }
        .corr-success-icon { font-size: 36px; margin-bottom: 12px; }
        .corr-success h3 {
          font-family: 'Big Shoulders Display', sans-serif;
          font-weight: 900;
          font-size: 24px;
          letter-spacing: -.01em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .corr-success p { font-size: 13px; color: rgba(240,232,216,.45); line-height: 1.6; }

        .corr-foot {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(240,232,216,.15);
          margin-top: 40px;
        }
      `}</style>

      <div className="corr-page">
        <div className="corr-card">

          <div className="corr-logo">
            <span className="c">CORRE</span>
            <span className="ghost">.</span>
            <span className="c">IA</span>
          </div>
          <div className="corr-sub">Formação · Yuri Correia</div>

          <h1 className="corr-h1">
            Um profissional.<br />
            <em>Uma equipe inteira.</em>
          </h1>

          <p className="corr-desc">
            Como usar IA para entregar marca, site, estratégia e ranqueamento
            — sozinho, mais rápido que qualquer agência.
          </p>

          <div className="corr-live">
            <div className="corr-live-dot" />
            Lista de espera aberta
          </div>

          <div className="corr-tools">
            <span className="corr-tool">Claude</span>
            <span className="corr-tool">Manus</span>
            <span className="corr-tool">Figma</span>
            <span className="corr-tool">ChatGPT</span>
            <span className="corr-tool">xquads</span>
          </div>

          {!enviado ? (
            <>
              <div className="corr-form">
                <input
                  className="corr-input"
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && enviar()}
                />
                <input
                  className="corr-input"
                  type="tel"
                  placeholder="WhatsApp (com DDD)"
                  value={whats}
                  onChange={e => setWhats(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && enviar()}
                />
                <button className="corr-btn" onClick={enviar}>
                  Entrar na lista de espera →
                </button>
              </div>
              <div className="corr-note">
                Você recebe a data, o preço e o conteúdo completo antes de todo mundo.
              </div>
            </>
          ) : (
            <div className="corr-success">
              <div className="corr-success-icon">✓</div>
              <h3>Você está na lista.</h3>
              <p>Quando abrir a formação, você é o primeiro a saber.<br />Fique de olho no WhatsApp.</p>
            </div>
          )}

          <div className="corr-foot">@ocorreia.com.br · 2025</div>

        </div>
      </div>
    </>
  )
}
