const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

// Al hacer clic, activamos el menu y la animacion del icono 
hamburguer.addEventListener("clck", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//Opional: cerrar el menu cuando se hace clic en un enlace 
    
    