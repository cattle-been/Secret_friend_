// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar los nombres de lo amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación: para no permitir campos vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Limpiar el input
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de volver a pintarla

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("La lista está vacía, por favor, agrega al menos un nombre para sortear.");
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);

    // Cambiar el botón "Añadir" a "Reiniciar"
    const boton = document.querySelector(".button-add");
    boton.textContent = "Reiniciar";
    boton.onclick = reiniciarJuego;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    amigos = []; // Vaciar arreglo
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar lista
    document.getElementById("resultado").innerHTML = "";   // Limpiar resultado
    document.getElementById("amigo").value = "";           // Limpiar input

    // Volver a poner el botón como "Añadir"
    const boton = document.querySelector(".button-add");
    boton.textContent = "Añadir";
    boton.onclick = agregarAmigo;
}
