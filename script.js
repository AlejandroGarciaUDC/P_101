// Cargar datos almacenados al inicio
document.addEventListener("DOMContentLoaded", () => {
    cargarLista("tareas", "lista-tareas");
    cargarLista("inventario", "lista-inventario");
});

// ------------------------------------------------------------

// Función para agregar una tarea
function agregarTarea() {
    agregarElemento("tarea-input", "lista-tareas", "tareas");
}

// Función para agregar un ítem al inventario
function agregarInventario() {
    agregarElemento("inventario-input", "lista-inventario", "inventario");
}

// ------------------------------------------------------------

// Función genérica para agregar elementos a la lista y al localStorage
function agregarElemento(inputId, listaId, storageKey) {
    let input = document.getElementById(inputId);
    let texto = input.value.trim();
    
    if (texto !== "") {
        let lista = document.getElementById(listaId);
        let li = document.createElement("li");
        li.innerHTML = `${texto} <button class="eliminar" onclick="eliminarElemento(this, '${storageKey}')">X</button>`;
        lista.appendChild(li);
        input.value = "";

        guardarEnLocalStorage(storageKey, texto);
    }
}

// Función para eliminar un elemento de la lista y del localStorage
function eliminarElemento(boton, storageKey) {
    let texto = boton.parentElement.textContent.replace("X", "").trim();
    boton.parentElement.remove();
    eliminarDeLocalStorage(storageKey, texto);
}

// Guardar en localStorage
function guardarEnLocalStorage(key, valor) {
    let datos = JSON.parse(localStorage.getItem(key)) || [];
    datos.push(valor);
    localStorage.setItem(key, JSON.stringify(datos));
}

// Eliminar de localStorage
function eliminarDeLocalStorage(key, valor) {
    let datos = JSON.parse(localStorage.getItem(key)) || [];
    datos = datos.filter(item => item !== valor);
    localStorage.setItem(key, JSON.stringify(datos));
}

// Cargar datos almacenados en las listas
function cargarLista(storageKey, listaId) {
    let datos = JSON.parse(localStorage.getItem(storageKey)) || [];
    let lista = document.getElementById(listaId);
    
    datos.forEach(texto => {
        let li = document.createElement("li");
        li.innerHTML = `${texto} <button class="eliminar" onclick="eliminarElemento(this, '${storageKey}')">X</button>`;
        lista.appendChild(li);
    });
}

