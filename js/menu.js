document.querySelector('.menu-abrir').onclick = function(){
  document.documentElement.classList.add('menu-ativo'); //Adiciona uma classe
};

document.querySelector('.menu-fechar').onclick = function(){
  document.documentElement.classList.remove('menu-ativo')// Remove a classe menu-ativo
};

document.documentElement.onclick = function(event){
  if (event.target === document.documentElement){
    document.documentElement.classList.remove('menu-ativo');
  }
}
