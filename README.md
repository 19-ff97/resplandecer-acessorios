# Resplandecer Acessórios — Site Estático (Simulado)

Este projeto é um site estático demonstrativo para a loja **Resplandecer Acessórios**.
Ele foi criado com HTML, CSS e JavaScript simples, com botões de pagamento **simulados** (Mercado Pago).
Você pode usar este projeto como base e, quando tiver conta do Mercado Pago, conectar os pagamentos reais.

## Estrutura do projeto
- `index.html` — página principal
- `styles.css` — estilo (cinza claro + branco)
- `script.js` — interatividade (modal de compra e links de WhatsApp)
- `assets/` — pasta de imagens exemplo (você pode substituir pelas suas)
- `README.md` — este arquivo

## Como trocar imagens e textos
- As imagens estão em `assets/` (ex: `prod1.jpg`, `prod2.jpg`). Substitua pelos seus arquivos mantendo o mesmo nome ou altere o `src` no HTML.
- Para mudar preços, títulos e descrições, edite os elementos no `index.html` e o objeto `products` em `script.js` (caso queira mudar o que aparece no modal).

## Como ativar pagamentos reais (Mercado Pago)
1. Crie uma conta no Mercado Pago. Use credenciais de vendedor (não use dados de terceiros sem autorização).
2. No painel do Mercado Pago, gere as credenciais (Access Token / Public Key) para integrações de checkout.
3. Integre via **Checkout Pro** (recomendado para quem não é dev): crie preference via API e use o link retornado como botão "Comprar".
   - Documentação: https://www.mercadopago.com.br/developers/pt/guides/checkout-pro/receiving-payment
4. Se quiser, posso te ajudar a conectar o Checkout Pro quando você tiver as credenciais.

## Como publicar grátis (GitHub Pages - opção simples)
1. Crie uma conta no GitHub e um repositório (ex: `resplandecer-acessorios`).
2. Faça upload dos arquivos (`index.html`, `styles.css`, `script.js`, pasta `assets`).
3. No repositório, vá em **Settings > Pages** e defina a branch `main` e / (root). O site ficará disponível em `https://<seunome>.github.io/<repo>/`.

## Como publicar grátis (Vercel - recomendado para deploy rápido)
1. Crie conta em https://vercel.com/ (pode usar GitHub para conectar).
2. Faça deploy do repositório ou arraste os arquivos diretamente para o painel do Vercel.
3. Pronto — o site ficará online com domínio gratuito vercel.app.

---
Se quiser, eu posso:
- Gerar as imagens de exemplo (já incluídas) ou deixar instruções de substituição.
- Fazer o deploy pra você (se você me autorizar a subir para um repositório GitHub que você criar — eu te explico passo a passo).
- Ajudar a conectar o Mercado Pago quando tiver a conta.

