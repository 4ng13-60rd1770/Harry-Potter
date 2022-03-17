// import{ personajes } from "../data.js";

const mostrarImagen =  document.getElementById("personajes");
let nombreCasa = "";
let imagenCasa = "";
let nombrePersonaje = "";
let imagenPersonaje = "";

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const btnComenzar = document.getElementById("comenzar");
let btnNuevoPersonaje = document.getElementById("nuevoPersonaje");

btnComenzar.addEventListener('click', function (e){
    e.preventDefault()
    imprimirNuevosPersonajes();
});

btnNuevoPersonaje.addEventListener('click', function (e){
    e.preventDefault()
    imprimirNuevosPersonajes();
});

function imprimirNuevosPersonajes(){

    let numeroAleatorio = random(0, 4);
    let numeroPersonajeAleatorio = random(0, 4);

    for (let i = 0; i < personajes.length; i++) {
        let infoCasa = personajes[i]['casa'];
        for (let j = 0; j < infoCasa.length; j++) { 
            nombreCasa = infoCasa[numeroAleatorio]["nombre"];
            imagenCasa = infoCasa[numeroAleatorio]["imagen"];
            const personajes = infoCasa[numeroAleatorio]["personajes"];
            for(let k = 0; k < personajes.length; k++){
                nombrePersonaje = personajes[numeroPersonajeAleatorio]["nombre"];
                imagenPersonaje = personajes[numeroPersonajeAleatorio]["imagen"];
            }
        }
    }

    mostrarImagen.innerHTML = `
                        <div>
                            <p>${nombreCasa}</p>            
                            <img src="${imagenCasa}" alt="${nombreCasa}">
                            <p>${nombrePersonaje}</p>
                            <img src="${imagenPersonaje}" alt="${nombrePersonaje}">
                        </div>`;
}

