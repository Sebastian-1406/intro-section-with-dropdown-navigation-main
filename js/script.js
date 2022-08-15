botonHamburguesa = document.getElementById("boton-hamburguesa")
menu = document.querySelector(".menu")

botonHamburguesa.addEventListener("click", () => {
    if(botonHamburguesa.checked){
        menu.classList.add("menu-activo")
    }else{
        menu.classList.remove("menu-activo")
    }
})
