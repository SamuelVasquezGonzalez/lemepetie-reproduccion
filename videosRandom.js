let nombresVideos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"]

// Contenedor
let tarjetas = document.querySelector('.tarjetas')

function crearVideos (){
    let random = Math.round(Math.random()*(0, 3))
    let visualizacionesRandom = Math.round(Math.random()*1000000)

    let botonVideo = document.createElement('button');
    botonVideo.classList.add("botonVideo")

    // tarjeta
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    // Imagen
    let imagen = document.createElement('video');
    imagen.classList.add('imagen');
    let archivo = "multimedia/";
    let nombreFinal = nombresVideos[random];
    imagen.src = archivo + nombreFinal

    // Info
    let info = document.createElement("div");
    info.classList.add('info');

    let nombreVideo = document.createElement('h3');
    nombreVideo.classList.add('titulo');
    nombreVideo.innerHTML = nombreFinal

    let visualizacionesVideo = document.createElement('p');
    visualizacionesVideo.classList.add('visualizaciones');
    visualizacionesVideo.classList.add('vid');
    visualizacionesVideo.innerHTML = "Visitas: " + visualizacionesRandom;

    info.appendChild(nombreVideo)
    info.appendChild(visualizacionesVideo)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(info)
    botonVideo.appendChild(tarjeta)
    tarjetas.appendChild(botonVideo)
}

crearVideos()
crearVideos()
crearVideos()
crearVideos()
crearVideos()
crearVideos()


document.querySelectorAll('.botonVideo').forEach(item => {
    item.addEventListener('click', e => {
        let contenido = document.querySelector(".contenido")
        var index = e.target.src;
        contenido.src = index;
    })
})


