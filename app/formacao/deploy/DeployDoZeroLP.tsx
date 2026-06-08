'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const faqs = [
  { q: 'Precisa saber programar?', a: 'Não. O Claude Code escreve o código. Você aprende a dar as instruções certas, revisar o resultado e entregar. Se você sabe descrever o que o cliente precisa, você consegue construir.' },
  { q: 'Para quem é?', a: 'Pra quem quer usar IA de verdade pra construir sites e LPs profissionais. Freelancers, designers, prestadores de serviço ou qualquer pessoa que quer aprender o processo completo — do zero ao cliente no ar.' },
  { q: 'O que é GEO?', a: 'É otimização para aparecer nas respostas de IAs como ChatGPT e Gemini. A aula mostra o que implementar e por que funciona — sem exagero, sem promessa de milagre.' },
  { q: 'Qual a diferença de WordPress ou Wix?', a: 'Next.js gera HTML limpo, carrega rápido e é muito mais fácil de otimizar para SEO técnico. O Claude Code cuida do código — você só precisa saber o que pedir.' },
  { q: 'O que vem junto no produto?', a: 'Além das 6 aulas, você recebe as skills e agentes que uso no dia a dia com clientes reais. Não é só o conteúdo — é o sistema completo que uso pra entregar.' },
]

const modulos = [
  { n: '01', span: 4, title: 'A Stack do Zero', desc: 'Por que Next.js e não WordPress ou Wix. Como o Claude Code entra no processo. Estrutura base de um projeto real — do terminal ao primeiro deploy. Você entende o que está fazendo antes de começar.' },
  { n: '02', span: 2, title: 'Site Institucional', desc: 'Do briefing ao site no ar. Seções, copy, imagens, domínio. Com SEO técnico configurado desde o início — schema, sitemap, robots, tudo pronto no primeiro commit.' },
  { n: '03', span: 2, title: 'SEO Técnico', desc: 'O que o Google verifica antes de ranquear. Core Web Vitals, meta tags, estrutura de headings. Como implementar tudo em menos de 1 hora usando IA.' },
  { n: '04', span: 2, title: 'GEO — Aparecer na IA', desc: 'Como os modelos de linguagem decidem o que recomendar. O que implementar pra o cliente aparecer quando alguém pergunta pro ChatGPT ou Gemini sobre o serviço dele.' },
  { n: '05', span: 2, title: 'Landing Page', desc: 'Estrutura de seções, copy e CTA que transforma visitante em lead. O que converte e o que mata conversão. Com exemplos de LPs reais que estão rodando.' },
  { n: '06', span: 4, title: 'Entrega e Painel', desc: 'Como fazer o handoff pro cliente. Painel de blog onde ele publica sem te chamar no WhatsApp. E como precificar o seu trabalho — do projeto avulso ao serviço recorrente.' },
]

const diferenciais = [
  { label: 'Stack profissional', desc: 'Next.js, Claude Code, Vercel, Cloudflare. A mesma stack que uso em projetos reais — não template grátis, não Wix, não arranhão no WordPress.' },
  { label: 'Processo completo', desc: 'Do briefing ao site no ar. SEO técnico, GEO, landing page, painel de blog. Não é "crie uma página bonita" — é o projeto entregue do começo ao fim.' },
  { label: 'Skills incluídas', desc: 'Você recebe as skills e agentes que uso no dia a dia. Não só aprende o conteúdo — leva o sistema que acelera cada entrega.' },
  { label: 'Sem precisar programar', desc: 'Claude Code escreve o código. Você direciona, revisa e entrega. Cada passo mostrado ao vivo com projeto real, na ordem certa.' },
]

export default function DeployDoZeroLP() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const router = useRouter()
  const [nome, setNome] = useState('')
  const [whats, setWhats] = useState('')
  const [erros, setErros] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return
    let cleanupFn: (() => void) | undefined

    const init = async () => {
      const THREE = await import('three')
      const canvas = canvasRef.current!
      const scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x020617, 0.025)
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.set(0, 0, 9)
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping

      scene.add(new THREE.AmbientLight(0x0d0d2b, 0.8))
      const mainLight = new THREE.DirectionalLight(0xc7d2fe, 1.6)
      mainLight.position.set(5, 8, 5)
      scene.add(mainLight)
      const accentLight = new THREE.PointLight(0x6366f1, 5, 24)
      accentLight.position.set(-3, 2, 4)
      scene.add(accentLight)
      const accentLight2 = new THREE.PointLight(0xa855f7, 3, 18)
      accentLight2.position.set(4, -2, 2)
      scene.add(accentLight2)

      const group = new THREE.Group()
      scene.add(group)
      group.add(new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2.2, 1)), new THREE.LineBasicMaterial({ color: 0x818cf8, opacity: 0.2, transparent: true })))
      group.add(new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.DodecahedronGeometry(1.4, 0)), new THREE.LineBasicMaterial({ color: 0x4f46e5, opacity: 0.14, transparent: true })))
      group.add(new THREE.Mesh(new THREE.OctahedronGeometry(0.9, 0), new THREE.MeshStandardMaterial({ color: 0x020617, metalness: 0.95, roughness: 0.08, emissive: 0x6366f1, emissiveIntensity: 0.08 })))
      const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.014, 8, 72), new THREE.MeshStandardMaterial({ color: 0x818cf8, emissive: 0x6366f1, emissiveIntensity: 0.4, metalness: 1, roughness: 0.15 }))
      ring.rotation.x = Math.PI / 2
      group.add(ring)
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(4.0, 0.007, 8, 90), new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0xa855f7, emissiveIntensity: 0.2, metalness: 1, roughness: 0.3 }))
      ring2.rotation.x = Math.PI / 3
      ring2.rotation.y = Math.PI / 5
      group.add(ring2)

      const dummy = new THREE.Object3D()
      const count = 200
      const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.02, 6, 6), new THREE.MeshStandardMaterial({ color: 0x818cf8, emissive: 0x6366f1, emissiveIntensity: 0.5, metalness: 0.9, roughness: 0.1 }), count)
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count)
        const theta = Math.sqrt(count * Math.PI) * phi
        const r = 4.2 + (Math.random() - 0.5) * 0.8
        dummy.position.set(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi))
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
      }
      scene.add(mesh)

      let t = 0
      let animId: number
      const animate = () => {
        animId = requestAnimationFrame(animate)
        t += 0.004
        group.rotation.y = t * 0.35
        group.rotation.x = Math.sin(t * 0.2) * 0.12
        mesh.rotation.y = -t * 0.12
        renderer.render(scene, camera)
      }
      animate()

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', onResize)
      cleanupFn = () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(animId); renderer.dispose() }
    }

    init()
    return () => cleanupFn?.()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nome.trim() || !whats.trim()) { setErros(true); return }
    try {
      await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nome, whats, produto: 'deploy-do-zero' }) })
    } catch {}
    router.push('/formacao/deploy/obrigado')
  }

  const acc = '#818cf8'
  const accBright = '#6366f1'
  const bg = '#020617'

  return (
    <div style={{ background: bg, color: '#e2e8f0', fontFamily: 'var(--font-body), sans-serif', overflowX: 'hidden' }}>
      <style>{`
        :root { --accent: ${acc}; --accent-bright: ${accBright}; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .display { font-family: var(--font-display), sans-serif; font-weight: 700; letter-spacing: -.03em; }
        .mono { font-family: var(--font-mono), monospace; }
        .section-label { font-family: var(--font-mono), monospace; font-size: .65rem; letter-spacing: .2em; text-transform: uppercase; color: var(--accent); display: block; margin-bottom: 1.25rem; }

        /* Shiny CTA button — from template */
        @property --ga { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
        .btn-shiny {
          --ga: 0deg;
          position: relative; overflow: hidden; border-radius: 9999px;
          padding: 14px 32px; font-size: .95rem; font-weight: 600; color: #fff;
          background: linear-gradient(#0f172a, #0f172a) padding-box,
            conic-gradient(from var(--ga), transparent 0%, #6366f1 5%, #a5b4fc 15%, #6366f1 30%, transparent 40%) border-box;
          border: 2px solid transparent; cursor: pointer; text-decoration: none;
          animation: spin-border 2.5s linear infinite; display: inline-block;
          font-family: var(--font-body), sans-serif; transition: box-shadow .3s;
          isolation: isolate;
        }
        .btn-shiny:hover { box-shadow: 0 0 32px rgba(99,102,241,.4); }
        .btn-shiny::after {
          content: ''; position: absolute; inset: 0; border-radius: inherit; z-index: -1;
          background: linear-gradient(-50deg, transparent, #4f46e5, transparent);
          mask-image: radial-gradient(circle at bottom, transparent 40%, black);
          opacity: .5; animation: shimmer 4s linear infinite;
        }
        .btn-shiny span { position: relative; z-index: 2; }
        @keyframes spin-border { to { --ga: 360deg; } }
        @keyframes shimmer { to { transform: rotate(360deg); } }

        .btn-ghost { color: rgba(226,232,240,.45); font-size: .95rem; font-weight: 500; background: rgba(255,255,255,.04); cursor: pointer; text-decoration: none; transition: all .2s; border: 1px solid rgba(226,232,240,.1); padding: 13px 26px; border-radius: 9999px; display: inline-flex; align-items: center; gap: 8px; }
        .btn-ghost:hover { background: rgba(255,255,255,.08); color: #e2e8f0; border-color: rgba(226,232,240,.2); }

        details summary::-webkit-details-marker { display: none; }

        /* Gradient blur nav overlay */
        .nav-blur-overlay { position: fixed; top: 0; left: 0; right: 0; height: 80px; z-index: 99; pointer-events: none;
          background: linear-gradient(to bottom, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.6) 60%, transparent 100%);
          backdrop-filter: blur(0px);
        }

        /* Card glow */
        .card-hover { transition: border-color .3s, box-shadow .3s; }
        .card-hover:hover { border-color: rgba(129,140,248,.3) !important; box-shadow: 0 0 30px rgba(99,102,241,.08); }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .modulos-grid > div { grid-column: span 1 !important; }
          .modulos-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* Background radial glows */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '30%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.55 }} />

      {/* Gradient blur nav overlay */}
      <div className="nav-blur-overlay" />

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1.25rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="mono" style={{ fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(226,232,240,.4)' }}>Deploy do 0 · Yuri Correia</span>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[['#metodo', 'Como funciona'], ['#modulos', 'Módulos']].map(([href, label]) => (
            <a key={href} href={href} className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(226,232,240,.35)', textDecoration: 'none', transition: 'color .3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = acc)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,232,240,.35)')}>
              {label}
            </a>
          ))}
          <a href="#lista" style={{ background: 'rgba(99,102,241,.15)', border: '1px solid rgba(129,140,248,.25)', color: acc, fontSize: '.75rem', fontWeight: 600, padding: '7px 16px', borderRadius: 999, textDecoration: 'none', transition: 'all .2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,.25)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,.15)' }}>
            Entrar na lista →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1, padding: '7rem 2rem 4rem' }}>
        <div style={{ maxWidth: 820, width: '100%', textAlign: 'center' }}>
          <span className="mono" style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(226,232,240,.4)' }}>Lista de espera aberta · 2026</span>
          <h1 className="display" style={{ fontWeight: 900, fontSize: 'clamp(40px, 7.5vw, 72px)', lineHeight: .9, letterSpacing: '-.025em', textTransform: 'uppercase', margin: '2rem 0 1.5rem' }}>
            Site. LP. SEO.<br />
            <span style={{ color: acc }}>Do zero ao ar.</span><br />
            Com IA.
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(226,232,240,.55)', maxWidth: 560, margin: '0 auto 1rem', lineHeight: 1.65 }}>
            Aprenda o processo completo que uso com clientes reais — Next.js, Claude Code, SEO técnico e GEO. Do briefing ao site no ar, sem precisar programar.
          </p>
          <p className="mono" style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(226,232,240,.2)', marginBottom: '3rem' }}>
            Não é tutorial. É o processo de verdade.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#lista" className="btn-shiny"><span>Quero entrar na lista</span></a>
            <a href="#metodo" className="btn-ghost">Como funciona →</a>
          </div>
        </div>
      </section>

      {/* Mac Window — Painel Admin */}
      <section style={{ padding: '0 1rem 5rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ transform: 'perspective(1200px) rotateX(4deg)', transformOrigin: 'top center', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(226,232,240,.1)', boxShadow: '0 40px 120px rgba(0,0,0,.8), 0 0 60px rgba(99,102,241,.1)', background: 'rgba(15,16,30,.95)' }}>

            {/* Barra de título */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'rgba(15,18,35,.9)', borderBottom: '1px solid rgba(226,232,240,.06)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ff5f57','#febc2e','#34d399'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
              </div>
              <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', color: 'rgba(226,232,240,.3)', textTransform: 'uppercase' }}>jacolocadora.com.br/seoblog</div>
              <div style={{ width: 52 }} />
            </div>

            {/* Conteúdo do app */}
            <div style={{ display: 'flex', height: 480 }}>

              {/* Sidebar */}
              <div style={{ width: 200, borderRight: '1px solid rgba(226,232,240,.06)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: 4, background: 'rgba(10,12,24,.8)', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', marginBottom: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(129,140,248,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: acc, fontSize: 12, fontWeight: 900 }}>J</span>
                  </div>
                  <div>
                    <div style={{ color: '#f0f4f0', fontSize: 12, fontWeight: 700 }}>Blog Admin</div>
                    <div className="mono" style={{ color: 'rgba(226,232,240,.3)', fontSize: 10 }}>Jaco Locação</div>
                  </div>
                </div>
                {[
                  { icon: '▤', label: 'Posts', active: true },
                  { icon: '+', label: 'Novo Post', active: false },
                  { icon: '↗', label: 'Ver Site', active: false },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, background: item.active ? 'rgba(129,140,248,.12)' : 'transparent', color: item.active ? acc : 'rgba(226,232,240,.4)', fontSize: 12, cursor: 'pointer' }}>
                    <span style={{ fontSize: 14 }}>{item.icon}</span>{item.label}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ color: '#f0f4f0', fontWeight: 700, fontSize: 15 }}>Posts Publicados</span>
                  <div style={{ background: acc, color: '#060a10', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 6, cursor: 'pointer' }}>+ Novo Post</div>
                </div>
                {[
                  { title: 'Plataforma articulada 12m: trabalho em altura não combina com improviso', cat: 'Equipamentos', date: '04 Jun 2026', status: true },
                  { title: 'Plataforma Articulada 15m: Versatilidade e Segurança em Obras', cat: 'Equipamentos', date: '20 Abr 2026', status: true },
                  { title: 'Locação de Plataforma Elevatória em SC: Guia Completo', cat: 'Dicas', date: '20 Abr 2026', status: true },
                  { title: 'Preço da Plataforma Tesoura 8 Metros', cat: 'Equipamentos', date: '20 Abr 2026', status: true },
                ].map((post, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 8, background: 'rgba(226,232,240,.03)', border: '1px solid rgba(226,232,240,.05)', cursor: 'pointer', transition: 'all .2s' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#f0f4f0', fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.title}</div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                        <span className="mono" style={{ color: 'rgba(226,232,240,.3)', fontSize: 10 }}>{post.cat}</span>
                        <span className="mono" style={{ color: 'rgba(226,232,240,.2)', fontSize: 10 }}>·</span>
                        <span className="mono" style={{ color: 'rgba(226,232,240,.3)', fontSize: 10 }}>{post.date}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
                      <span className="mono" style={{ color: '#34d399', fontSize: 10 }}>Publicado</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right panel — novo post form preview */}
              <div style={{ width: 260, borderLeft: '1px solid rgba(226,232,240,.06)', padding: '1.25rem', background: 'rgba(10,12,24,.8)', display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
                <div style={{ color: '#f0f4f0', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Novo Post</div>
                <div>
                  <div className="mono" style={{ color: 'rgba(226,232,240,.3)', fontSize: 10, marginBottom: 5, letterSpacing: '.1em', textTransform: 'uppercase' }}>Título</div>
                  <div style={{ background: 'rgba(226,232,240,.04)', border: '1px solid rgba(226,232,240,.08)', borderRadius: 6, padding: '7px 10px', color: 'rgba(226,232,240,.5)', fontSize: 12 }}>Como escolher o equipamento...</div>
                </div>
                <div>
                  <div className="mono" style={{ color: 'rgba(226,232,240,.3)', fontSize: 10, marginBottom: 5, letterSpacing: '.1em', textTransform: 'uppercase' }}>Conteúdo</div>
                  <div style={{ background: 'rgba(226,232,240,.04)', border: `1px solid rgba(129,140,248,.2)`, borderRadius: 6, padding: '7px 10px', fontSize: 11, minHeight: 80 }}>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 6, borderBottom: '1px solid rgba(226,232,240,.06)', paddingBottom: 6 }}>
                      {['H2','B','I','• Lista'].map(b => <span key={b} style={{ color: acc, fontSize: 10, fontWeight: 700, padding: '2px 6px', background: 'rgba(129,140,248,.1)', borderRadius: 4, cursor: 'pointer' }}>{b}</span>)}
                    </div>
                    <span style={{ color: 'rgba(226,232,240,.35)', fontSize: 11 }}>Cole do Google Docs aqui — H2 e formatação preservados...</span>
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ color: 'rgba(226,232,240,.3)', fontSize: 10, marginBottom: 5, letterSpacing: '.1em', textTransform: 'uppercase' }}>Keyword Foco</div>
                  <div style={{ background: 'rgba(226,232,240,.04)', border: '1px solid rgba(226,232,240,.08)', borderRadius: 6, padding: '7px 10px', color: 'rgba(226,232,240,.35)', fontSize: 11 }}>aluguel plataforma elevatória SC</div>
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 'auto' }}>
                  <div style={{ flex: 1, background: 'rgba(226,232,240,.05)', border: '1px solid rgba(226,232,240,.1)', borderRadius: 6, padding: '7px', textAlign: 'center', color: 'rgba(226,232,240,.4)', fontSize: 11, cursor: 'pointer' }}>Rascunho</div>
                  <div style={{ flex: 1, background: acc, borderRadius: 6, padding: '7px', textAlign: 'center', color: '#060a10', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>Publicar</div>
                </div>
              </div>

            </div>
          </div>
          <p className="mono" style={{ textAlign: 'center', fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(226,232,240,.18)', marginTop: '1.25rem' }}>
            Painel admin real entregue com cada projeto · Blog com SEO técnico · O gestor publica sem te chamar
          </p>
        </div>
      </section>

      {/* Carrossel — projetos reais */}
      <section style={{ padding: '3rem 0 4rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <p className="mono" style={{ textAlign: 'center', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(226,232,240,.25)', marginBottom: '1.5rem' }}>
          Sites reais entregues com esse método
        </p>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
            will-change: transform;
          }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div style={{ maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}>
          <div className="marquee-track">
            {/* Dois sets idênticos — a animação move exatamente -50% (1 set) para loop perfeito */}
            {[0, 1].map(set => (
              <div key={set} style={{ display: 'flex', gap: '1.25rem', paddingRight: '1.25rem' }}>
                {[
                  'TornoMetal', 'Jaco Locação', 'Sol Center', 'FA Limpeza Profissional',
                  'PR Bombas', 'Studio Brave', 'Dr. Mateus Pellizzaro',
                  'Corazza Investimentos', 'Vetsul Vet',
                ].map(name => (
                  <div key={name} style={{
                    padding: '9px 22px',
                    border: '1px solid rgba(226,232,240,.08)',
                    borderRadius: 999,
                    color: 'rgba(226,232,240,.38)',
                    fontSize: 13,
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    background: 'rgba(226,232,240,.02)',
                    letterSpacing: '.01em',
                  }}>
                    {name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema / Solução */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span className="section-label">O problema</span>
              <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Todo mundo acha<br />que dá pra fazer.<br /><span style={{ color: acc }}>Ninguém mostra como.</span>
              </h2>
              <p style={{ fontSize: '.95rem', color: 'rgba(226,232,240,.45)', lineHeight: 1.7 }}>
                Tem mil vídeos de "criei meu site com IA em 5 minutos". Nenhum mostra o processo completo — do briefing ao site no ar, com SEO técnico, LP que converte e o cliente atualizando sozinho.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ padding: '1.75rem', border: '1px solid rgba(226,232,240,.06)', background: 'rgba(226,232,240,.02)' }}>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(226,232,240,.25)', marginBottom: '1rem' }}>Hoje, sem o Deploy do 0</div>
                {[
                  'Vê tutorial, começa do zero, para no meio',
                  'Entrega site sem SEO, sem estrutura, sem painel',
                  'Cliente chama no WhatsApp pra trocar uma foto',
                  'Não sabe explicar por que vale mais do que um template',
                  'Fica preso em ferramenta sem entender o processo',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '.75rem', marginBottom: '.65rem', color: 'rgba(226,232,240,.35)', fontSize: '.9rem', lineHeight: 1.5 }}>
                    <span style={{ color: 'rgba(226,232,240,.2)', flexShrink: 0 }}>×</span>{item}
                  </div>
                ))}
              </div>
              <div style={{ padding: '1.75rem', border: '1px solid rgba(129,140,248,.2)', background: 'rgba(99,102,241,.04)' }}>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: acc, marginBottom: '1rem' }}>Com o Deploy do 0</div>
                {[
                  'Segue o processo do briefing ao site no ar',
                  'SEO técnico configurado desde o primeiro commit',
                  'Cliente atualiza o blog sozinho — sem te chamar',
                  'Sabe o que entrega e por que tem valor',
                  'Leva as skills e agentes que aceleram tudo',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '.75rem', marginBottom: '.65rem', color: 'rgba(226,232,240,.75)', fontSize: '.9rem', lineHeight: 1.5 }}>
                    <span style={{ color: acc, flexShrink: 0 }}>→</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="metodo" style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <span className="section-label">Como funciona</span>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '3rem', maxWidth: 500 }}>
            4 passos.<br /><span style={{ color: acc }}>Estrutura no ar.</span>
          </h2>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {[
              { n: '01', title: 'Aprende a stack', desc: 'Por que Next.js, como o Claude Code entra no processo, estrutura de um projeto real. Você entende o que está fazendo antes de escrever a primeira linha.' },
              { n: '02', title: 'Constrói o site', desc: 'Do briefing ao ar. Claude Code gera o código, você direciona. Seções, copy, SEO técnico — tudo junto, no projeto do cliente de verdade.' },
              { n: '03', title: 'Adiciona a LP e o GEO', desc: 'Landing page com estrutura que converte, mais configuração de GEO. A aula mostra o que implementar e por que funciona — sem enrolação.' },
              { n: '04', title: 'Entrega com painel', desc: 'Handoff pro cliente, painel de blog onde ele publica sozinho, treinamento rápido. Você fecha o projeto — e o cliente fica independente.' },
            ].map(card => (
              <div key={card.n} style={{ padding: '2rem', border: '1px solid rgba(226,232,240,.06)', background: 'rgba(226,232,240,.015)', transition: 'border-color .3s, background .3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(163,230,53,.3)'; e.currentTarget.style.background = 'rgba(99,102,241,.04)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(226,232,240,.06)'; e.currentTarget.style.background = 'rgba(226,232,240,.015)' }}>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: acc, marginBottom: '.6rem' }}>0{card.n.slice(-1)}</div>
                <h3 className="display" style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '.75rem' }}>{card.title}</h3>
                <p style={{ fontSize: '.9rem', color: 'rgba(226,232,240,.5)', lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <span className="section-label">O que você aprende</span>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '3rem' }}>
            6 aulas.<br /><span style={{ color: acc }}>Menos de 70 min.</span><br />Estrutura no ar.
          </h2>
          <div className="modulos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(226,232,240,.04)' }}>
            {modulos.map(m => (
              <div key={m.n} style={{ gridColumn: `span ${m.span}`, padding: '2rem', background: bg, transition: 'background .3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(99,102,241,.04)')}
                onMouseLeave={e => (e.currentTarget.style.background = bg)}>
                <div className="mono" style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(226,232,240,.2)', marginBottom: '.5rem' }}>Aula {m.n}</div>
                <h3 className="display" style={{ fontSize: '1.15rem', fontWeight: 900, letterSpacing: '-.01em', textTransform: 'uppercase', marginBottom: '.6rem' }}>{m.title}</h3>
                <p style={{ fontSize: '.85rem', color: 'rgba(226,232,240,.4)', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <span className="section-label">Por que é diferente</span>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', fontWeight: 900, lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '3rem' }}>
            Não é curso.<br /><span style={{ color: acc }}>É o processo</span><br />que uso hoje.
          </h2>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(226,232,240,.04)' }}>
            {diferenciais.map(d => (
              <div key={d.label} style={{ padding: '2rem', background: bg }}>
                <div style={{ width: 28, height: 2, background: acc, marginBottom: '1.25rem' }} />
                <h3 className="display" style={{ fontSize: '1.05rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-.01em', marginBottom: '.6rem' }}>{d.label}</h3>
                <p style={{ fontSize: '.85rem', color: 'rgba(226,232,240,.4)', lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(226,232,240,.04)' }}>
            {[
              { val: '6', label: 'Módulos. Site, LP, SEO, GEO, entrega, precificação. Sem enrolação.' },
              { val: '< 70', label: 'Minutos de conteúdo total. Direto ao ponto, com projeto real do começo ao fim.' },
              { val: 'R$297', label: 'Preço de acesso completo — com as skills e agentes incluídos.' },
            ].map(s => (
              <div key={s.val} style={{ padding: '2.5rem 2rem', background: bg }}>
                <div className="display" style={{ fontSize: 'clamp(42px, 6vw, 64px)', fontWeight: 900, color: acc, lineHeight: 1, marginBottom: '.5rem' }}>{s.val}</div>
                <div style={{ fontSize: '.85rem', color: 'rgba(226,232,240,.4)', lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autor */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <span className="section-label">Quem ensina</span>
          <blockquote style={{ fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', color: 'rgba(226,232,240,.65)', lineHeight: 1.65, marginBottom: '2rem', borderLeft: `2px solid ${acc}`, paddingLeft: '1.5rem' }}>
            Não sou professor. Sou o profissional que faz isso toda semana, com clientes reais. O que você aprende no Deploy do 0 é o que eu uso hoje — não teoria, não o que funcionava em 2022.
          </blockquote>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            {[
              'SEO técnico e GEO implementado em produção — Sol Center, Jaco Locação, PR Bombas',
              'Sites e LPs entregues com Claude Code, Next.js e Vercel para clientes reais',
              'Constrói a stack do zero toda semana — não ensina o que leu, ensina o que usa',
              'Fundador da Studio Brave — agência especializada em estrutura digital',
            ].map((item, i) => (
              <div key={i} className="mono" style={{ fontSize: '.7rem', letterSpacing: '.06em', color: 'rgba(226,232,240,.35)', display: 'flex', gap: '.75rem', lineHeight: 1.6 }}>
                <span style={{ color: acc, flexShrink: 0 }}>→</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <span className="section-label">Dúvidas</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(226,232,240,.04)' }}>
            {faqs.map((item, i) => (
              <details key={i} style={{ background: bg, padding: '1.5rem 2rem', transition: 'background .3s' }}
                onToggle={e => { e.currentTarget.style.background = e.currentTarget.open ? 'rgba(99,102,241,.04)' : bg }}>
                <summary className="display" style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-.01em', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  {item.q}
                  <span style={{ color: acc, fontSize: '1.4rem', flexShrink: 0, lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ fontSize: '.9rem', color: 'rgba(226,232,240,.5)', lineHeight: 1.7, marginTop: '1rem' }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de espera */}
      <section id="lista" style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Lista de espera</span>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 900, lineHeight: .93, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Quem entra<br /><span style={{ color: acc }}>na lista</span><br />paga menos.
          </h2>
          <p style={{ fontSize: '.9rem', color: 'rgba(226,232,240,.4)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Quem está na lista recebe acesso antes de qualquer anúncio — com o menor preço que esse treinamento vai ter.
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome"
                style={{ background: 'rgba(226,232,240,.04)', border: `1px solid ${erros && !nome.trim() ? 'rgba(239,68,68,.5)' : 'rgba(226,232,240,.1)'}`, color: '#f0f4f0', padding: '1rem 1.25rem', fontSize: '1rem', outline: 'none', fontFamily: 'inherit', borderRadius: 2 }} />
              <input value={whats} onChange={e => setWhats(e.target.value)} placeholder="WhatsApp (com DDD)"
                style={{ background: 'rgba(226,232,240,.04)', border: `1px solid ${erros && !whats.trim() ? 'rgba(239,68,68,.5)' : 'rgba(226,232,240,.1)'}`, color: '#f0f4f0', padding: '1rem 1.25rem', fontSize: '1rem', outline: 'none', fontFamily: 'inherit', borderRadius: 2 }} />
              {erros && (!nome.trim() || !whats.trim()) && (
                <p className="mono" style={{ fontSize: '.65rem', color: 'rgba(239,68,68,.8)', letterSpacing: '.1em', textAlign: 'left' }}>Preencha nome e WhatsApp para continuar</p>
              )}
              <button type="submit" className="btn-shiny" style={{ width: '100%', textAlign: 'center' }}><span>Quero entrar na lista</span></button>
              <p className="mono" style={{ fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(226,232,240,.18)', textAlign: 'center' }}>Sem spam. Só aviso quando abrir.</p>
            </form>
        </div>
      </section>

      <footer style={{ padding: '2rem', borderTop: '1px solid rgba(226,232,240,.04)', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(226,232,240,.2)' }}>Deploy do 0 © 2026 · Yuri Correia</span>
        <a href="https://ocorreia.com.br" className="mono" style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(226,232,240,.2)', textDecoration: 'none', transition: 'color .3s' }}
          onMouseEnter={e => (e.currentTarget.style.color = acc)} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(226,232,240,.2)')}>
          ocorreia.com.br →
        </a>
      </footer>
    </div>
  )
}
