const burger = document.querySelector('.burger');
// Seleciona o elemento nav
const nav = document.querySelector('header nav');

// Adiciona um evento de clique no .burger
burger.addEventListener('click', () => {
  // Toggle para alternar a exibição do menu
  nav.classList.toggle('show-menu');
});
