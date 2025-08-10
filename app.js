// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigo ='';

function agregarAmigo(){
    amigo = document.getElementById("amigo").value;
    if (amigo == ''){
        alert ('Por favor ingresar un noombre valido.');
    }else {
        amigos.push(amigo);
        document.getElementById("amigo").value = '';
    }
    document.getElementById('amigo').focus();
}