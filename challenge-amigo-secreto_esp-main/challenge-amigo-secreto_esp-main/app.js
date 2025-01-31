// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${listaAmigos[indiceAleatorio]}</strong></li>`;
}
