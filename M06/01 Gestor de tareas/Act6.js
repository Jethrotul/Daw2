let idGlobal = -1;
const tasques = [];
const subTasques = [];
const prioritats = {
  1: "w3-pale-blue",
  2: "w3-pale-yellow",
  3: "w3-pale-red",
};
const pintar = (tasca) => {
  let tareaHtml = `
  <div class="w3-container w3-quarter">
  <div class="${prioritats[tasca.prioritat]} tasca" id="${tasca.id}">
      <h2 class="w3-center">#${tasca.id} - ${tasca.titol}</h2>
      <h4></h4>
      <ul></ul>
      <h4>Total: <span id="total${tasca.id}">0</span> h.</h4>
      </div>
  </div>
  <div>`;
document
.querySelector("#tasques")
.insertAdjacentHTML("beforeend", tareaHtml);
}

class SubTasca {
  titol;
  hores;
  finalitzada = false;

  constructor (titol, hores) {
    this.titol = titol;
    this.hores = hores;
  }
}

class Tasca {
  id;
  titol;
  prioritat;
  responsable;
  subTasques = [];
  hores = 0;
  isFeta = false;
  
  constructor(titol, prioritat) {
    this.id = ++idGlobal;
    this.titol = titol;
    this.prioritat = prioritat;
  }
  
  addSubtask(titol, hores) {
    const subtask = new SubTasca(titol, hores);
    this.subTasques.push(subtask);
  }

  addResponsable (nom) {
    this.responsable = nom;
  }
}



const botonAñadirTarea = document.querySelector("#formTasca");
botonAñadirTarea.addEventListener("submit", function (e) {
  e.preventDefault();
  const tasca = new Tasca(
    document.querySelector("#tasca").value,       // Titulo
    document.querySelector("#prioritats").value,  // Prioridad
    0                                             // Horas
  );
  tasques.push(tasca);
  pintar(tasques[idGlobal]);
});


document
  .querySelector("#formSubtasca button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const subTarea = document.querySelector("#subTasca").value;
    const subTareaHoras = document.querySelector("#horesPrevistes").value;
    tasques[idGlobal].addSubtask(subTarea, subTareaHoras); // falta poner que la id sea de la tasca seleccionada
    

  });


  document
  .querySelector("#formResponsable button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    addResponsable();
  });
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
