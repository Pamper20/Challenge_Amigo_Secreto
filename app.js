// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
function agregarAmigo() {
    
    let nombre = document.getElementById("amigo").value.trim();

    
    if (nombre === "") {  // Validamos que el campo no esté vacío
        alert("Por favor, inserte un nombre.");  
        return;
    }
    amigos.push(nombre); // Agregamos el nombre al arreglo con push

    mostrarAmigos();    
    document.getElementById("amigo").value = ""; // comando para limpiar el campo de entrada
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista para evitar duplicados
        
    for (let i = 0; i < amigos.length; i++) { // Recorrer el array y agregar cada amigo como <li>
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) { // Validamos que haya amigos para sortear
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Codigo del aleatorio para hallar al amigo secreto
    let amigoSorteado = amigos[indiceAleatorio]; // Mostrar el nombre del amigo secreto
   
    document.getElementById("resultado").innerHTML =
        `<li>🎉 EL AMIGO SECRETO ES: <strong>${amigoSorteado}</strong></li>`; // Mostrar el Amigo secreto
}
