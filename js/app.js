//variables
const resultado = document.querySelector('#resultado');
const ano = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

console.log(max)
console.log(min)



//eventos
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(); // muestra los autos al cargar

    // llena las pociones de anos
    llenarSelect();
})

// funciones

function mostrarAutos() {
    autos.forEach( auto => {

        const { marca, modelo, year, puertas, trasmicion, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} - ${trasmicion} - ${precio} - ${color}
        `;

        //insertar 
        resultado.appendChild(autoHTML)
    })
}

// geenra los anos del select

function llenarSelect() {
    for (let i = max; i > min; i--)
}