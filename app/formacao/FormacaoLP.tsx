'use client'

import { useEffect, useRef, useState } from 'react'

export default function FormacaoLP() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enviado, setEnviado] = useState(false)
  const [nome, setNome] = useState('')
  const [whats, setWhats] = useState('')
  const [erros, setErros] = useState(false)
  const methodRef = useRef<HTMLDivElement>(null)

  // Three.js
  useEffect(() => {
    if (!canvasRef.current) return
    let animId: number

    const initThree = async () => {
      const THREE = await import('three')
      const canvas = canvasRef.current!
      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x0a0909, 0.03)

      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.set(0, 0, 9)

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.1

      scene.add(new THREE.AmbientLight(0x302020, 0.6))
      const mainLight = new THREE.DirectionalLight(0xf5e8d0, 1.8)
      mainLight.position.set(5, 8, 5)
      scene.add(mainLight)
      const accentLight = new THREE.PointLight(0xC86428, 4, 22)
      accentLight.position.set(-3, 2, 4)
      scene.add(accentLight)
      const rimLight = new THREE.PointLight(0x4a2010, 1.2, 18)
      rimLight.position.set(4, -2, 3)
      scene.add(rimLight)

      const group = new THREE.Group()
      scene.add(group)

      const icoWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.2, 1)),
        new THREE.LineBasicMaterial({ color: 0xC86428, opacity: 0.28, transparent: true })
      )
      group.add(icoWire)

      const dodWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.DodecahedronGeometry(1.4, 0)),
        new THREE.LineBasicMaterial({ color: 0x8a5530, opacity: 0.18, transparent: true })
      )
      group.add(dodWire)

      const octMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.9, 0),
        new THREE.MeshStandardMaterial({ color: 0x1a0f0a, metalness: 0.95, roughness: 0.08, emissive: 0xC86428, emissiveIntensity: 0.06 })
      )
      group.add(octMesh)

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(3.2, 0.014, 8, 72),
        new THREE.MeshStandardMaterial({ color: 0xC86428, emissive: 0xC86428, emissiveIntensity: 0.35, metalness: 1, roughness: 0.15 })
      )
      ring.rotation.x = Math.PI / 2
      group.add(ring)

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(3.8, 0.007, 8, 90),
        new THREE.MeshStandardMaterial({ color: 0x5a3520, metalness: 1, roughness: 0.3 })
      )
      ring2.rotation.x = Math.PI / 3
      ring2.rotation.y = Math.PI / 5
      group.add(ring2)

      const dummy = new THREE.Object3D()
      const pCount = 400
      type PData = { x: number; y: number; z: number; spd: number; off: number }
      const pData: PData[] = []
      const pMesh = new THREE.InstancedMesh(
        new THREE.SphereGeometry(0.014, 4, 4),
        new THREE.MeshBasicMaterial({ color: 0x4a2a15 }),
        pCount
      )
      for (let i = 0; i < pCount; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = 6 + Math.random() * 18
        const x = r * Math.sin(phi) * Math.cos(theta)
        const y = r * Math.sin(phi) * Math.sin(theta)
        const z = r * Math.cos(phi)
        dummy.position.set(x, y, z)
        const s = 0.5 + Math.random() * 1.8
        dummy.scale.set(s, s, s)
        dummy.updateMatrix()
        pMesh.setMatrixAt(i, dummy.matrix)
        pData.push({ x, y, z, spd: 0.0004 + Math.random() * 0.001, off: Math.random() * Math.PI * 2 })
      }
      scene.add(pMesh)

      const grid = new THREE.GridHelper(40, 40, 0x1a0f0a, 0x120a06)
      grid.position.y = -4.5
      scene.add(grid)

      let mx = 0, my = 0, tmx = 0, tmy = 0
      const onMouseMove = (e: MouseEvent) => {
        tmx = (e.clientX / window.innerWidth - 0.5) * 2
        tmy = (e.clientY / window.innerHeight - 0.5) * 2
      }
      document.addEventListener('mousemove', onMouseMove)

      let scrollProg = 0
      const onScroll = () => {
        scrollProg = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      }
      window.addEventListener('scroll', onScroll)

      const startTime = Date.now()
      const animate = () => {
        animId = requestAnimationFrame(animate)
        const t = (Date.now() - startTime) / 1000
        mx += (tmx - mx) * 0.05
        my += (tmy - my) * 0.05

        group.rotation.y = t * 0.13 + mx * 0.28
        group.rotation.x = Math.sin(t * 0.09) * 0.1 + my * 0.14
        icoWire.rotation.y = -t * 0.07
        icoWire.rotation.z = t * 0.04
        dodWire.rotation.y = t * 0.11
        dodWire.rotation.x = t * 0.06
        octMesh.rotation.y = t * 0.22
        octMesh.rotation.x = t * 0.14
        ring.rotation.z = t * 0.09
        ring2.rotation.z = -t * 0.06
        ring2.rotation.x = Math.PI / 3 + t * 0.04

        accentLight.position.x = Math.cos(t * 0.28) * 5
        accentLight.position.z = Math.sin(t * 0.28) * 5
        accentLight.position.y = Math.sin(t * 0.45) * 2.5

        for (let i = 0; i < pCount; i++) {
          const p = pData[i]
          dummy.position.set(
            p.x + Math.sin(t * p.spd * 100 + p.off) * 0.25,
            p.y + Math.cos(t * p.spd * 80 + p.off) * 0.25,
            p.z + Math.sin(t * p.spd * 60 + p.off) * 0.25
          )
          const s = 0.5 + Math.sin(t * p.spd * 50 + p.off) * 0.25
          dummy.scale.set(s, s, s)
          dummy.updateMatrix()
          pMesh.setMatrixAt(i, dummy.matrix)
        }
        pMesh.instanceMatrix.needsUpdate = true

        camera.position.y = -scrollProg * 2.5
        camera.position.z = 9 - scrollProg * 1.5

        renderer.render(scene, camera)
      }
      animate()

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize)

      return () => {
        cancelAnimationFrame(animId)
        document.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    }

    let cleanup: (() => void) | undefined
    initThree().then(fn => { cleanup = fn })
    return () => { cleanup?.() }
  }, [])

  // GSAP
  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.to('#hero-badge',     { opacity: 1, y: 0, duration: .9, delay: .3, ease: 'power3.out' })
      gsap.to('#hero-logo',      { opacity: 1, y: 0, duration: 1.1, delay: .5, ease: 'power3.out' })
      gsap.to('#hero-sub-label', { opacity: 1, duration: .8, delay: .8, ease: 'power2.out' })
      gsap.to('#hero-h1',        { opacity: 1, y: 0, duration: 1, delay: .9, ease: 'power3.out' })
      gsap.to('#hero-desc',      { opacity: 1, y: 0, duration: .9, delay: 1.1, ease: 'power3.out' })
      gsap.to('#hero-tools',     { opacity: 1, duration: .8, delay: 1.3, ease: 'power2.out' })
      gsap.to('#hero-ctas',      { opacity: 1, duration: .8, delay: 1.5, ease: 'power2.out' })

      // Horizontal method scroll
      const methodInner = document.getElementById('method-inner')
      if (methodInner) {
        ScrollTrigger.create({
          trigger: '#metodo',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          onUpdate: self => {
            const maxX = -(methodInner.scrollWidth - window.innerWidth * 0.82)
            gsap.set(methodInner, { x: maxX * self.progress })
          }
        })
      }

      document.querySelectorAll<HTMLElement>('.mod-item').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: .7, delay: i * .07,
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } }
        )
      })

      document.querySelectorAll<HTMLElement>('.stat-card').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: .8, delay: i * .15,
            scrollTrigger: { trigger: '#resultado', start: 'top 75%', toggleActions: 'play none none none' } }
        )
      })
    }
    initGsap()
  }, [])

  function enviar() {
    if (!nome.trim() || !whats.trim()) { setErros(true); return }
    const msg = encodeURIComponent(`🔥 CORRE.AI — Lista de Espera\n\nNome: ${nome}\nWhatsApp: ${whats}`)
    window.open(`https://wa.me/5554996865236?text=${msg}`, '_blank')
    setEnviado(true)
  }

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqs = [
    { q: 'Precisa saber programar?', a: 'Não. O Claude Code escreve o código por você. Você aprende a dar direção, revisar e publicar. O método é feito para profissionais de marketing, design e comunicação — não para desenvolvedores.' },
    { q: 'Para quem é a CORRE.AI?', a: 'Social media, designers, gestores de tráfego e profissionais de comunicação com 0–3 anos de experiência que querem parar de vender só post e começar a entregar estrutura completa — cobrando muito mais por isso.' },
    { q: 'Quando abre?', a: 'A data exata sai primeiro para quem está na lista. Você recebe antes de qualquer anúncio público — junto com o preço e o conteúdo completo dos módulos.' },
    { q: 'Precisa de ferramentas pagas?', a: 'Algumas ferramentas têm planos pagos (Claude Pro ~R$100/mês, Figma gratuito no início). O custo mensal da stack completa é muito menor que um único projeto fechado com o método. O ROI é imediato.' },
    { q: 'Funciona para qualquer nicho?', a: 'Sim. O método foi aplicado em energia solar, clínicas, escritórios de contabilidade, construtoras, distribuidoras. Qualquer empresa local que precisa aparecer no Google e na IA é um cliente potencial.' },
  ]

  return (
    <>
      <style>{`
        :root { --accent: #C86428; --accent-dark: #A0501E; --bg: #0A0909; --cream: #F0E8D8; }
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: var(--bg); color: var(--cream); overflow-x: hidden; }
        body::after {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
          background-size: 200px 200px;
          opacity: .18; mix-blend-mode: overlay;
          pointer-events: none; z-index: 1;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes scrollPulse { 0%,100%{opacity:.3} 50%{opacity:1} }
        .display { font-family: var(--font-display, 'Big Shoulders Display', sans-serif); }
        .mono { font-family: var(--font-mono, 'IBM Plex Mono', monospace); }
        body { font-family: var(--font-body, 'Mulish', sans-serif); }
        .glass { background: rgba(240,232,216,.025); border: 1px solid rgba(240,232,216,.07); }
        .btn-primary {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--accent); color: var(--bg);
          padding: 1.125rem 2rem;
          font-family: 'Big Shoulders Display', sans-serif; font-weight: 700;
          font-size: 1rem; letter-spacing: .06em; text-transform: uppercase;
          border: none; cursor: pointer; text-decoration: none; transition: background .2s;
        }
        .btn-primary:hover { background: var(--accent-dark); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: .5rem;
          border: 1px solid rgba(240,232,216,.15); color: rgba(240,232,216,.6);
          padding: 1rem 1.75rem;
          font-family: 'Big Shoulders Display', sans-serif; font-weight: 700;
          font-size: 1rem; letter-spacing: .06em; text-transform: uppercase;
          background: none; cursor: pointer; text-decoration: none; transition: all .2s;
        }
        .btn-outline:hover { border-color: var(--accent); color: var(--cream); }
        .section-label { font-family: 'IBM Plex Mono', monospace; font-size: .65rem; letter-spacing: .2em; text-transform: uppercase; color: var(--accent); display: block; margin-bottom: 1.25rem; }
        .mod-item { transition: border-color .4s; }
        .mod-item:hover { border-color: rgba(200,100,40,.3) !important; }
        .corr-input {
          width: 100%; background: rgba(240,232,216,.04); border: 1px solid rgba(240,232,216,.1);
          color: var(--cream); font-family: 'Mulish', sans-serif; font-size: .9375rem;
          padding: 1rem 1.25rem; outline: none; transition: border-color .2s;
          -webkit-appearance: none; border-radius: 0;
        }
        .corr-input:focus { border-color: rgba(200,100,40,.5); }
        .corr-input::placeholder { color: rgba(240,232,216,.25); }
        .corr-input.erro { border-color: rgba(200,80,80,.5); }
        @media (max-width: 768px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .instructor-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .price-grid { grid-template-columns: 1fr !important; }
          .price-grid > div:first-child { grid-column: span 1 !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .modulos-grid { grid-template-columns: 1fr !important; grid-auto-rows: auto !important; }
          .modulos-grid > div { grid-column: span 1 !important; min-height: 180px; }
          .modulos-grid-2 { grid-template-columns: 1fr 1fr !important; }
          .nav-links-md { display: none !important; }
        }
      `}</style>


      {/* Three.js Canvas */}
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

      {/* Vignette */}
      <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,9,9,.7) 100%)', pointerEvents: 'none', zIndex: 2 }} />

      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* NAV */}
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backdropFilter: 'blur(20px)', background: 'rgba(10,9,9,.5)', borderBottom: '1px solid rgba(240,232,216,.06)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 2rem' }}>
            <div className="display" style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-.03em' }}>
              <span style={{ color: 'var(--accent)' }}>CORRE</span>
              <span style={{ color: 'rgba(240,232,216,.15)' }}>.</span>
              <span style={{ color: 'var(--accent)' }}>AI</span>
            </div>
            <div className="nav-links-md" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {['#metodo', '#modulos', '#resultado', '#preco'].map((href, i) => (
                <a key={href} href={href} className="mono" style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(240,232,216,.4)', textDecoration: 'none', transition: 'color .3s' }}
                   onMouseOver={e => (e.currentTarget.style.color = 'var(--cream)')}
                   onMouseOut={e => (e.currentTarget.style.color = 'rgba(240,232,216,.4)')}>
                  {['Método', 'Módulos', 'Resultado', 'Preço'][i]}
                </a>
              ))}
            </div>
            <a href="#lista" className="btn-primary" style={{ padding: '.5rem 1.25rem', fontSize: '.8rem' }}>Entrar na lista →</a>
          </div>
        </nav>

        {/* HERO */}
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '7rem 2rem 4rem' }}>
          <div style={{ maxWidth: 860, width: '100%', textAlign: 'center' }}>
            <div id="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', padding: '.4rem 1.1rem', border: '1px solid rgba(200,100,40,.3)', marginBottom: '2.5rem', opacity: 0, transform: 'translateY(16px)' }}>
              <div style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent)', animation: 'pulse 2s infinite' }} />
              <span className="mono" style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(240,232,216,.5)' }}>Lista de espera aberta · 2026</span>
            </div>

            <div id="hero-logo" className="display" style={{ fontWeight: 900, fontSize: 'clamp(80px, 18vw, 140px)', letterSpacing: '-.04em', lineHeight: .9, marginBottom: '.25rem', opacity: 0, transform: 'translateY(30px)' }}>
              <span style={{ color: 'var(--accent)' }}>CORRE</span>
              <span style={{ color: 'rgba(240,232,216,.15)' }}>.</span>
              <span style={{ color: 'var(--accent)' }}>AI</span>
            </div>

            <div id="hero-sub-label" className="mono" style={{ fontSize: '.7rem', letterSpacing: '.28em', textTransform: 'uppercase', color: 'rgba(240,232,216,.25)', marginBottom: '3rem', opacity: 0 }}>
              Formação · Yuri Correia
            </div>

            <h1 id="hero-h1" className="display" style={{ fontWeight: 900, fontSize: 'clamp(32px, 6vw, 52px)', lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1.5rem', opacity: 0, transform: 'translateY(24px)' }}>
              Um profissional.<br /><span style={{ color: 'var(--accent)' }}>Uma equipe inteira.</span>
            </h1>

            <p id="hero-desc" style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(240,232,216,.45)', maxWidth: 520, margin: '0 auto 2.5rem', fontWeight: 300, opacity: 0, transform: 'translateY(16px)' }}>
              O método exato que uso para entregar marca, site, estratégia e ranqueamento — sozinho, mais rápido que qualquer agência, usando IA do início ao fim.
            </p>

            <div id="hero-tools" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '.5rem', marginBottom: '2.5rem', opacity: 0 }}>
              {['Claude', 'Manus', 'Figma', 'ChatGPT', 'Gemini', 'xquads'].map(tool => (
                <span key={tool} className="mono" style={{ fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(240,232,216,.2)', border: '1px solid rgba(240,232,216,.07)', padding: '5px 12px' }}>{tool}</span>
              ))}
            </div>

            <div id="hero-ctas" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', opacity: 0 }}>
              <a href="#lista" className="btn-primary">Entrar na lista de espera →</a>
              <a href="#metodo" className="btn-outline">Ver o método</a>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(200,100,40,.5), transparent)', animation: 'scrollPulse 2s infinite' }} />
          </div>
        </section>

        {/* PROBLEMA */}
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span className="section-label">O problema real</span>
                <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  O mercado<br />ensina errado.
                </h2>
                <p style={{ fontSize: '.9375rem', lineHeight: 1.8, color: 'rgba(240,232,216,.45)', fontWeight: 300, marginBottom: '1.25rem' }}>
                  Todo curso de marketing digital te ensina a postar. Reelzinho, dancinha, carrossel motivacional. Isso funciona pra influencer. Não funciona pra profissional sério que quer cobrar R$7.000–R$14.000 por projeto.
                </p>
                <p style={{ fontSize: '.9375rem', lineHeight: 1.8, color: 'rgba(240,232,216,.45)', fontWeight: 300 }}>
                  O que ninguém ensina: como montar a <strong style={{ color: 'var(--cream)', fontWeight: 600 }}>estrutura completa</strong> que transforma um CNPJ invisível em autoridade digital — e fazer isso sozinho, em dias, não meses.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(240,232,216,.02)', border: '1px solid rgba(240,232,216,.07)', padding: '1.5rem' }}>
                  <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,232,216,.25)', marginBottom: '1rem' }}>Antes da formação</div>
                  {[
                    'Abre o Canva, faz um post genérico',
                    'Entrega só artes, sem estratégia',
                    'Cobra R$500–R$800 por mês',
                    'Cliente não vê resultado, cancela',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.875rem', color: 'rgba(240,232,216,.35)', marginBottom: '.5rem' }}>
                      <span style={{ color: 'rgba(200,80,80,.5)', fontSize: '1rem' }}>×</span> {item}
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(200,100,40,.04)', border: '1px solid rgba(200,100,40,.2)', padding: '1.5rem' }}>
                  <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>Depois do método CORRE.AI</div>
                  {[
                    'DNA de marca + identidade visual completa',
                    'Site Next.js que ranqueia no Google e na IA',
                    'Cobra R$7.000–R$14.000 por projeto',
                    'Cliente renova porque vê resultado real',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.875rem', color: 'rgba(240,232,216,.7)', marginBottom: '.5rem' }}>
                      <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTODO — SCROLL HORIZONTAL */}
        <section id="metodo" style={{ minHeight: '300vh', position: 'relative' }}>
          <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div id="method-inner" ref={methodRef} style={{ display: 'flex', gap: '3rem', padding: '0 8vw', willChange: 'transform', alignItems: 'stretch' }}>
              <div style={{ minWidth: '38vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
                <span className="section-label">O Método</span>
                <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Do zero ao<br /><span style={{ color: 'var(--accent)' }}>cliente fechado.</span>
                </h2>
                <p style={{ fontSize: '.9rem', lineHeight: 1.8, color: 'rgba(240,232,216,.4)', maxWidth: 320, fontWeight: 300 }}>
                  Cinco etapas que transformam qualquer empresa local em autoridade digital — entregues por um profissional solo com IA.
                </p>
              </div>
              {[
                { n: '01', title: 'A Pesquisa', desc: 'Google + Instagram + Claude co-work + ChatGPT + Gemini. Em 2 horas você tem o DNA completo da marca e sabe mais sobre o negócio do cliente do que ele mesmo.', tools: ['Claude', 'ChatGPT', 'Gemini', 'xquads'] },
                { n: '02', title: 'A Identidade', desc: 'Figma + Manus + IA para criar logo, paleta, tipografia, mockups e apresentação de marca. Entrega completa em horas. O que agência cobra R$8k e entrega em 30 dias.', tools: ['Figma', 'Manus', 'Claude'] },
                { n: '03', title: 'A Estrutura', desc: 'Site institucional + LP de conversão em Next.js com Claude Code. Sem saber programar. Carregamento rápido, indexável por IA, pronto para tráfego pago ou orgânico.', tools: ['Claude Code', 'Next.js', 'Vercel'] },
                { n: '04', title: 'O Ranqueamento', desc: 'SEO técnico + schema markup + GMB otimizado + GEO. Como fazer o ChatGPT recomendar seu cliente quando alguém perguntar pelo serviço. Resultado em 24–48h.', tools: ['SEO', 'GMB', 'GEO'] },
                { n: '05', title: 'O Cliente', desc: 'Como apresentar, como fechar, como montar recorrência. A estrutura completa de proposta + apresentação de resultados que transforma projeto único em contrato mensal.', tools: ['Proposta', 'Recorrência', 'Escala'] },
              ].map(card => (
                <div key={card.n} className="glass" style={{ minWidth: 320, maxWidth: 320, flexShrink: 0, padding: '2.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ width: 44, height: 44, border: '1px solid rgba(200,100,40,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="mono" style={{ fontSize: '.75rem', color: 'var(--accent)' }}>{card.n}</span>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,232,216,.25)', marginBottom: '.6rem' }}>Etapa {card.n}</div>
                    <h3 className="display" style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '.75rem' }}>{card.title}</h3>
                    <p style={{ fontSize: '.8125rem', lineHeight: 1.8, color: 'rgba(240,232,216,.4)', fontWeight: 300 }}>{card.desc}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: 'auto' }}>
                    {card.tools.map(t => (
                      <span key={t} className="mono" style={{ fontSize: '.55rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(240,232,216,.2)', border: '1px solid rgba(240,232,216,.06)', padding: '3px 8px' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <section id="modulos" style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <span className="section-label">9 Módulos</span>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '3rem' }}>
              O que você vai<br /><span style={{ color: 'var(--accent)' }}>dominar.</span>
            </h2>
            <div className="modulos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '220px', gap: '1rem' }}>
              {[
                { span: 4, n: '01', title: 'A Mentalidade do Profissional Solo com IA', desc: 'Como pensar como uma equipe inteira. Delegação de tarefas para IA, orquestração de ferramentas e o mindset que separa quem executa de quem entrega.' },
                { span: 2, n: '02', title: 'Pesquisa e DNA de Marca com IA', desc: 'Google + Claude + ChatGPT + Gemini. O protocolo completo de pesquisa.' },
                { span: 2, n: '03', title: 'Identidade Visual com Figma + IA', desc: 'Logo, paleta, tipografia, mockups. Entrega profissional em horas.' },
                { span: 2, n: '04', title: 'Site e LP em Next.js com Claude', desc: 'Sem saber programar. Do zero ao site publicado na Vercel.' },
                { span: 4, n: '05', title: 'SEO Técnico + GEO — Aparecer no Google e na IA', desc: 'Schema markup, Core Web Vitals, GMB e Generative Engine Optimization. Como fazer o ChatGPT recomendar seu cliente quando alguém perguntar pelo serviço.' },
              ].map(m => (
                <div key={m.n} className="mod-item glass" style={{ gridColumn: `span ${m.span}`, position: 'relative', overflow: 'hidden', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div className="mono" style={{ position: 'absolute', top: '1.75rem', left: '2rem', fontSize: '.55rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,232,216,.2)' }}>Módulo {m.n}</div>
                  <h3 className="display" style={{ fontSize: m.span === 4 ? '1.625rem' : '1.25rem', fontWeight: 900, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '.5rem' }}>{m.title}</h3>
                  <p style={{ fontSize: m.span === 4 ? '.8125rem' : '.75rem', color: 'rgba(240,232,216,.4)', lineHeight: 1.6, fontWeight: 300 }}>{m.desc}</p>
                </div>
              ))}
            </div>
            <div className="modulos-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '180px', gap: '1rem', marginTop: '1rem' }}>
              {[
                { n: '06', title: 'GMB — Google Business Profile', desc: 'Configuração completa + estratégia de reviews para dominar a busca local.' },
                { n: '07', title: 'Estratégia de Conteúdo e Carrosséis', desc: 'O método BrandsDecoded para criar conteúdo que vende, não só que engaja.' },
                { n: '08', title: 'Apresentação e Fechamento', desc: 'Como apresentar o trabalho, justificar o preço e fechar projetos de R$7k–R$14k.' },
                { n: '09', title: 'Escala e Recorrência', desc: 'Como transformar projeto único em contrato mensal. O modelo de renda previsível.' },
              ].map(m => (
                <div key={m.n} className="mod-item glass" style={{ position: 'relative', overflow: 'hidden', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <div className="mono" style={{ fontSize: '.55rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,232,216,.2)', marginBottom: '.5rem' }}>Módulo {m.n}</div>
                  <h3 className="display" style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '.35rem' }}>{m.title}</h3>
                  <p style={{ fontSize: '.75rem', color: 'rgba(240,232,216,.4)', lineHeight: 1.5, fontWeight: 300 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADO */}
        <section id="resultado" style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Resultado real</span>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '4rem' }}>
              O que muda quando você<br /><span style={{ color: 'var(--accent)' }}>tem estrutura.</span>
            </h2>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginBottom: '5rem' }}>
              {[
                { val: '24h', label: 'Para aparecer no Google após publicação' },
                { val: 'R$9k', label: 'Ticket médio de projeto com a estrutura completa' },
                { val: '1×', label: 'Profissional. Resultado de equipe inteira.' },
              ].map((s, i) => (
                <div key={i} className="stat-card" style={{ background: 'rgba(240,232,216,.025)', border: '1px solid rgba(240,232,216,.06)', padding: '3rem 2rem', borderLeft: i === 1 ? 'none' : undefined, borderRight: i === 1 ? 'none' : undefined }}>
                  <div className="display" style={{ fontSize: 'clamp(52px, 8vw, 80px)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-.04em', marginBottom: '.5rem' }}>{s.val}</div>
                  <div className="mono" style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(240,232,216,.3)' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ maxWidth: 680, margin: '0 auto', padding: '3rem', background: 'rgba(200,100,40,.05)', border: '1px solid rgba(200,100,40,.15)' }}>
              <blockquote className="display" style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                &ldquo;Enquanto o mercado debatia algoritmo do Instagram, meus clientes estavam sendo recomendados pelo ChatGPT.&rdquo;
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, background: 'rgba(200,100,40,.15)', border: '1px solid rgba(200,100,40,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="display" style={{ fontSize: '.875rem', fontWeight: 900 }}>YC</span>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '.875rem', fontWeight: 600 }}>Yuri Correia</div>
                  <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(240,232,216,.35)' }}>@ocorreia.com.br · Studio Brave</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTRUTOR */}
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div className="instructor-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Quem ensina</span>
              <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Yuri Correia</h2>
              <p style={{ fontSize: '.9375rem', lineHeight: 1.8, color: 'rgba(240,232,216,.45)', fontWeight: 300, marginBottom: '1.25rem' }}>
                5 anos construindo estruturas digitais para empresas B2B. Criador do sistema de agentes IA <strong style={{ color: 'var(--cream)' }}>xquads</strong> — 12 squads com 96+ agentes especializados — que uso todo dia com clientes reais.
              </p>
              <p style={{ fontSize: '.9375rem', lineHeight: 1.8, color: 'rgba(240,232,216,.45)', fontWeight: 300, marginBottom: '2rem' }}>
                Não sou professor. Sou o profissional que executa isso toda semana. O que você aprende na CORRE.AI é o que eu uso agora — não o que funcionava em 2022.
              </p>
              {[
                'Dono da Studio Brave — projetos de R$7k–R$14k',
                'Criador do sistema xquads (96+ agentes IA)',
                'Especialista em GEO — aparecer no ChatGPT e Gemini',
                'Stack: Claude Code + Next.js + Figma + Manus',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.875rem', color: 'rgba(240,232,216,.6)', marginBottom: '.75rem' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { handle: '@ocorreia.com.br', label: 'Instagram pessoal' },
                { handle: '@ostudiobrave', label: 'Studio Brave' },
              ].map(s => (
                <div key={s.handle} style={{ background: 'rgba(240,232,216,.02)', border: '1px solid rgba(240,232,216,.07)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>◈</span>
                  <div>
                    <div style={{ fontSize: '.875rem', fontWeight: 600 }}>{s.handle}</div>
                    <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(240,232,216,.3)' }}>{s.label}</div>
                  </div>
                </div>
              ))}
              <div style={{ background: 'rgba(200,100,40,.04)', border: '1px solid rgba(200,100,40,.15)', padding: '1.5rem' }}>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '.75rem' }}>Por que criou essa formação</div>
                <p style={{ fontSize: '.8125rem', lineHeight: 1.7, color: 'rgba(240,232,216,.5)', fontWeight: 300 }}>
                  Dei uma aula para um profissional com 2 anos de experiência em tráfego e percebi que ele não sabia nada de estrutura. Sabia impulsionar. Não sabia construir. A CORRE.AI existe para resolver isso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PREÇO */}
        <section id="preco" style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Investimento</span>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1rem' }}>Preço de lançamento.</h2>
            <p style={{ fontSize: '.9375rem', color: 'rgba(240,232,216,.4)', maxWidth: 440, margin: '0 auto 4rem', lineHeight: 1.7, fontWeight: 300 }}>
              Quem está na lista recebe acesso antecipado com o menor preço que essa formação vai ter.
            </p>
            <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
              <div style={{ gridColumn: 'span 2', background: 'rgba(200,100,40,.04)', border: '1px solid rgba(200,100,40,.2)', padding: '3rem', textAlign: 'left', position: 'relative' }}>
                <div style={{ position: 'absolute', top: -1, left: '2rem', background: 'var(--accent)', padding: '.25rem .875rem' }}>
                  <span className="mono" style={{ fontSize: '.55rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--bg)', fontWeight: 600 }}>Acesso completo</span>
                </div>
                <h3 className="display" style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '2rem', marginTop: '.5rem' }}>CORRE.AI — Formação</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '2rem' }}>
                  {[
                    '9 módulos completos em vídeo',
                    'Templates de DNA e proposta',
                    'Acesso ao sistema xquads',
                    'Checklist de entrega completa',
                    'Projeto prático com cliente real',
                    'Comunidade privada de alunos',
                    'Prompts e fluxos de trabalho',
                    'Atualizações inclusas',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem', fontSize: '.8125rem', color: 'rgba(240,232,216,.65)' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span> {item}
                    </div>
                  ))}
                </div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(240,232,216,.2)' }}>
                  Ferramentas: Claude · Manus · Figma · ChatGPT · Gemini · xquads · Next.js · Vercel
                </div>
              </div>
              <div style={{ background: 'var(--bg)', border: '1px solid rgba(240,232,216,.08)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', gap: '1.5rem' }}>
                <div>
                  <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(240,232,216,.25)', marginBottom: '.5rem' }}>Lista de espera</div>
                  <div className="display" style={{ fontSize: 'clamp(48px, 8vw, 64px)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-.04em' }}>?</div>
                  <div style={{ fontSize: '.8125rem', color: 'rgba(240,232,216,.3)', marginTop: '.5rem', fontWeight: 300 }}>Você recebe o preço<br />antes de todo mundo.</div>
                </div>
                <a href="#lista" className="btn-primary" style={{ justifyContent: 'center' }}>Quero o preço →</a>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(240,232,216,.2)', lineHeight: 1.6 }}>
                  Sem spam.<br />Só a data, o preço<br />e o conteúdo completo.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Perguntas frequentes</span>
            <h2 className="display" style={{ fontSize: 'clamp(32px, 5vw, 46px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
              Antes de entrar<br /><span style={{ color: 'var(--accent)' }}>na lista.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ border: '1px solid rgba(240,232,216,.07)' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'none', border: 'none', color: 'var(--cream)', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
                    <span className="display" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-.01em', textTransform: 'uppercase' }}>{faq.q}</span>
                    <span style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <p style={{ padding: '0 1.5rem 1.25rem', fontSize: '.875rem', lineHeight: 1.75, color: 'rgba(240,232,216,.5)', fontWeight: 300 }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTA DE ESPERA */}
        <section id="lista" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div style={{ maxWidth: 520, width: '100%', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', padding: '.4rem 1.1rem', border: '1px solid rgba(200,100,40,.25)', marginBottom: '2rem' }}>
              <div style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent)', animation: 'pulse 2s infinite' }} />
              <span className="mono" style={{ fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(240,232,216,.4)' }}>Lista de espera aberta</span>
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Você recebe<br /><span style={{ color: 'var(--accent)' }}>primeiro.</span>
            </h2>
            <p style={{ fontSize: '.9375rem', lineHeight: 1.75, color: 'rgba(240,232,216,.4)', marginBottom: '2.5rem', fontWeight: 300 }}>
              Data, preço e conteúdo completo — antes de qualquer anúncio público.
            </p>

            {!enviado ? (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1rem' }}>
                  <input className={`corr-input${erros && !nome.trim() ? ' erro' : ''}`} type="text" placeholder="Seu nome" value={nome} onChange={e => setNome(e.target.value)} onKeyDown={e => e.key === 'Enter' && enviar()} />
                  <input className={`corr-input${erros && !whats.trim() ? ' erro' : ''}`} type="tel" placeholder="WhatsApp (com DDD)" value={whats} onChange={e => setWhats(e.target.value)} onKeyDown={e => e.key === 'Enter' && enviar()} />
                  <button onClick={enviar} className="btn-primary" style={{ justifyContent: 'center', fontSize: '1.0625rem', padding: '1.125rem' }}>
                    Entrar na lista de espera →
                  </button>
                </div>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(240,232,216,.18)', lineHeight: 1.8 }}>
                  Sem spam. Zero enrolação.<br />Só o que importa, quando importa.
                </div>
              </>
            ) : (
              <div style={{ background: 'rgba(200,100,40,.07)', border: '1px solid rgba(200,100,40,.2)', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>✓</div>
                <h3 className="display" style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-.01em', textTransform: 'uppercase', marginBottom: '.5rem' }}>Você está na lista.</h3>
                <p style={{ fontSize: '.875rem', color: 'rgba(240,232,216,.45)', lineHeight: 1.6 }}>Quando abrir a formação, você é o primeiro a saber.<br />Fique de olho no WhatsApp.</p>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '2rem', borderTop: '1px solid rgba(240,232,216,.04)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.75rem', textAlign: 'center' }}>
            <div className="display" style={{ fontSize: '1.125rem', fontWeight: 900, letterSpacing: '-.03em' }}>
              <span style={{ color: 'var(--accent)' }}>CORRE</span>
              <span style={{ color: 'rgba(240,232,216,.15)' }}>.</span>
              <span style={{ color: 'var(--accent)' }}>AI</span>
            </div>
            <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(240,232,216,.2)' }}>@ocorreia.com.br · Studio Brave · 2026</div>
          </div>
        </footer>

      </div>
    </>
  )
}
