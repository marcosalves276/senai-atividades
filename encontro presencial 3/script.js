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

function carrinho (idbutton){
 //debugger
 if (typeof listaitens == "undefined"){
    listaitens = []     
 }
    var idtrocado = idbutton.replace("btn","item")
    var iditem = document.getElementById(idtrocado)
    var modal = document.getElementById("lista")
    var desc = iditem.children[1].textContent
    var preco = iditem.children[2].textContent
    modal.innerHTML = ""
    listaitens.push({
        item : desc,
        preço : preco
    })

    for(var x = 0; x < listaitens.length; x++){
          
    modal.innerHTML += `<p> ${listaitens[x].item} - ${listaitens[x].preço} </p>`
    }
}
