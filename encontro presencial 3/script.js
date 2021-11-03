function login (){
var nome = window.prompt("Qual seu nome?")
var div = document.getElementById("usuario")

    if (typeof nome == 'undefined' || nome == "" ){ 
    alert('Preencha o campo...')
    }
    else{
        div.innerHTML = `Olá ${nome}, seja bem vindo.`
    }
}
