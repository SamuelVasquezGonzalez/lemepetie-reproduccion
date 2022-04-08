let iconoUsuario = document.querySelector(".user")
let subMenu = document.querySelector(".submenu")
let cuerpo = document.querySelector('body')

iconoUsuario.addEventListener('click', mostrar)

function mostrar () {
    subMenu.classList.toggle("menuVisible")
}