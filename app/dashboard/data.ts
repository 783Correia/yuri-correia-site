export type Slide = { titulo: string; corpo: string }

export type InstaPost = {
  id: number
  topico: string
  tipo: 'carrossel' | 'reels' | 'single'
  gancho: string
  slides: Slide[]
  legenda: string
  hashtags: string
}

export type Aula = {
  id: number
  titulo: string
  duracao: string
  arquivo: string
  descricao: string
  pontos: string[]
  script: string
}

// ─── AULAS ────────────────────────────────────────────────────
export const aulas: Aula[] = [
  {
    id: 1,
    titulo: 'A Estrutura que Ninguém Faz',
    duracao: '8–10 min',
    arquivo: 'aula-01',
    descricao: 'Apresentação da formação e o que é estrutura digital de verdade.',
    pontos: [
      'Por que post não gera lead sozinho',
      'As 5 camadas da estrutura digital',
      'Por que saber isso vale R$7k por projeto',
      'O que vem nas próximas aulas',
    ],
    script: `GANCHO
Você tem cliente. Tem Instagram. Talvez tenha site. Mas quando alguém pesquisa o serviço do seu cliente no Google — ele aparece? Quando alguém pergunta pro ChatGPT qual empresa do nicho em qual cidade você indica — o nome do seu cliente aparece?

Se a resposta for não, o problema não é falta de post. É falta de estrutura.

O PROBLEMA REAL
O mercado ensinou todo mundo a fazer a mesma coisa. Canva. Reels. Carrossel motivacional. Hashtag. Impulsionar post.

Isso tudo tem valor? Tem. Mas isso é a parte de cima do iceberg. O que sustenta um negócio digital — o que faz cliente aparecer no Google, no ChatGPT, em todo lugar — fica embaixo. Invisível. E invisível pra maioria das agências no Brasil.

O QUE É ESTRUTURA DIGITAL
Cinco camadas:
1. O site certo — rápido, indexável, que o Google consegue ler
2. SEO técnico — schema, sitemap, robots, sinais técnicos
3. GEO — Generative Engine Optimization, aparecer na IA
4. Landing page que converte — estrutura de copy e design
5. Conteúdo que ranqueia — blog, FAQ, páginas de serviço

POR QUE VOCÊ PRECISA SABER ISSO
Seu cliente precisa. E quando você chega com proposta que entrega estrutura completa, a conversa muda de "quanto você cobra de post?" para "você consegue ranquear meu site?". A primeira pergunta tem como resposta R$800. A segunda tem como resposta R$7.000.`,
  },
  {
    id: 2,
    titulo: 'A Stack Certa: Next.js vs WordPress',
    duracao: '10–12 min',
    arquivo: 'aula-02',
    descricao: 'Por que a ferramenta importa tanto quanto a estratégia.',
    pontos: [
      'Por que WordPress cria problema de ranqueamento',
      'O que é Next.js e por que você não precisa programar',
      'A stack completa: Next.js + Vercel + GitHub + Domínio',
      'Custo real: R$40/ano pra entregar R$7k de valor',
    ],
    script: `GANCHO
Tem um problema sério quando você está construindo estrutura para ranqueamento. E no Brasil, a ferramenta mais usada é exatamente a que mais cria problema. Estou falando do WordPress.

POR QUE WORDPRESS ATRAPALHA
WordPress é pesado por padrão. Instala plugin, mais código. Plugin de SEO, mais código. Plugin de cache, mais código. Resultado: site que demora 4 segundos pra abrir no celular.

O Google usa velocidade como fator de ranqueamento. O Core Web Vitals pune sites lentos. E todo mundo usa WordPress — não é diferencial, é padrão.

POR QUE NEXT.JS
— Velocidade nativa: menos de 1 segundo de carregamento
— Geração estática: HTML puro, servidor não processa nada na visita
— Indexação perfeita: código limpo que qualquer crawler lê
— Você não precisa saber programar — Claude Code escreve o código

A STACK COMPLETA
1. Next.js — framework onde o site vive
2. Vercel — hospedagem, gratuita pra começar, deploy automático
3. GitHub — código versionado, se der errado volta atrás
4. Domínio — .com.br (R$40/ano). Sem domínio próprio não passa profissionalismo.

Esses quatro custam R$40/ano. Você entrega um site de R$7.000 com infraestrutura que custa R$40/ano.`,
  },
  {
    id: 3,
    titulo: 'SEO Técnico do Zero ao Publicado',
    duracao: '12–15 min',
    arquivo: 'aula-03',
    descricao: 'O que o Google verifica antes de ler uma palavra do seu conteúdo.',
    pontos: [
      'Schema markup — o sinal técnico mais ignorado do Brasil',
      'Sitemap.xml — como o Google encontra suas páginas',
      'Robots.txt — o que indexar e o que bloquear',
      'Core Web Vitals — as métricas que o Google usa pra ranquear',
      '3 ferramentas gratuitas pra diagnosticar qualquer site',
    ],
    script: `GANCHO
Todo mundo fala de SEO. Mas a maioria fala de SEO de conteúdo — palavra-chave aqui, texto lá. Isso importa. Mas existe uma camada anterior que a maioria ignora completamente: SEO técnico.

SCHEMA MARKUP
Um bloco JSON que você coloca no site descrevendo pra máquina exatamente quem é o negócio. Nome, endereço, telefone, área de atendimento, avaliações. O Google lê. O ChatGPT lê. O Gemini lê.

Tipos: LocalBusiness, Organization, FAQPage, Product.
No Next.js você coloca no layout.tsx como script JSON-LD. Com Claude Code, menos de 5 minutos.

SITEMAP
Arquivo XML que lista todas as páginas. Pensa num mapa de ruas — o Google precisa saber quais ruas existem. No Next.js, arquivo sitemap.ts que atualiza automaticamente a cada nova página.

ROBOTS.TXT
Diz pros robôs o que podem ou não visitar. Linha importante hoje: autorizar ou bloquear o GPTBot do ChatGPT.

CORE WEB VITALS
LCP (carregamento), INP (interação), CLS (estabilidade). Site Next.js bem feito passa nos três. WordPress com plugins geralmente reprova em todos.

3 FERRAMENTAS GRATUITAS
1. Google Search Console — indexação e palavras-chave
2. PageSpeed Insights — nota do Core Web Vitals
3. Google Rich Results Test — valida o schema markup`,
  },
  {
    id: 4,
    titulo: 'GEO: Aparecer no ChatGPT e na IA',
    duracao: '12–14 min',
    arquivo: 'aula-04',
    descricao: 'A maior oportunidade dos próximos 3 anos — e quase ninguém sabe fazer.',
    pontos: [
      'O que é GEO e por que está explodindo agora',
      'Como o ChatGPT decide quem recomendar',
      '6 ações concretas pra implementar hoje',
      'Resultado real: 48h pra aparecer na IA',
    ],
    script: `GANCHO
48 horas depois de implementar isso, alguém foi no ChatGPT e perguntou: "Qual empresa de energia solar você indica em [cidade]?" O ChatGPT recomendou meu cliente pelo nome, com endereço e telefone. Sem anúncio. Sem post. Só estrutura.

O QUE É GEO
Generative Engine Optimization. Otimização para IAs como ChatGPT, Gemini, Perplexity. Enquanto SEO ranqueia no Google, GEO faz você ser recomendado pela IA.

Em 2024, pela primeira vez, o Google perdeu participação de mercado. Buscas com IA aumentaram 1200% em um ano. Quem estiver na IA quando isso explodir colhe o resultado.

COMO A IA DECIDE QUEM RECOMENDAR
1. Presença estruturada — schema correto, GMB configurado, informações consistentes
2. Mencionada por outras fontes — notícias, diretórios, parceiros
3. Conteúdo que responde perguntas — FAQ bem estruturado é ouro
4. GPTBot autorizado no robots.txt

6 AÇÕES CONCRETAS
1. Schema LocalBusiness completo
2. Autorizar GPTBot no robots.txt: User-agent: GPTBot / Allow: /
3. Página de FAQ com schema FAQPage
4. GMB completo com Q&A respondido
5. Consistência NAP em todo lugar (Nome, Endereço, Telefone idênticos)
6. Cadastro em diretórios relevantes`,
  },
  {
    id: 5,
    titulo: 'Landing Page que Converte',
    duracao: '12–14 min',
    arquivo: 'aula-05',
    descricao: 'Estrutura de copy e design que transforma visitante em lead.',
    pontos: [
      'LP vs site institucional — quando usar cada um',
      'As 7 seções em ordem — e por que essa ordem importa',
      '6 erros que matam conversão',
      'Regra do benefício vs feature',
    ],
    script: `GANCHO
Toda empresa quer mais cliente. Mas a maioria das páginas na internet não foram feitas pra converter — foram feitas pra parecer bonitas. Bonito não paga conta. Conversão paga.

LP VS SITE INSTITUCIONAL
Site institucional: multi-página, para quem já conhece e quer explorar.
Landing page: uma página, uma ação, para tráfego direcionado.
Para anúncio: LP sempre ganha. A chance de conversão triplica.

AS 7 SEÇÕES EM ORDEM
1. HERO — headline com resultado do cliente, subheadline, CTA único. 5 segundos pra decidir se fica.
2. PROBLEMA — espelho do cliente. Você descreve a dor em palavras que ele usaria.
3. SOLUÇÃO — benefícios, não features. "Reduz conta de luz 95%" > "painel de 400W".
4. COMO FUNCIONA — 3 passos simples. Remove o medo do processo.
5. PROVA SOCIAL — nome, cidade, resultado específico. Número > adjetivo.
6. FAQ — remove objeções. Cada resposta é uma barreira derrubada.
7. CTA FINAL — repete a oferta com elemento de urgência real.

6 ERROS QUE MATAM CONVERSÃO
— Menu de navegação (fuga)
— Múltiplos CTAs diferentes (confusão)
— Headline sobre a empresa (ninguém liga)
— Formulário longo (fricção)
— Sem prova social (sem confiança)
— Não funcionar no celular (70-80% do tráfego)`,
  },
  {
    id: 6,
    titulo: 'Fechar Cliente, Precificar e Recorrência',
    duracao: '12–14 min',
    arquivo: 'aula-06',
    descricao: 'Quanto cobrar, como apresentar e como criar renda previsível.',
    pontos: [
      'Por que parar de precificar por hora',
      'Os 3 pacotes que fecham venda',
      'Como fazer diagnóstico gratuito que vende sozinho',
      'As 3 fontes de recorrência pós-projeto',
    ],
    script: `GANCHO
Quanto cobrar? Como apresentar? Como fechar? Vou ser muito direto — papo bonito sobre precificação sem número real não serve pra ninguém.

MENTALIDADE CERTA
Para de precificar pelo seu tempo. Profissional de resultado precifica pelo valor que entrega. Se você entrega estrutura que gera 20 leads/mês e cada lead vale R$3.000 pro cliente — você entregou R$60k de valor potencial. Cobrar R$7.000 não é caro. É barato.

OS 3 PACOTES
Pacote 01 — Estrutura Base: R$4.500 a R$5.500
Site Next.js + SEO técnico + GMB + Deploy. 7 a 10 dias.

Pacote 02 — Estrutura + Conversão: R$7.000 a R$9.000
Tudo do 01 + Landing page + GEO completo + WhatsApp integrado. 12 a 15 dias.

Pacote 03 — Estrutura + Conversão + Conteúdo: R$11.000 a R$14.000
Tudo do 02 + 4 páginas SEO + relatório mensal + suporte 3 meses. 20 a 25 dias.

DIAGNÓSTICO GRATUITO QUE VENDE SOZINHO
Antes de qualquer proposta: PageSpeed do site atual, situação no Search Console, pesquisa do nome no ChatGPT. Você leva o diagnóstico. O problema se vende sozinho.

3 FONTES DE RECORRÊNCIA
1. Manutenção mensal: R$800 a R$1.500/mês
2. Produção de conteúdo SEO: R$1.500 a R$3.000/mês
3. Gestão de GMB: R$500 a R$800/mês

3 clientes em recorrência = R$6.000/mês previsível. Todo mês.`,
  },
]

// ─── INSTAGRAM CONTENT (HORMOZI FRAMEWORK) ────────────────────
export const instagramPosts: InstaPost[] = [
  {
    id: 1,
    topico: 'Estrutura Digital',
    tipo: 'carrossel',
    gancho: 'Seu cliente paga R$800/mês de post. Não aparece no Google. Não aparece no ChatGPT. O problema não é você — é o que ninguém te ensinou.',
    slides: [
      {
        titulo: 'Seu cliente tem site. Ninguém encontra.',
        corpo: 'E o problema não é o design.\nNão é falta de post.\nÉ falta de estrutura.\n\n👇 O que ninguém no mercado digital brasileiro te conta',
      },
      {
        titulo: 'O que a maioria entrega',
        corpo: '× Site no Wix ou WordPress genérico\n× Zero schema markup\n× Zero sitemap\n× Google não consegue ler\n× ChatGPT nunca vai recomendar\n\nIsso é o que a maioria chama de "presença digital".',
      },
      {
        titulo: 'O que estrutura digital é de verdade',
        corpo: '✓ Site em Next.js (mesma tech que Netflix e TikTok)\n✓ Schema markup — a empresa existe pra IA\n✓ Sitemap — Google encontra todas as páginas\n✓ GEO — aparece quando alguém pergunta no ChatGPT\n✓ Landing page que converte',
      },
      {
        titulo: 'A diferença em número',
        corpo: 'Sem estrutura:\n→ Site tira 34/100 no Google\n→ ChatGPT nunca menciona o cliente\n→ Você cobra R$800/mês\n\nCom estrutura:\n→ Site tira 94/100\n→ ChatGPT recomenda o cliente\n→ Você cobra R$7.000 por projeto',
      },
      {
        titulo: 'Resultado real',
        corpo: '48h depois de implementar estrutura completa num cliente de energia solar:\n\nAlguém perguntou pro ChatGPT qual empresa indicar na cidade dele.\n\nO ChatGPT recomendou meu cliente.\nCom nome. Endereço. Telefone.\n\nSem anúncio. Sem post.',
      },
      {
        titulo: 'O que você faz com isso',
        corpo: 'Você aprende estrutura digital.\n\nE aí a conversa com cliente muda:\n\n"Quanto você cobra de post?"\n↓\n"Você consegue me ranquear no Google?"\n\nA primeira pergunta tem resposta R$800.\nA segunda tem resposta R$7.000.',
      },
      {
        titulo: 'Quer aprender do zero?',
        corpo: 'Estou montando uma formação sobre isso.\n\n6 aulas. Sem enrolação.\nEstrutura base, SEO, GEO, landing page e precificação.\n\nLink na bio → entrar na lista de espera\n@ocorreia.com.br',
      },
    ],
    legenda: 'Seu cliente tem site há 3 anos. Não aparece no Google. Não aparece no ChatGPT.\n\nO problema não é você — é o que ninguém te ensinou sobre estrutura digital.\n\nSalva esse post. Vai usar amanhã com cliente.\n\nQuer a formação completa? Link na bio 👇',
    hashtags: '#estruturadigital #seo #geo #marketing #agencia #sites #nextjs #chatgpt #inboundmarketing',
  },
  {
    id: 2,
    topico: 'SEO Técnico',
    tipo: 'carrossel',
    gancho: 'Todo mundo fala de SEO. Quase ninguém sabe o que o Google verifica ANTES de ler uma palavra do seu conteúdo.',
    slides: [
      {
        titulo: 'SEO não é palavra-chave.',
        corpo: 'Palavra-chave é só uma parte.\n\nExiste uma camada que o Google verifica ANTES de ler qualquer texto do seu site.\n\nE a maioria das agências nem sabe que ela existe.\n\n👇',
      },
      {
        titulo: 'O que o Google verifica primeiro',
        corpo: '1. "Esse site carrega em menos de 2,5s?" → Core Web Vitals\n2. "Funciona no celular?" → Mobile-first\n3. "Quem é essa empresa?" → Schema markup\n4. "Quais páginas existem?" → Sitemap\n5. "O HTML é limpo?" → Indexação\n\nSe isso estiver errado, o conteúdo não importa.',
      },
      {
        titulo: 'Schema markup — o mais ignorado',
        corpo: 'Um bloco de código que diz pro Google (e pro ChatGPT):\n\n→ Nome da empresa\n→ Endereço e telefone\n→ Área de atendimento\n→ Avaliações\n→ Horário de funcionamento\n\nNão aparece no site.\nMas o Google lê. A IA lê.',
      },
      {
        titulo: 'Como checar o site do seu cliente AGORA',
        corpo: 'Vai em pagespeed.web.dev\nCola o URL do site dele\nVeja a nota\n\nAbaixo de 50 → problema grave\nEntre 50–80 → dá pra melhorar\nAcima de 90 → bem otimizado\n\nSe estiver vermelho, você tem um argumento de venda na mão.',
      },
      {
        titulo: 'Antes e depois — caso real',
        corpo: 'Cliente de energia solar.\n\nAntes:\n→ WordPress com 12 plugins\n→ Nota: 31/100 no Google\n→ Invisível no ChatGPT\n\nDepois de migrar pra Next.js + schema correto:\n→ Nota: 96/100\n→ Indexado em 24h\n→ ChatGPT recomendando em 48h',
      },
      {
        titulo: '3 ferramentas gratuitas que você vai usar toda semana',
        corpo: '1. pagespeed.web.dev → velocidade e Core Web Vitals\n2. search.google.com/test/rich-results → valida schema markup\n3. search.google.com/search-console → indexação e palavras-chave\n\nTodas gratuitas. Todas essenciais.',
      },
      {
        titulo: 'Isso é o que separa profissional de entregador de post',
        corpo: 'Quem sabe diagnosticar e corrigir isso cobra diferente.\n\nNão porque é mais inteligente.\n\nMas porque entrega algo que o cliente não consegue em lugar nenhum.\n\nFormação completa → link na bio\n@ocorreia.com.br',
      },
    ],
    legenda: 'SEO não é palavra-chave. É o que o Google verifica antes de ler qualquer palavra do seu conteúdo.\n\nE 90% das agências no Brasil não fazem isso.\n\nSalva e compartilha com quem precisa saber. 💡\n\nFormação completa no link da bio 👇',
    hashtags: '#seo #seotecnico #google #marketing #sites #webdesign #agencia #inbound #estruturadigital',
  },
  {
    id: 3,
    topico: 'GEO — ChatGPT',
    tipo: 'carrossel',
    gancho: 'Alguém perguntou pro ChatGPT qual empresa de energia solar indicar. O ChatGPT recomendou meu cliente. Pelo nome. Com endereço. Com telefone. Sem anuncio nenhum.',
    slides: [
      {
        titulo: 'ChatGPT recomendou meu cliente.',
        corpo: 'Sem anúncio.\nSem impulsionamento.\nSem post.\n\nSó estrutura.\n\nVou te explicar como funciona e o que você precisa fazer. 👇',
      },
      {
        titulo: 'O que é GEO',
        corpo: 'GEO = Generative Engine Optimization\n\nOptimização pra IAs como:\n→ ChatGPT\n→ Gemini\n→ Perplexity\n→ Claude\n→ Bing Copilot\n\nEnquanto SEO ranqueia no Google,\nGEO faz você ser RECOMENDADO pela IA.',
      },
      {
        titulo: 'Por que isso importa AGORA',
        corpo: 'Em 2024:\n→ Google perdeu participação de mercado pela 1ª vez\n→ Buscas com IA cresceram 1.200% em um ano\n→ Pessoas estão perguntando pro ChatGPT "qual empresa indica"\n\nQuem estiver na IA quando isso explodir vai colher resultados por anos.',
      },
      {
        titulo: 'Como o ChatGPT decide quem recomendar',
        corpo: 'A IA não inventa. Ela busca em fontes confiáveis.\n\nPara uma empresa aparecer:\n✓ Site com schema markup correto\n✓ GMB completo e atualizado\n✓ Informações consistentes em todo lugar\n✓ FAQ que responde perguntas do nicho\n✓ GPTBot autorizado no robots.txt',
      },
      {
        titulo: '6 ações que você faz hoje',
        corpo: '1. Schema LocalBusiness no site (nome, end, tel, área)\n2. robots.txt: autorizar GPTBot\n3. Página de FAQ com schema FAQPage\n4. GMB completo + Q&A respondido\n5. Nome/Endereço/Tel idênticos em todo lugar\n6. Cadastro em diretórios relevantes\n\nTempo total: 4 a 6 horas.',
      },
      {
        titulo: 'Quanto tempo pra aparecer na IA',
        corpo: 'Com schema correto, GMB completo e robots.txt:\n\n24 a 72 horas.\n\nEu vi resultado em 48h.\n\nPesquisa no ChatGPT: "[serviço] em [cidade]"\n\nSe a estrutura estiver certa, o nome aparece.',
      },
      {
        titulo: 'Isso é o serviço mais escasso do mercado',
        corpo: 'Praticamente ninguém no Brasil sabe fazer GEO.\n\nSe você aprender agora, você tem 2 a 3 anos de vantagem sobre a concorrência.\n\nFormação completa com tudo isso:\nLink na bio → @ocorreia.com.br',
      },
    ],
    legenda: 'Buscas com IA cresceram 1.200% em um ano.\n\nE seu cliente não aparece em nenhuma delas.\n\nIsso é GEO. E é a maior oportunidade do mercado digital agora.\n\nSalva esse carrossel. Implementa hoje. 🧠\n\nFormação completa → link na bio',
    hashtags: '#geo #chatgpt #ia #seo #marketing #sites #agencia #estruturadigital #inteligenciaartificial',
  },
  {
    id: 4,
    topico: 'Landing Page',
    tipo: 'carrossel',
    gancho: 'Não é o design que converte. É a ordem das seções. A maioria das landing pages está na ordem errada — e perde cliente toda hora.',
    slides: [
      {
        titulo: 'Sua landing page está na ordem errada.',
        corpo: 'Não é o design.\nNão é a cor do botão.\nNão é a fonte.\n\nÉ a ordem das seções.\n\nVou te mostrar a estrutura que converte. 👇',
      },
      {
        titulo: 'LP vs site institucional',
        corpo: 'Site institucional:\n→ Multi-página\n→ Para quem já te conhece\n→ Explora por curiosidade\n\nLanding page:\n→ Uma página, uma ação\n→ Para tráfego de anúncio ou IA\n→ Converter ou nada\n\nPara anúncio: LP sempre ganha.',
      },
      {
        titulo: 'A estrutura que converte (7 seções)',
        corpo: '1. HERO — resultado do cliente em 1 frase\n2. PROBLEMA — a dor dele, nas palavras dele\n3. SOLUÇÃO — benefícios, não features\n4. COMO FUNCIONA — 3 passos simples\n5. PROVA SOCIAL — nome, cidade, resultado\n6. FAQ — remove objeções\n7. CTA FINAL — urgência real\n\nEssa ordem não é aleatória.',
      },
      {
        titulo: 'O erro mais comum no HERO',
        corpo: 'ERRADO:\n"Somos a melhor empresa de energia solar de Ijuí"\n\nCERTO:\n"Sua conta de luz cai 95% — ou você não paga"\n\nRegra: headline sobre o RESULTADO do cliente, nunca sobre você.\n\nOs primeiros 5 segundos decidem se fica ou sai.',
      },
      {
        titulo: 'Feature vs Benefício',
        corpo: 'Feature: "Painel fotovoltaico de 400W bifacial"\nBenefício: "Gera energia mesmo em dias nublados"\n\nFeature: "Consultoria de 2 horas"\nBenefício: "Você sai com um plano pronto pra implementar"\n\nCliente compra benefício. Sempre.',
      },
      {
        titulo: '6 erros que matam conversão',
        corpo: '× Menu de navegação (= fuga)\n× Múltiplos CTAs (= confusão)\n× Headline sobre a empresa (= ninguém liga)\n× Formulário longo (= fricção)\n× Sem prova social (= sem confiança)\n× Não funciona no celular (= 70% do tráfego perdido)',
      },
      {
        titulo: 'Quanto vale saber isso',
        corpo: 'Landing page que converte = cliente que fecha anúncio pago.\n\nVocê não entrega "uma página bonita".\n\nVocê entrega uma máquina de lead.\n\nIsso tem preço diferente.\n\nFormação completa → link na bio\n@ocorreia.com.br',
      },
    ],
    legenda: 'Sua landing page pode estar jogando lead fora toda hora.\n\nNão é o design. É a ordem das seções — e o que você coloca em cada uma.\n\nEsse carrossel tem a estrutura completa. Salva agora. 📌\n\nFormação → link na bio',
    hashtags: '#landingpage #conversao #marketing #trafegopago #sites #copywriting #agencia #estruturadigital',
  },
  {
    id: 5,
    topico: 'Precificação',
    tipo: 'carrossel',
    gancho: 'Enquanto você cobra R$800/mês de post, eu cobro R$7.000 por projeto. A diferença não é talento. É o que você entrega.',
    slides: [
      {
        titulo: 'Como cobrar R$7.000 por um site.',
        corpo: 'Sem ser "caro".\nSem "dar desconto".\nSem enrolação.\n\nA resposta é mais simples do que você imagina. 👇',
      },
      {
        titulo: 'O erro de precificar por hora',
        corpo: '"Quanto tempo vai levar?" → errada\n\nProfissional de resultado precifica pelo valor entregue.\n\nSe o site gera 20 leads/mês e cada lead vale R$3.000 pra ele →\nvocê entregou R$60k de valor potencial.\n\nCobrar R$7.000 não é caro. É barato.',
      },
      {
        titulo: 'Os 3 pacotes que fecham venda',
        corpo: 'Pacote 01 — Estrutura Base: R$4.500–R$5.500\n(Site Next.js + SEO técnico + GMB)\n\nPacote 02 — Estrutura + Conversão: R$7.000–R$9.000\n(+ Landing page + GEO completo)\n\nPacote 03 — Tudo: R$11.000–R$14.000\n(+ Conteúdo SEO + Relatório mensal)',
      },
      {
        titulo: 'O diagnóstico gratuito que vende sozinho',
        corpo: 'Antes de qualquer proposta:\n\n1. Roda o site no PageSpeed Insights\n2. Pesquisa o cliente no ChatGPT\n3. Verifica o GMB\n\nLeva o diagnóstico pra reunião.\nO problema se vende sozinho.\n\n"Seu site tira 34/100. Seu concorrente tira 87. Você não aparece no ChatGPT."',
      },
      {
        titulo: 'Como criar recorrência',
        corpo: 'Projeto paga uma vez. Recorrência constrói patrimônio.\n\nDepois do projeto:\n→ Manutenção mensal: R$800–R$1.500\n→ Conteúdo SEO: R$1.500–R$3.000\n→ Gestão GMB: R$500–R$800\n\n3 clientes = R$6.000/mês\nTodo mês. Sem novo projeto.',
      },
      {
        titulo: 'A frase que fecha venda',
        corpo: 'Quando o cliente diz "é caro":\n\n"Depende do que você compara. Você não está comprando site. Está comprando um ativo que gera lead enquanto você dorme."\n\n"Me deixa fazer o diagnóstico do seu site atual. De graça. Você decide com informação, não com achismo."',
      },
      {
        titulo: 'Você não está vendendo site.',
        corpo: 'Você está vendendo:\n✓ Presença no Google\n✓ Recomendação no ChatGPT\n✓ Lead que entra todo dia\n✓ Ativo que trabalha enquanto o cliente dorme\n\nIsso vale R$7.000.\nE você sabe entregar.\n\nFormação → link na bio @ocorreia.com.br',
      },
    ],
    legenda: 'Você não vende site. Você vende lead recorrente.\n\nE quando o cliente entende isso, o preço deixa de ser objeção.\n\nComo chegar nesse ponto → esse carrossel explica. Salva. 📌\n\nFormação completa → link na bio',
    hashtags: '#precificacao #freelancer #marketing #agencia #sites #estruturadigital #socialmedia #gestordetrafego',
  },
  {
    id: 6,
    topico: 'Por que WordPress não ranqueia',
    tipo: 'carrossel',
    gancho: 'Seu cliente está pagando pra ter um site que o Google penaliza. E ninguém falou isso pra ele ainda.',
    slides: [
      {
        titulo: 'WordPress lento = Google penaliza.',
        corpo: 'Não é opinião.\nÉ a métrica oficial do Google chamada Core Web Vitals.\n\nE a maioria dos sites WordPress reprova.\n\n👇 O que está acontecendo',
      },
      {
        titulo: 'Por que WordPress fica lento',
        corpo: '× Plugin de SEO → mais código\n× Plugin de cache → mais código\n× Plugin de segurança → mais código\n× Plugin de formulário → mais código\n× Tema premium → mais código\n\nResultado: 4 segundos pra abrir no celular.\nGoogle odeia. Usuário sai. Conversão zero.',
      },
      {
        titulo: 'O que o Google exige hoje',
        corpo: 'LCP (maior elemento) → abaixo de 2,5 segundos\nINP (resposta ao clique) → abaixo de 200ms\nCLS (estabilidade do layout) → abaixo de 0,1\n\nSite que reprova nesses 3 ranqueia abaixo de quem passa.\nSempre.',
      },
      {
        titulo: 'WordPress vs Next.js — comparação real',
        corpo: 'WordPress com plugins:\n→ Nota PageSpeed: 31–54/100\n→ LCP: 4–8 segundos\n→ Indexação: parcial\n\nNext.js limpo:\n→ Nota PageSpeed: 92–98/100\n→ LCP: 0,8–1,4 segundos\n→ Indexação: completa em 24h',
      },
      {
        titulo: 'Quando WordPress ainda faz sentido',
        corpo: 'Se o cliente já tem WordPress com:\n→ Muito conteúdo publicado\n→ Equipe que sabe usar\n→ Integração com e-commerce complexo\n\nFaz sentido otimizar, não migrar.\n\nMas para NOVO projeto com foco em SEO e IA?\nNext.js não tem concorrente.',
      },
      {
        titulo: 'Como você usa isso como diferencial',
        corpo: 'Pergunta pra fazer no diagnóstico:\n\n"Você sabia que o site atual reprova nas métricas de velocidade que o Google usa pra ranquear?"\n\nMostra o PageSpeed. 34/100.\n\nExplica que você entrega 90+.\n\nA reunião muda de patamar.',
      },
      {
        titulo: 'Você não vende site. Você vende performance.',
        corpo: 'E performance tem preço.\n\nR$7.000 de projeto vs\nR$800/mês eternamente sem resultado.\n\nFormação completa sobre estrutura digital:\nLink na bio → @ocorreia.com.br',
      },
    ],
    legenda: 'Seu cliente está pagando hosting de WordPress que o Google penaliza toda hora.\n\nNinguém falou isso pra ele ainda.\n\nVocê pode ser o primeiro — e o profissional que resolve.\n\nSalva esse carrossel. 📌\n\nFormação → link na bio',
    hashtags: '#wordpress #nextjs #seo #google #sites #marketing #agencia #estruturadigital #webdesign',
  },
]
