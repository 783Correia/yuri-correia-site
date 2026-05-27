import type { Metadata } from 'next'
import { Big_Shoulders_Display, Mulish, IBM_Plex_Mono } from 'next/font/google'
import FormacaoLP from './FormacaoLP'

const bigShoulders = Big_Shoulders_Display({ subsets: ['latin'], weight: ['700', '900'], variable: '--font-display', display: 'swap' })
const mulish = Mulish({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-body', display: 'swap' })
const ibmMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'CORRE.AI — Um profissional. Uma equipe inteira.',
  description:
    'Aprenda a usar IA para entregar marca, identidade visual, site, estratégia e ranqueamento — sozinho, mais rápido que qualquer agência. Formação com Claude, ChatGPT, Figma, Manus e Next.js.',
  keywords: [
    'formação IA',
    'aprender inteligência artificial',
    'marketing digital com IA',
    'site com Claude',
    'Claude Code Next.js',
    'ChatGPT marketing',
    'Figma IA',
    'SEO com IA',
    'GEO aparecer ChatGPT',
    'formação marketing digital',
    'aprender a fazer site com IA',
    'profissional solo IA',
    'CORRE.AI',
    'Yuri Correia',
    'Studio Brave',
  ],
  authors: [{ name: 'Yuri Correia', url: 'https://ocorreia.com.br' }],
  openGraph: {
    title: 'CORRE.AI — Um profissional. Uma equipe inteira.',
    description:
      'O método exato para entregar marca, site, estratégia e ranqueamento usando IA — sozinho, mais rápido que qualquer agência.',
    url: 'https://ocorreia.com.br/formacao',
    siteName: 'Yuri Correia',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CORRE.AI — Um profissional. Uma equipe inteira.',
    description:
      'Aprenda a entregar marca, site, estratégia e ranqueamento usando IA. Sozinho. Mais rápido.',
  },
  alternates: {
    canonical: 'https://ocorreia.com.br/formacao',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'CORRE.AI — Formação',
  description:
    'Aprenda a usar IA para entregar marca, identidade visual, site, estratégia e ranqueamento sozinho, mais rápido que qualquer agência. 9 módulos com Claude, ChatGPT, Figma, Manus e Next.js.',
  url: 'https://ocorreia.com.br/formacao',
  provider: {
    '@type': 'Person',
    name: 'Yuri Correia',
    url: 'https://ocorreia.com.br',
    sameAs: [
      'https://instagram.com/ocorreia.com.br',
      'https://instagram.com/ostudiobrave',
    ],
  },
  educationalLevel: 'Beginner to Intermediate',
  inLanguage: 'pt-BR',
  teaches: [
    'Como usar IA para criar identidade visual com Figma',
    'Como construir sites com Claude Code e Next.js sem saber programar',
    'SEO técnico com schema markup e Core Web Vitals',
    'GEO — como aparecer no ChatGPT e Gemini',
    'Google Business Profile otimizado',
    'Estratégia de conteúdo com IA',
    'Como fechar projetos de R$7.000 a R$14.000',
  ],
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    instructor: {
      '@type': 'Person',
      name: 'Yuri Correia',
      description:
        'Especialista em estrutura digital, SEO, GEO e IA aplicada. Criador do sistema xquads com 96+ agentes IA especializados.',
    },
  },
  about: [
    { '@type': 'Thing', name: 'Inteligência Artificial' },
    { '@type': 'Thing', name: 'Marketing Digital' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Desenvolvimento Web' },
    { '@type': 'Thing', name: 'Identidade Visual' },
    { '@type': 'Thing', name: 'Claude AI' },
    { '@type': 'Thing', name: 'ChatGPT' },
    { '@type': 'Thing', name: 'Next.js' },
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    priceCurrency: 'BRL',
    seller: {
      '@type': 'Person',
      name: 'Yuri Correia',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '1',
  },
}

export default function FormacaoPage() {
  return (
    <div className={`${bigShoulders.variable} ${mulish.variable} ${ibmMono.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FormacaoLP />
    </div>
  )
}
