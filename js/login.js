
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');


hamburgerIcon.addEventListener('click', () => {

  hamburgerIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

var EntrarPainel = document.getElementById("EntrarPainel")
var CadastroSite = document.getElementById("CadastroSite")
var Indicador = document.getElementById("Indicador")

function Cadastro(){

  CadastroSite.style.transform = "translateX(0px)";
  EntrarPainel.style.transform = "translateX(0px)";
  Indicador.style.transform = "translateX(100px)";
}

function Entrar(){

  CadastroSite.style.transform = "translateX(300px)";
  EntrarPainel.style.transform = "translateX(300px)";
  Indicador.style.transform = "translateX(0px)";
}


