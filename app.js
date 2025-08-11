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
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML='';
    for (let nombre of amigos) {
        let li = document.createElement("li");
        li.innerHTML = nombre;

        lista.appendChild(li);
    }
}

