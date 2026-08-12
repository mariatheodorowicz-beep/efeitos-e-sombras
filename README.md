# 🎨 Desafio CSS - Cards com Variáveis e Temas

Este projeto implementa uma lista de postagens horizontais utilizando **CSS Flexbox**, **Variáveis CSS** e suporte dinâmico a **Modo Escuro (Dark Mode)**.

## 🚀 Diferenciais desta Implementação

- **Variáveis CSS (`:root` e `[data-theme]`):** Centralização de todas as cores e sombras em um só lugar. A sombra no `:hover` no Modo Escuro ganha um tom azul brilhante através da variável `--card-shadow-hover`.
- **Nomenclatura BEM:** Código CSS limpo e legível utilizando o padrão `.block__element`.
- **Efeito Zoom com Interatividade:**
  - `transform: scale(1.02)` no seletor `.card:hover`.
  - Transição suave controlada via `cubic-bezier`.
- **Flexbox Responsivo:**
  - `flex-direction: row` nos cards (`article`).
  - `align-self: flex-start` aplicado nos botões para alinhar ao topo do eixo transversal.

## 📁 Estrutura do Projeto
