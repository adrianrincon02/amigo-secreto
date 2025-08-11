// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigo ='';

function agregarAmigo(){
    amigo = document.getElementById("amigo").value;
    if (amigo == ''){
        alert ('Por favor ingresar un nombre valido.');
    }else {
        amigos.push(amigo);
        document.getElementById("amigo").value = '';
        imprimirLista();
    }
    document.getElementById('amigo').focus();
}

function imprimirLista() {
    // Obtenemos el elemento "ul" donde se mostraran los elemento "li"
    let lista = document.getElementById("listaAmigos");
    // limpiamos la lista para que no se repitan
    lista.innerHTML='';

    for (let nombre of amigos) {
        let li = document.createElement("li");
        li.innerHTML = nombre;

        lista.appendChild(li);
    }
}

function sortearAmigo(){
    let amigoSecreto = document.getElementById("resultado");
    let indice = Math.floor(Math.random() * amigos.length);
    let random = amigos[indice];

    if (amigos == ''){
        alert("!No has introducido 'Amigos' para sortear¡");
    }else if(amigos.length <= 1){
        alert ("Debes introducir al menos dos personas para jugar");
    }else {
        amigoSecreto.innerHTML = random;
    }
}

