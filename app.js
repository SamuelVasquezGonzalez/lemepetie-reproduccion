let video = document.querySelector('.contenido')
let botonAnterior = document.querySelector('.boton1')
let botonSiguiente = document.querySelector('.boton2')
let nombreVideo = document.querySelector('.nombre')
let nombrePagina = document.querySelector('.nombre-pagina')
let visualizaciones = document.querySelector(".visualizaciones")

let enlace = "multimedia/video";
let formato = ".mp4";
let numero = 1

botonAnterior.addEventListener('click', anterior)

botonSiguiente.addEventListener('click', siguiente)

function siguiente() {
    numero += 1
    if(numero > 4){
        numero = 4
        alert("No hay mas videos por mostrar")
    }else{
        nombre = "Video " + numero
        visualizaciones.innerHTML = "Visitas: " + Math.round(Math.random()*100000000);
        nombreVideo.innerHTML = nombre
        enlaceFinal = enlace + numero + formato
        nombrePagina.innerHTML = "Lemepetie - " + nombre;
        video.src = enlaceFinal
    }
}

function anterior () {
    numero -= 1
    if(numero < 1){
        numero = 1
        alert("Imposible realizar esta accion")
    }else{
        nombre = "Video " + numero
        visualizaciones.innerHTML = "Visitas: " + Math.round(Math.random()*100000000);
        nombreVideo.innerHTML = nombre
        enlaceFinal = enlace + numero + formato
        nombrePagina.innerHTML = "Lemepetie - " + nombre;
        video.src = enlaceFinal
    }
}

// Por Samuel Vasquez Gonzalez