document
    .querySelector('#formTasca button')
    .addEventListener("click", function (e) { e.preventDefault(); addTask(); });
document
    .querySelector('#formSubtasca button')
    .addEventListener("click", function (e) { e.preventDefault(); addSubTask(); });
document
    .querySelector('#formResponsable button')
    .addEventListener("click", function (e) { e.preventDefault(); addResponsable(); });

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
    <div class=${prioridad} id="${numerador}">
        <h2 class="w3-center">#${numerador} - ${tituloTarea}</h2>
        <h4></h4>
            <ul>
                
            </ul>
        <h4>Total: 0 h.</h4>
        </div>
    </div>
    <div>`

    document.querySelector('#tasques').insertAdjacentHTML('beforeend', tareaHtml);
    const divTarea = document.getElementById(numerador);
    divTarea.addEventListener("click", function (e) {
        e.preventDefault();
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
    subTareaLi.insertAdjacentHTML('beforeend', `<li>${subTarea} ${subTareaHoras} hores</li>`)
    subTareaLi.lastElementChild.addEventListener("click", function (e) { 
        e.preventDefault(); 
        e.currentTarget.classList.toggle("tascaFeta");
        console.log("iep"); });
    
}