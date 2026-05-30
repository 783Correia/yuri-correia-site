# AULA 03 — SEO Técnico: O que o Google Verifica Antes de Ranquear
**Duração estimada:** 12–15 min  
**Tom:** didático e prático, com exemplos concretos

---

## GANCHO (0:00–0:50)

Todo mundo fala de SEO. Mas a maioria fala de SEO de conteúdo — palavra-chave aqui, texto lá, título otimizado.

Isso importa. Mas existe uma camada anterior que a maioria ignora completamente.

SEO técnico.

É o que o Google verifica antes mesmo de ler uma palavra do seu conteúdo. Se essa camada estiver errada, não importa o quanto você escreveu — o site não ranqueia.

Hoje você vai aprender o que é, por que importa e como implementar do zero.

---

## O QUE É SEO TÉCNICO (0:50–2:30)

SEO técnico são os sinais de infraestrutura que você passa pro Google sobre o seu site.

Pensa assim: quando o Google manda um robô visitar seu site, esse robô precisa entender algumas coisas antes de decidir se ranqueia ou não.

"Esse site carrega rápido?" — Core Web Vitals.
"Esse site funciona no celular?" — Mobile-first.
"Eu consigo ler e entender esse site?" — HTML semântico.
"Quem é essa empresa, o que ela faz, onde fica?" — Schema markup.
"Que páginas existem nesse site?" — Sitemap.
"Tem alguma página que eu não devo indexar?" — Robots.txt.

Se você responde essas perguntas corretamente, você sai na frente de 90% dos sites no Brasil.

---

## SCHEMA MARKUP (2:30–6:00)

Esse é o mais importante e o mais ignorado.

Schema markup é um código JSON que você coloca dentro do seu site que descreve pra máquina exatamente quem é o negócio.

Deixa eu te mostrar o que isso parece na prática.

Imagina uma empresa de energia solar em Ijuí. Você coloca um bloco de código no site que diz:

```
Tipo: Empresa local
Nome: Sol Center
Serviço: Instalação de painéis solares
Cidade: Ijuí, Rio Grande do Sul
Telefone: (55) 99999-9999
Avaliação: 4.9 estrelas, 87 avaliações
Fundada em: 2015
```

Isso não aparece visualmente no site. Mas o Google lê. O ChatGPT lê. O Gemini lê.

E quando alguém pesquisa "empresa de energia solar em Ijuí" — ou pergunta pro ChatGPT "qual empresa de energia solar você indica em Ijuí" — essa empresa tem vantagem enorme sobre quem não tem schema.

Tipos de schema mais importantes:

**LocalBusiness** — pra empresa local. Nome, endereço, telefone, horário, área de atendimento.

**Organization** — pra empresa em geral. Identidade, redes sociais, fundação.

**FAQPage** — pra página de perguntas frequentes. Cada pergunta e resposta é indexada separadamente pelo Google. Aparece direto no resultado de busca.

**Product / Service** — pra produtos e serviços específicos.

Como implementar? No Next.js você coloca isso no `layout.tsx` ou `page.tsx` como um script JSON-LD. Com Claude Code, você descreve a empresa e pede pra gerar o schema completo. Leva menos de 5 minutos.

---

## SITEMAP (6:00–8:00)

Sitemap é um arquivo XML que lista todas as páginas do seu site.

Pensa num mapa de ruas. O Google precisa saber quais ruas existem pra poder visitar todas.

Sem sitemap, o Google pode não encontrar páginas importantes do seu site — principalmente se o site não tem links internos bem estruturados.

No Next.js você cria um arquivo `sitemap.ts` que gera o sitemap automaticamente. Cada vez que você adiciona uma página nova, o sitemap atualiza sozinho.

Depois de publicar o site você vai no Google Search Console — que é gratuito — e submete o sitemap. O Google recebe, indexa, e você consegue ver quais páginas foram encontradas.

---

## ROBOTS.TXT (8:00–9:30)

Robots.txt é um arquivo de texto simples que diz pros robôs de busca o que eles podem ou não visitar.

Por padrão você quer que o Google indexe tudo. Mas às vezes tem páginas que não devem aparecer no Google — página de administração, página de teste, área de cliente.

O robots.txt bloqueia essas páginas.

No Next.js você cria um arquivo `robots.ts` que gera isso automaticamente.

Tem uma linha extra importante no robots.txt hoje em dia: você pode autorizar ou bloquear o GPTBot — que é o robô que o ChatGPT usa pra coletar informações.

Se você quer que o ChatGPT saiba sobre a empresa, você autoriza. Se não quer, você bloqueia. A maioria das empresas quer que o ChatGPT saiba — porque isso é exatamente o que gera recomendação.

---

## CANONICAL E META TAGS (9:30–11:00)

Mais dois itens rápidos mas importantes.

**Canonical.** Quando o mesmo conteúdo aparece em mais de uma URL, o Google fica confuso sobre qual ranquear. A tag canonical diz "essa é a URL original, indexa essa".

Exemplo: `seusite.com/servicos` e `seusite.com/servicos?ref=instagram` têm o mesmo conteúdo mas URLs diferentes. O canonical aponta pro primeiro.

**Meta description.** É o texto que aparece abaixo do título no Google. Não influencia diretamente o ranqueamento, mas influencia o clique. Uma boa meta description aumenta a taxa de clique — e mais clique manda sinal positivo pro Google.

Cada página precisa de uma meta description única, com até 160 caracteres, que explica o que o usuário vai encontrar ali.

---

## CORE WEB VITALS (11:00–13:00)

Esse é o conjunto de métricas que o Google usa pra medir a experiência do usuário.

Três métricas principais:

**LCP — Largest Contentful Paint.** Tempo pra o maior elemento da tela aparecer. Ideal: menos de 2.5 segundos.

**FID / INP — Interação.** Tempo que o site leva pra responder quando você clica em algo. Ideal: menos de 200ms.

**CLS — Cumulative Layout Shift.** O quanto o layout "pula" enquanto carrega. Aquele site que você vai clicar num botão e o botão muda de lugar — isso é CLS alto. Péssimo.

Site em Next.js com boas práticas passa nesses três de primeira. É diferente de WordPress com 15 plugins — que geralmente reprova em todos os três.

Você pode checar qualquer site em `pagespeed.web.dev`. Coloca o URL do seu cliente e vê a nota. Se estiver vermelho, é argumento de venda pra você.

---

## COMO VERIFICAR SE ESTÁ TUDO CERTO (13:00–14:30)

Três ferramentas gratuitas que você vai usar toda semana:

**Google Search Console** — submete sitemap, vê quais páginas foram indexadas, vê quais palavras-chave estão gerando impressão e clique.

**PageSpeed Insights** — verifica Core Web Vitals. Dá nota de 0 a 100. Acima de 90 é ótimo.

**Google Rich Results Test** — verifica se o schema está correto e sendo reconhecido pelo Google.

Essas três ferramentas juntas te dão o diagnóstico técnico completo de qualquer site.

---

## ENCERRAMENTO (14:30–15:00)

Na próxima aula a gente vai pro GEO — que é a parte mais nova e mais poderosa disso tudo.

Como fazer uma empresa aparecer quando alguém pergunta pro ChatGPT. Como o algoritmo da IA decide quem recomendar. E o que você implementa hoje pra já estar lá quando o cliente perguntar.

Até lá.

---

*[FIM DA AULA]*
