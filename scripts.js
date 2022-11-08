let toggle = document.querySelector('.toggle');
let navbaroffcanvas = document.querySelector('.navbar-offcanvas');
let container = document.querySelector('.container');

toggle.addEventListener('click', function(){
    navbaroffcanvas.classList.toggle('open');
    container.classList.toggle('container-translate');
})

function btnvalidate() {
    var element = document.querySelector(".fixed-cookies");
    element.classList.add("displaynone");
  }