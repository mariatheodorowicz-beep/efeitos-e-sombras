document.addEventListener('DOMContentLoaded', () => {
  // Ação para os botões "Leia mais"
  const buttons = document.querySelectorAll('.card-btn');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      alert(`Você clicou para ler mais na Postagem ${index + 1}!`);
    });
  });

  // Funcionalidade de Alternar Tema (Modo Escuro / Claro)
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Atualiza o texto do botão
    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = 'Mudar Tema ☀️';
    } else {
      themeToggleBtn.textContent = 'Mudar Tema 🌙';
    }
  });
});
