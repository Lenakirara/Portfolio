// evento para botão 'submit'
document.querySelector('.form__content').addEventListener('submit', function(e) {
  e.preventDefault();

  alert('Enviado com sucesso!')
// Limpando os campos
  this.reset(); 
});

// alternado a classe "open" => 
function hamburgerMenu() {
  var menu = document.querySelector('.menu__container');
  menu.classList.toggle('menu_open');
}
