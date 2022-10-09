document.querySelector('#formTasca button').addEventListener("click", function (e) { e.preventDefault(); addTasks(); });
document.querySelector('#formSubtasca button').addEventListener("click", function (e) { e.preventDefault(); addSubTasks(); countTime();});
document.querySelector('#formResponsable button').addEventListener("click", function (e) { e.preventDefault(); addResponsable(); });
document.querySelector('#tasques').addEventListener("click", function (e) {
    if (e.target.nodeName === 'DIV') {tareaSeleccionada= e.target.id}    
    if (e.target.nodeName === 'H2' || e.target.nodeName === 'H4' || e.target.nodeName === 'UL') {
        tareaSeleccionada = e.target.parentNode.id
        console.log("No es LI " + e.target.parentNode.id);
    }
    if (e.target.nodeName === 'LI') {
        console.log(e.target.parentNode.id)
    }
});

const tasks = [];
const subtasks = []
let tituloTarea;

let id = 0;
let tareaSeleccionada;

function addTasks() {
    tituloTarea = document.querySelector('#tasca').value;
    const prioridadseleccionada = document.querySelector('#prioritats').value;
    let prioridad;
    let terminada = false;
    switch (prioridadseleccionada) {
        case '1': prioridad = "w3-pale-blue"; break;
        case '2': prioridad = "w3-pale-yellow"; break;
        case '3': prioridad = "w3-pale-red"; break;
        default : prioridad = null;
    }
    // prioridad !== null ||
    if (prioridad !== null) {
        if (tasks.length === 0) {
            tasks.push({id, tituloTarea, prioridad, subtasks, terminada});
            pintarTarea();
        }
        else if  (existeTarea(tituloTarea) == false && tasks.length !== 0) {
            tasks.push({id, tituloTarea, prioridad, subtasks, terminada})
            pintarTarea();
        }
        else {
            console.log("Tarea repetida")
            id--
        }
        id++
    }
    else {console.log("Falta añadir una prioridad en la tarea")}
    
    document.querySelector('#tasca').value = '';
    console.log(tasks);
}

function existeTarea(params) {
    tasks.forEach(tareas => {
        console.log(tareas);
        if (tareas.indexOf(params) != 0) {} 
        else {return true}});
    return false;
    
}

function pintarTarea() {
    let tareaHtml = `
            <div class="w3-container w3-quarter">
            <div class="${tasks[id].prioridad} tasca" id="${tasks[id].id}">
                <h2 class="w3-center">#${tasks[id].id} - ${tasks[id].tituloTarea}</h2>
                <h4></h4>
                <ul></ul>
                <h4>Total: <span}">0</span> h.</h4>
                </div>
            </div>
            <div>`

    document.querySelector('#tasques').insertAdjacentHTML('beforeend', tareaHtml);
}

function addResponsable() {
    const responsable = document.querySelector('#responsableTasca').value
    const buscaResponsable = document.querySelector(`[id="${tareaSeleccionada}"] h4`);
    buscaResponsable.classList.add("w3-center");
    buscaResponsable.innerText = responsable;
}

function addSubTasks() {
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