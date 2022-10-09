document
    .querySelector('#formTasca button')
    .addEventListener("click", function (e) { e.preventDefault(); addTask(); });
document
    .querySelector('#formSubtasca button')
    .addEventListener("click", function (e) { e.preventDefault(); addSubTask(); countTime();});
document
    .querySelector('#formResponsable button')
    .addEventListener("click", function (e) { e.preventDefault(); addResponsable(); });
document
    .querySelector('#tasques')
    .addEventListener("click", function (e) {
        if (e.target.nodeName === 'DIV') {
            
        }
        console.log(e.target.parentNode.id) 
        console.log(e.target.nodeName) 

    });

const task = [];
const subtask = []

let id = 0;
let tareaSeleccionada;

function addTask() {
   
    const tituloTarea = document.querySelector('#tasca').value;
    const prioridadseleccionada = document.querySelector('#prioritats').value;

    let prioridad;
    switch (prioridadseleccionada) {
        case '1': prioridad = "w3-pale-blue"; break;
        case '2': prioridad = "w3-pale-yellow"; break;
        case '3': prioridad = "w3-pale-red"; break;
    }
    
    task.push({id, tituloTarea, prioridad, subtask})
    
    console.log(task);
    let tareaHtml = `
    <div class="w3-container w3-quarter">
    <div class="${task[id].prioridad} tasca" id="${task[id].id}">
        <h2 class="w3-center">#${task[id].id} - ${task[id].tituloTarea}</h2>
        <h4></h4>
            <ul>
                
            </ul>
        <h4>Total: <span class="total${task[id].id}">0</span> h.</h4>
        </div>
    </div>
    <div>`

    document.querySelector('#tasques').insertAdjacentHTML('beforeend', tareaHtml);
    id++
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