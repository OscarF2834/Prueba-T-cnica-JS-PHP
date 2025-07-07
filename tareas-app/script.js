document.addEventListener('DOMContentLoaded', cargarTareas);

function cargarTareas() {
  fetch('api/leer.php')
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById('listaTareas');
      lista.innerHTML = '';
      data.forEach(tarea => {
        const li = document.createElement('li');
        li.className = 'list-group-item tarea' + (tarea.completado == 1 ? ' completada' : '');
        li.innerHTML = `
          <span>➕</span>
          <span class="texto">${tarea.titulo}</span>
          <div>
            <button class="btn btn-sm btn-outline-danger" onclick="eliminarTarea(${tarea.id})">✖</button>
            <button class="btn btn-sm btn-outline-secondary" onclick="editarTarea(${tarea.id}, '${tarea.titulo}')">✎</button>
            <button class="btn btn-sm btn-outline-success" onclick="completarTarea(${tarea.id})">✔</button>
          </div>`;
        lista.appendChild(li);
      });
    });
}

function agregarTarea() {
  const titulo = document.getElementById('nuevaTarea').value;
  fetch('api/crear.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({titulo})
  }).then(cargarTareas);
}

function eliminarTarea(id) {
  fetch('api/eliminar.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id})
  }).then(cargarTareas);
}

function editarTarea(id, actual) {
  const nuevo = prompt('Editar tarea:', actual);
  if (nuevo) {
    fetch('api/editar.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id, titulo: nuevo})
    }).then(cargarTareas);
  }
}

function completarTarea(id) {
  fetch('api/completar.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id})
  }).then(cargarTareas);
}
