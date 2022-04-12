//------------- POO ---------- //

class videosPoo {
    constructor(nombre, visitas, direccion){
        this.nombre = nombre;
        this.visitas = "Visitas: " + visitas;
        this.direccion = direccion;
        this.array = [nombre, visitas, direccion]
    }
}


    

let videoEjemplo1 = new videosPoo("Terraria Auto-pause ", 154.221, "multimedia/video1.mp4");
let videoEjemplo2 = new videosPoo("Ska-p ", 100.000, "multimedia/video2.mp4");
let videoEjemplo3 = new videosPoo("Bodies - Drowing Pool ", 644.326, "multimedia/video3.mp4");
let videoEjemplo4 = new videosPoo("Persiana Americana - soda sterero ", 154.221, "multimedia/video4.mp4");



// Contenedor
let tarjetas = document.querySelector('.tarjetas')

function crearVideos (videoVariable){

    let botonVideo = document.createElement('button');
    botonVideo.classList.add("botonVideo")

    // tarjeta
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');

    // Imagen
    let imagen = document.createElement('video');
    imagen.classList.add('imagen');
    imagen.src = videoVariable.array[2]

    // Info
    let info = document.createElement("div");
    info.classList.add('info');

    let nombreVideo = document.createElement('h3');
    nombreVideo.classList.add('titulo');
    nombreVideo.innerHTML = videoVariable.array[0]

    let visualizacionesVideo = document.createElement('p');
    visualizacionesVideo.classList.add('visualizaciones');
    visualizacionesVideo.classList.add('vid');
    visualizacionesVideo.innerHTML = videoVariable.array[1]

    info.appendChild(nombreVideo)
    info.appendChild(visualizacionesVideo)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(info)
    botonVideo.appendChild(tarjeta)
    tarjetas.appendChild(botonVideo)
}

crearVideos(videoEjemplo1)
crearVideos(videoEjemplo2)
crearVideos(videoEjemplo3)
crearVideos(videoEjemplo4)


document.querySelectorAll('.botonVideo').forEach(item => {
    item.addEventListener('click', e => {
        console.log(e)
        console.log(item)
        let contenido = document.querySelector(".contenido")
        var url = e.target.src;
        contenido.src = url;
    })
})


