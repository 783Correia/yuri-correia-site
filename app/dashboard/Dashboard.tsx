'use client'

import { useState, useEffect } from 'react'
import { aulas, instagramPosts } from './data'
import type { Aula, InstaPost } from './data'

type Tab = 'overview' | 'aulas' | 'instagram'
type CheckMap = Record<string, boolean>

const ACCENT = '#C86428'
const BG = '#0A0909'
const BG2 = '#121212'
const BG3 = '#1a1a1a'
const CREAM = '#F0E8D8'
const MUTED = 'rgba(240,232,216,0.35)'
const BORDER = 'rgba(240,232,216,0.07)'

function copyToClipboard(text: string, onCopied: () => void) {
  navigator.clipboard.writeText(text).then(onCopied)
}

// ── SIDEBAR ─────────────────────────────────────────────────────
function Sidebar({
  tab, setTab, checks, aulaIdx, setAulaIdx, instaIdx, setInstaIdx,
}: {
  tab: Tab; setTab: (t: Tab) => void
  checks: CheckMap
  aulaIdx: number; setAulaIdx: (i: number) => void
  instaIdx: number; setInstaIdx: (i: number) => void
}) {
  const aulaDone = aulas.filter(a => checks[`aula-${a.id}`]).length
  const instaDone = instagramPosts.filter(p => checks[`insta-${p.id}`]).length

  return (
    <aside style={{
      width: 260, flexShrink: 0, background: BG2,
      borderRight: `1px solid ${BORDER}`,
      display: 'flex', flexDirection: 'column',
      height: '100vh', position: 'sticky', top: 0, overflow: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '1.5rem 1.25rem', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '-0.03em' }}>
          <span style={{ color: ACCENT }}>CORRE</span>
          <span style={{ color: 'rgba(240,232,216,0.12)' }}>.</span>
          <span style={{ color: ACCENT }}>AI</span>
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: MUTED, marginTop: 4 }}>
          Dashboard · Yuri Correia
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: '1rem 0', flex: 1 }}>

        {/* Overview */}
        <SideItem active={tab === 'overview'} onClick={() => setTab('overview')} icon="◈" label="Visão Geral" />

        {/* Aulas */}
        <div style={{ padding: '0.75rem 1.25rem 0.25rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED }}>
          Aulas · {aulaDone}/{aulas.length}
        </div>
        {aulas.map((a, i) => (
          <SideItem
            key={a.id}
            active={tab === 'aulas' && aulaIdx === i}
            onClick={() => { setTab('aulas'); setAulaIdx(i) }}
            icon={`0${a.id}`}
            label={a.titulo}
            done={!!checks[`aula-${a.id}`]}
            small
          />
        ))}

        {/* Instagram */}
        <div style={{ padding: '0.75rem 1.25rem 0.25rem', marginTop: '0.5rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED }}>
          Instagram · {instaDone}/{instagramPosts.length}
        </div>
        {instagramPosts.map((p, i) => (
          <SideItem
            key={p.id}
            active={tab === 'instagram' && instaIdx === i}
            onClick={() => { setTab('instagram'); setInstaIdx(i) }}
            icon="◆"
            label={p.topico}
            done={!!checks[`insta-${p.id}`]}
            small
          />
        ))}
      </nav>

      {/* Progress */}
      <div style={{ padding: '1rem 1.25rem', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Progresso total</span>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: ACCENT }}>
            {Math.round(((aulaDone + instaDone) / (aulas.length + instagramPosts.length)) * 100)}%
          </span>
        </div>
        <div style={{ height: 3, background: BORDER, borderRadius: 2 }}>
          <div style={{
            height: '100%', borderRadius: 2, background: ACCENT,
            width: `${((aulaDone + instaDone) / (aulas.length + instagramPosts.length)) * 100}%`,
            transition: 'width 0.4s ease',
          }} />
        </div>
      </div>
    </aside>
  )
}

function SideItem({ active, onClick, icon, label, done, small }: {
  active: boolean; onClick: () => void; icon: string; label: string; done?: boolean; small?: boolean
}) {
  return (
    <button onClick={onClick} style={{
      width: '100%', display: 'flex', alignItems: 'center', gap: '0.625rem',
      padding: small ? '0.45rem 1.25rem' : '0.65rem 1.25rem',
      background: active ? `rgba(200,100,40,0.08)` : 'transparent',
      borderLeft: active ? `2px solid ${ACCENT}` : '2px solid transparent',
      border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
    }}>
      <span style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: small ? '0.6rem' : '0.7rem',
        color: active ? ACCENT : MUTED, flexShrink: 0,
      }}>{icon}</span>
      <span style={{
        fontSize: small ? '0.78rem' : '0.85rem',
        color: active ? CREAM : done ? 'rgba(240,232,216,0.5)' : MUTED,
        fontWeight: active ? 600 : 400,
        lineHeight: 1.3, flex: 1,
        textDecoration: done ? 'line-through' : 'none',
        opacity: done && !active ? 0.5 : 1,
      }}>{label}</span>
      {done && <span style={{ color: ACCENT, fontSize: '0.65rem', flexShrink: 0 }}>✓</span>}
    </button>
  )
}

// ── OVERVIEW ────────────────────────────────────────────────────
function Overview({ checks, setTab, setAulaIdx, setInstaIdx }: {
  checks: CheckMap
  setTab: (t: Tab) => void
  setAulaIdx: (i: number) => void
  setInstaIdx: (i: number) => void
}) {
  const aulaDone = aulas.filter(a => checks[`aula-${a.id}`]).length
  const instaDone = instagramPosts.filter(p => checks[`insta-${p.id}`]).length
  const total = aulas.length + instagramPosts.length
  const done = aulaDone + instaDone
  const pct = Math.round((done / total) * 100)

  const nextAula = aulas.find(a => !checks[`aula-${a.id}`])
  const nextInsta = instagramPosts.find(p => !checks[`insta-${p.id}`])

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 2rem' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <Eyebrow>Visão Geral</Eyebrow>
        <h1 style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', color: CREAM, marginBottom: '0.5rem' }}>
          Bom dia, Yuri.
        </h1>
        <p style={{ color: MUTED, fontSize: '0.9rem' }}>
          {pct === 0 ? 'Tudo pronto. Hora de gravar.' : pct === 100 ? 'Tudo concluído. 🎉' : `${done} de ${total} tarefas concluídas. Continue.`}
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
        {[
          { val: `${pct}%`, label: 'Progresso total', color: ACCENT },
          { val: `${aulaDone}/6`, label: 'Aulas gravadas', color: CREAM },
          { val: `${instaDone}/6`, label: 'Posts publicados', color: CREAM },
        ].map((s, i) => (
          <div key={i} style={{ background: BG3, border: `1px solid ${BORDER}`, padding: '1.5rem', borderRadius: 4 }}>
            <div style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 900, color: s.color, lineHeight: 1, letterSpacing: '-0.03em' }}>{s.val}</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: MUTED, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Próximo passo */}
      <div style={{ marginBottom: '2rem' }}>
        <Eyebrow>Próximo passo</Eyebrow>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {nextAula && (
            <NextCard
              tipo="Aula"
              titulo={nextAula.titulo}
              detalhe={nextAula.duracao}
              onClick={() => { setTab('aulas'); setAulaIdx(aulas.indexOf(nextAula)) }}
            />
          )}
          {nextInsta && (
            <NextCard
              tipo="Instagram"
              titulo={nextInsta.topico}
              detalhe={nextInsta.tipo}
              onClick={() => { setTab('instagram'); setInstaIdx(instagramPosts.indexOf(nextInsta)) }}
            />
          )}
        </div>
      </div>

      {/* Checklist geral */}
      <div>
        <Eyebrow>Checklist completo</Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: BORDER }}>
          {aulas.map(a => (
            <CheckRow key={`a${a.id}`} label={`Aula ${a.id}: ${a.titulo}`} done={!!checks[`aula-${a.id}`]} />
          ))}
          {instagramPosts.map(p => (
            <CheckRow key={`i${p.id}`} label={`Instagram: ${p.topico}`} done={!!checks[`insta-${p.id}`]} />
          ))}
        </div>
      </div>
    </div>
  )
}

function NextCard({ tipo, titulo, detalhe, onClick }: { tipo: string; titulo: string; detalhe: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', display: 'flex', alignItems: 'center', gap: '1rem',
      padding: '1rem 1.25rem', background: `rgba(200,100,40,0.05)`,
      border: `1px solid rgba(200,100,40,0.2)`, borderRadius: 4,
      cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.2s',
    }}>
      <div style={{ width: 36, height: 36, background: `rgba(200,100,40,0.12)`, border: `1px solid rgba(200,100,40,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, flexShrink: 0 }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: ACCENT }}>{tipo === 'Aula' ? '▶' : '◆'}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 3 }}>{tipo}</div>
        <div style={{ fontSize: '0.875rem', color: CREAM, fontWeight: 600 }}>{titulo}</div>
      </div>
      <span style={{ color: MUTED, fontSize: '0.8rem' }}>→</span>
    </button>
  )
}

function CheckRow({ label, done }: { label: string; done: boolean }) {
  return (
    <div style={{ background: BG3, padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
      <div style={{ width: 14, height: 14, border: `1px solid ${done ? ACCENT : BORDER}`, background: done ? `rgba(200,100,40,0.15)` : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, borderRadius: 2 }}>
        {done && <span style={{ color: ACCENT, fontSize: '0.55rem' }}>✓</span>}
      </div>
      <span style={{ fontSize: '0.8rem', color: done ? MUTED : CREAM, textDecoration: done ? 'line-through' : 'none', opacity: done ? 0.5 : 1 }}>{label}</span>
    </div>
  )
}

// ── AULAS VIEW ──────────────────────────────────────────────────
function AulasView({ idx, setIdx, checks, toggle }: {
  idx: number; setIdx: (i: number) => void
  checks: CheckMap; toggle: (k: string) => void
}) {
  const aula = aulas[idx]
  const key = `aula-${aula.id}`
  const done = !!checks[key]

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2.5rem 2rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem' }}>
        <div>
          <Eyebrow>Aula {aula.id} de {aulas.length} · {aula.duracao}</Eyebrow>
          <h1 style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', color: CREAM }}>{aula.titulo}</h1>
        </div>
        <CheckButton done={done} onClick={() => toggle(key)} label={done ? 'Gravada ✓' : 'Marcar como gravada'} />
      </div>

      {/* Pontos-chave */}
      <div style={{ background: BG3, border: `1px solid ${BORDER}`, padding: '1.25rem 1.5rem', borderRadius: 4, marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: '0.75rem' }}>O que você cobre nessa aula</div>
        {aula.pontos.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', color: CREAM, marginBottom: '0.4rem' }}>
            <span style={{ color: ACCENT, flexShrink: 0 }}>✓</span> {p}
          </div>
        ))}
      </div>

      {/* Script */}
      <div style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: MUTED }}>Script completo</div>
          <CopyBtn text={aula.script} />
        </div>
        <div style={{ padding: '1.5rem', whiteSpace: 'pre-wrap', fontSize: '0.875rem', color: 'rgba(240,232,216,0.75)', lineHeight: 1.8, maxHeight: 480, overflowY: 'auto' }}>
          {aula.script}
        </div>
      </div>

      {/* Nav */}
      <NavBar idx={idx} max={aulas.length} onPrev={() => setIdx(idx - 1)} onNext={() => setIdx(idx + 1)} />
    </div>
  )
}

// ── INSTAGRAM VIEW ──────────────────────────────────────────────
function InstaView({ idx, setIdx, checks, toggle }: {
  idx: number; setIdx: (i: number) => void
  checks: CheckMap; toggle: (k: string) => void
}) {
  const post = instagramPosts[idx]
  const key = `insta-${post.id}`
  const done = !!checks[key]
  const [slideIdx, setSlideIdx] = useState(0)
  const [copied, setCopied] = useState('')

  useEffect(() => { setSlideIdx(0) }, [idx])

  const slide = post.slides[slideIdx]

  function copy(text: string, which: string) {
    copyToClipboard(text, () => { setCopied(which); setTimeout(() => setCopied(''), 2000) })
  }

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '2.5rem 2rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem' }}>
        <div>
          <Eyebrow>Post {post.id} de {instagramPosts.length} · Carrossel</Eyebrow>
          <h1 style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', color: CREAM }}>{post.topico}</h1>
        </div>
        <CheckButton done={done} onClick={() => toggle(key)} label={done ? 'Publicado ✓' : 'Marcar como publicado'} />
      </div>

      {/* Gancho */}
      <div style={{ background: `rgba(200,100,40,0.06)`, border: `1px solid rgba(200,100,40,0.2)`, padding: '1rem 1.25rem', borderRadius: 4, marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, marginBottom: 6 }}>Gancho (slide 1)</div>
        <p style={{ fontSize: '0.875rem', color: CREAM, fontStyle: 'italic', lineHeight: 1.6 }}>"{post.gancho}"</p>
      </div>

      {/* Slides */}
      <div style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden', marginBottom: '1rem' }}>
        {/* Slide nav */}
        <div style={{ padding: '0.75rem 1.25rem', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: '0.5rem', overflowX: 'auto' }}>
          {post.slides.map((_, i) => (
            <button key={i} onClick={() => setSlideIdx(i)} style={{
              width: 28, height: 28, borderRadius: 2, border: `1px solid ${i === slideIdx ? ACCENT : BORDER}`,
              background: i === slideIdx ? `rgba(200,100,40,0.15)` : 'transparent',
              color: i === slideIdx ? ACCENT : MUTED,
              fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', cursor: 'pointer', flexShrink: 0,
            }}>{i + 1}</button>
          ))}
          <div style={{ marginLeft: 'auto' }}>
            <CopyBtn text={`${slide.titulo}\n\n${slide.corpo}`} label={copied === 'slide' ? 'Copiado!' : 'Copiar slide'} onClick={() => copy(`${slide.titulo}\n\n${slide.corpo}`, 'slide')} />
          </div>
        </div>

        {/* Slide preview — simula card 4:5 Instagram */}
        <div style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div style={{
            width: 200, flexShrink: 0, aspectRatio: '4/5',
            background: BG, border: `1px solid ${BORDER}`,
            borderRadius: 8, padding: '1.25rem',
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
          }}>
            <div style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '-0.01em', textTransform: 'uppercase', color: CREAM, lineHeight: 1.15 }}>{slide.titulo}</div>
            <div style={{ width: 20, height: 2, background: ACCENT, borderRadius: 1 }} />
            <div style={{ fontSize: '0.62rem', color: MUTED, lineHeight: 1.6, flex: 1, whiteSpace: 'pre-wrap' }}>{slide.corpo}</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.5rem', color: `rgba(200,100,40,0.5)`, letterSpacing: '0.1em' }}>@ocorreia.com.br</div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: MUTED, marginBottom: 8 }}>Texto do slide {slideIdx + 1}</div>
            <div style={{ fontSize: '0.875rem', color: CREAM, lineHeight: 1.8, whiteSpace: 'pre-wrap', background: BG, border: `1px solid ${BORDER}`, padding: '1rem', borderRadius: 4, marginBottom: '0.75rem' }}>
              <strong style={{ display: 'block', marginBottom: 8, color: CREAM }}>{slide.titulo}</strong>
              {slide.corpo}
            </div>
          </div>
        </div>
      </div>

      {/* Legenda + Hashtags */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <ContentBox
          label="Legenda"
          content={post.legenda}
          onCopy={() => copy(post.legenda, 'legenda')}
          copied={copied === 'legenda'}
        />
        <ContentBox
          label="Hashtags"
          content={post.hashtags}
          onCopy={() => copy(post.hashtags, 'hashtags')}
          copied={copied === 'hashtags'}
        />
      </div>

      {/* Copiar tudo */}
      <button
        onClick={() => copy(`${post.slides.map((s, i) => `SLIDE ${i + 1}\n${s.titulo}\n\n${s.corpo}`).join('\n\n---\n\n')}\n\n---\nLEGENDA:\n${post.legenda}\n\nHASHTAGS:\n${post.hashtags}`, 'all')}
        style={{
          width: '100%', padding: '0.875rem', marginBottom: '1.5rem',
          background: copied === 'all' ? `rgba(200,100,40,0.15)` : `rgba(200,100,40,0.08)`,
          border: `1px solid rgba(200,100,40,0.25)`, borderRadius: 4,
          color: ACCENT, fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
          cursor: 'pointer', transition: 'all 0.2s',
        }}
      >
        {copied === 'all' ? '✓ Copiado!' : '↓ Copiar conteúdo completo do post'}
      </button>

      <NavBar idx={idx} max={instagramPosts.length} onPrev={() => setIdx(idx - 1)} onNext={() => setIdx(idx + 1)} />
    </div>
  )
}

// ── SHARED COMPONENTS ──────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '0.5rem' }}>
      {children}
    </div>
  )
}

function CheckButton({ done, onClick, label }: { done: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.5rem 0.875rem', flexShrink: 0,
      background: done ? `rgba(200,100,40,0.12)` : BG3,
      border: `1px solid ${done ? ACCENT : BORDER}`, borderRadius: 4,
      color: done ? ACCENT : MUTED, fontSize: '0.75rem', fontWeight: 600,
      cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap',
    }}>
      {label}
    </button>
  )
}

function CopyBtn({ text, label = 'Copiar', onClick }: { text?: string; label?: string; onClick?: () => void }) {
  const [copied, setCopied] = useState(false)
  function handle() {
    if (onClick) { onClick(); return }
    if (text) copyToClipboard(text, () => { setCopied(true); setTimeout(() => setCopied(false), 2000) })
  }
  return (
    <button onClick={handle} style={{
      padding: '0.3rem 0.75rem', background: 'transparent',
      border: `1px solid ${BORDER}`, borderRadius: 3,
      color: copied ? ACCENT : MUTED, fontFamily: 'IBM Plex Mono, monospace',
      fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase',
      cursor: 'pointer', transition: 'all 0.15s',
    }}>
      {copied ? '✓ Copiado' : label}
    </button>
  )
}

function ContentBox({ label, content, onCopy, copied }: { label: string; content: string; onCopy: () => void; copied: boolean }) {
  return (
    <div style={{ background: BG3, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
      <div style={{ padding: '0.6rem 0.875rem', borderBottom: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: MUTED }}>{label}</span>
        <CopyBtn text={content} label={copied ? '✓ Copiado' : 'Copiar'} onClick={onCopy} />
      </div>
      <div style={{ padding: '0.875rem', fontSize: '0.8rem', color: 'rgba(240,232,216,0.65)', lineHeight: 1.7, maxHeight: 140, overflowY: 'auto' }}>
        {content}
      </div>
    </div>
  )
}

function NavBar({ idx, max, onPrev, onNext }: { idx: number; max: number; onPrev: () => void; onNext: () => void }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: `1px solid ${BORDER}` }}>
      <button
        onClick={onPrev} disabled={idx === 0}
        style={{
          padding: '0.6rem 1.25rem', background: 'transparent',
          border: `1px solid ${idx === 0 ? 'rgba(240,232,216,0.04)' : BORDER}`,
          color: idx === 0 ? 'rgba(240,232,216,0.15)' : CREAM,
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          cursor: idx === 0 ? 'not-allowed' : 'pointer', borderRadius: 3,
        }}
      >← Anterior</button>
      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', color: MUTED, alignSelf: 'center' }}>{idx + 1} / {max}</span>
      <button
        onClick={onNext} disabled={idx === max - 1}
        style={{
          padding: '0.6rem 1.25rem',
          background: idx < max - 1 ? `rgba(200,100,40,0.09)` : 'transparent',
          border: `1px solid ${idx < max - 1 ? 'rgba(200,100,40,0.3)' : 'rgba(240,232,216,0.04)'}`,
          color: idx < max - 1 ? ACCENT : 'rgba(240,232,216,0.15)',
          fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.7rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          cursor: idx < max - 1 ? 'pointer' : 'not-allowed', borderRadius: 3,
        }}
      >Próximo →</button>
    </div>
  )
}

// ── ROOT ────────────────────────────────────────────────────────
export default function Dashboard() {
  const [tab, setTab] = useState<Tab>('overview')
  const [aulaIdx, setAulaIdx] = useState(0)
  const [instaIdx, setInstaIdx] = useState(0)
  const [checks, setChecks] = useState<CheckMap>({})

  useEffect(() => {
    try {
      const stored = localStorage.getItem('correia-dash-checks')
      if (stored) setChecks(JSON.parse(stored))
    } catch {}
  }, [])

  function toggle(key: string) {
    setChecks(prev => {
      const next = { ...prev, [key]: !prev[key] }
      localStorage.setItem('correia-dash-checks', JSON.stringify(next))
      return next
    })
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: BG, color: CREAM }}>
      <Sidebar
        tab={tab} setTab={setTab} checks={checks}
        aulaIdx={aulaIdx} setAulaIdx={setAulaIdx}
        instaIdx={instaIdx} setInstaIdx={setInstaIdx}
      />
      <main style={{ flex: 1, overflowY: 'auto', maxHeight: '100vh' }}>
        {tab === 'overview' && (
          <Overview checks={checks} setTab={setTab} setAulaIdx={setAulaIdx} setInstaIdx={setInstaIdx} />
        )}
        {tab === 'aulas' && (
          <AulasView idx={aulaIdx} setIdx={setAulaIdx} checks={checks} toggle={toggle} />
        )}
        {tab === 'instagram' && (
          <InstaView idx={instaIdx} setIdx={setInstaIdx} checks={checks} toggle={toggle} />
        )}
      </main>
    </div>
  )
}
