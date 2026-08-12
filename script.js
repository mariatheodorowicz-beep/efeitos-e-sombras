document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Função para alternar o tema via atributo data-theme
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    themeToggleBtn.querySelector('span').textContent = 
      newTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  });

  // Evento nos botões dos cards
  const buttons = document.querySelectorAll('.card__button');
  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      alert(`Acessando o artigo ${idx + 1}...`);
    });
  });
});
