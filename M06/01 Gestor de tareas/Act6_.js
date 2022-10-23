const botonAñadirTarea = document.querySelector("#formTasca")
botonAñadirTarea.addEventListener("submit", function (e) {e.preventDefault();
    if (tareaSeleccionada === null) {
        addTasks();
    } else {
        modificarTasca();
    }

});
document.querySelector("#formSubtasca button").addEventListener("click", function (e) {e.preventDefault();addSubTasks();countTime();});
document.querySelector("#formResponsable button").addEventListener("click", function (e) {e.preventDefault();addResponsable();});
document.querySelector("#tasques").addEventListener("click", function (e) {
  if (e.target.nodeName === "DIV") {
    tareaSeleccionada = e.target.id;
  }
  if (
    e.target.nodeName === "H2" ||
    e.target.nodeName === "H4" ||
    e.target.nodeName === "UL"
  ) {
    tareaSeleccionada = e.target.parentNode.id;
  }
  if (e.target.nodeName === "LI") {
    //console.log(e.target.parentNode.id)
  }
  if (e.target.nodeName === "H2") {
    cargarTituloYPrioridad();
  }
});

const tasks = [];
const subtasks = [];

let id = 0;
let tareaSeleccionada = null;

function addTasks() {
  let tituloTarea = document.querySelector("#tasca").value;
  const prioridadseleccionada = document.querySelector("#prioritats").value;
  let prioridad;
  let terminada = false;
  switch (prioridadseleccionada) {
    case "1":prioridad = "w3-pale-blue";break;
    case "2":prioridad = "w3-pale-yellow";break;
    case "3":prioridad = "w3-pale-red";break;
    default: prioridad = null;
  }
  if (prioridad !== null) {
      tasks.push({ id, tituloTarea, prioridad, subtasks, terminada });
      pintarTarea();
    }
    id++;
  document.querySelector("#tasca").value = "";
  tareaSeleccionada = null;
  //console.log(tasks);
}

function cargarTituloYPrioridad() {
  document.querySelector("#tasca").value = tasks[tareaSeleccionada].tituloTarea;
  let prioridad;
  switch (tasks[tareaSeleccionada].prioridad) {
    case "w3-pale-blue": prioridad = "1"; break;
    case "w3-pale-yellow": prioridad = "2"; break;
    case "w3-pale-red": prioridad = "3"; break;
    default: prioridad = null;
  }
  document.querySelector("#prioritats").value = prioridad;
}

function modificarTasca() {
    let tituloTareaMod = document.querySelector("#tasca").value;
    let prioridad = document.querySelector("#prioritats").value;

    tasks[tareaSeleccionada].tituloTarea = tituloTareaMod;
    document.querySelector(`[id="${tareaSeleccionada}"] h2`).innerText = `#${tasks[tareaSeleccionada].id} - ${tasks[tareaSeleccionada].tituloTarea}`;
    switch (prioridad) {
        case "1":prioridad = "w3-pale-blue";break;
        case "2":prioridad = "w3-pale-yellow";break;
        case "3":prioridad = "w3-pale-red";break;
        default: prioridad = null;
    }
    document.querySelector(`[id="${tareaSeleccionada}"]`).className = prioridad + " tasca";
    tasks[tareaSeleccionada].prioridad = prioridad;
    console.log(prioridad);

    console.log(tasks);
    document.querySelector("#tasca").value = "";
    tareaSeleccionada = null;
}

function pintarTarea() {
  let tareaHtml = `
            <div class="w3-container w3-quarter">
            <div class="${tasks[id].prioridad} tasca" id="${tasks[id].id}">
                <h2 class="w3-center">#${tasks[id].id} - ${tasks[id].tituloTarea}</h2>
                <h4></h4>
                <ul></ul>
                <h4>Total: <span id="total${id}">0</span> h.</h4>
                </div>
            </div>
            <div>`;

  document.querySelector("#tasques").insertAdjacentHTML("beforeend", tareaHtml);
}

function addResponsable() {
  const responsable = document.querySelector("#responsableTasca").value;
  const buscaResponsable = document.querySelector(
    `[id="${tareaSeleccionada}"] h4`
  );
  buscaResponsable.classList.add("w3-center");
  buscaResponsable.innerText = responsable;
}

function addSubTasks() {
  const subTarea = document.querySelector("#subTasca").value;
  const subTareaHoras = document.querySelector("#horesPrevistes").value;
  const subTareaLi = document.querySelector(`[id="${tareaSeleccionada}"] ul`);
  subTareaLi.insertAdjacentHTML("beforeend",`<li>${subTarea} <span class=sub${tareaSeleccionada}>${subTareaHoras}</span> hores</li>`);
  subTareaLi.lastElementChild.addEventListener("click", function (e) {e.currentTarget.classList.toggle("tascaFeta");
    countTime();
    tareaTermianda();
  });
  subTareaLi.lastElementChild.addEventListener("dblclick", (e) => {e.currentTarget.remove();
    countTime();
    tareaTermianda();
  });
}

function countTime() {
  let subTareaLia;
  let sumadorHoras = 0;
  let restadorHoras = 0;
  const subTareaLi = document.querySelectorAll(`.sub${tareaSeleccionada}`);
  const subTareaLifeta = document.querySelectorAll(`.tascaFeta  .sub${tareaSeleccionada}`);
  subTareaLi.forEach(element => sumadorHoras = sumadorHoras + parseInt(element.textContent));
  subTareaLifeta.forEach(element => restadorHoras = restadorHoras + parseInt(element.textContent));
  let totalHoras = sumadorHoras - restadorHoras;
  document.querySelector(`#total${tareaSeleccionada}`).innerText = totalHoras;
}

function tareaTermianda() {
  const contadorLi = document.querySelectorAll(`[id="${tareaSeleccionada}"] li`).length;
  const contadorLiHechos = document.querySelectorAll(`[id="${tareaSeleccionada}"] .tascaFeta`).length;
  const div = document.querySelector(`[id="${tareaSeleccionada}"]`);

  if (contadorLi == contadorLiHechos) {
    div.className = "w3-pale-green tasca ";
  } else {
    div.classList = tasks[tareaSeleccionada].prioridad + ' tasca';
  }
}
