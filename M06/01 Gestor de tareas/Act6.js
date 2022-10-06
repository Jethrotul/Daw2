document
    .querySelector('#formTasca button')
    .addEventListener("click", function (e) { e.preventDefault(); addTask(); });
document
    .querySelector('#formSubtasca button')
    .addEventListener("click", function (e) { e.preventDefault(); addSubTask(); countTime();});
document
    .querySelector('#formResponsable button')
    .addEventListener("click", function (e) { e.preventDefault(); addResponsable(); });

let task = [];
let subtask = []

let numerador = 0;
let tareaSeleccionada;

function addTask() {
    numerador++
    const tituloTarea = document.querySelector('#tasca').value;
    const prioridadseleccionada = document.querySelector('#prioritats').value;

    let prioridad;
    switch (prioridadseleccionada) {
        case '1': prioridad = "w3-pale-blue tasca"; break;
        case '2': prioridad = "w3-pale-yellow tasca"; break;
        case '3': prioridad = "w3-pale-red tasca"; break;
    }

    let tareaHtml = `
    <div class="w3-container w3-quarter">
    <div class="${prioridad}" id="${numerador}">
        <h2 class="w3-center">#${numerador} - ${tituloTarea}</h2>
        <h4></h4>
            <ul>
                
            </ul>
        <h4>Total: <span class="total${numerador}">0</span> h.</h4>
        </div>
    </div>
    <div>`

    document.querySelector('#tasques').insertAdjacentHTML('beforeend', tareaHtml);
    const divTarea = document.getElementById(numerador);
    divTarea.addEventListener("click", function (e) {
        //e.preventDefault();
        tareaSeleccionada = e.currentTarget.id;
    })
}

function addResponsable() {
    const responsable = document.querySelector('#responsableTasca').value
    const buscaResponsable = document.querySelector(`[id="${tareaSeleccionada}"] h4`);
    buscaResponsable.classList.add("w3-center");
    buscaResponsable.innerText = responsable;
}

function addSubTask() {
    const subTarea = document.querySelector('#subTasca').value
    const subTareaHoras = document.querySelector('#horesPrevistes').value
    const subTareaLi = document.querySelector(`[id="${tareaSeleccionada}"] ul`);
    subTareaLi.insertAdjacentHTML('beforeend', `<li>${subTarea} <span class=sub${tareaSeleccionada}>${subTareaHoras}</span> hores</li>`)
    subTareaLi.lastElementChild.addEventListener("click", function (e) { 
        e.currentTarget.classList.toggle("tascaFeta");
        countTime();
        tareaTermianda();
    });
    subTareaLi.lastElementChild.addEventListener('dblclick', (e) => {
        
        e.currentTarget.remove();
        //e.target.parentNode.remove();
        countTime();
        tareaTermianda();
    });
}

function countTime() {
    let subTareaLia;
    let sumadorHoras= 0;
    let restadorHoras= 0;
    const subTareaLi = document.querySelectorAll(`.sub${tareaSeleccionada}`).length;
    for (let index = 0; index < subTareaLi; index++) {
        subTareaLia = document.querySelectorAll(`.sub${tareaSeleccionada}`)[index];
        sumadorHoras = sumadorHoras + parseInt(subTareaLia.textContent)
        //console.log(sumadorHoras);

        // //subTareaLiadf = document.querySelectorAll(`li:not([.tascaFeta]  .sub${tareaSeleccionada}`)[index];
        // subTareaLiadf = document.querySelectorAll(`not:li(.tascaFeta)`)[index];

        // console.log(subTareaLiadf.textContent);
        // //restadorHoras = restadorHoras + parseInt(subTareaLiadf.textContent)
    }
    //console.log(sumadorHoras);
    let totalHoras = sumadorHoras - restadorHoras
    document.querySelector(`.total${tareaSeleccionada}`).innerText = totalHoras;
}

function tareaTermianda() {
    let clase;
    let claseIncrustada
    const contadorLi = document.querySelectorAll(`[id="${tareaSeleccionada}"] li`).length;
    const contadorLiHechos = document.querySelectorAll(`[id="${tareaSeleccionada}"] .tascaFeta`).length;
    const div = document.querySelector(`[id="${tareaSeleccionada}"]`);

    if (contadorLi == contadorLiHechos) {
        clase = div.classList.value
        console.log(clase);
        switch (clase) {
            case "w3-pale-blue tasca":claseIncrustada = "azul";break;
            case "w3-pale-yellow tasca":claseIncrustada = "amarillo";break;
            case "w3-pale-red tasca":claseIncrustada = "rojo";break;   
            default: break;
        }
        console.log(claseIncrustada);
        div.className = "w3-pale-green tasca " + claseIncrustada;
    } else {
        clase = div.classList.value
        
        console.log(clase);
    }
}