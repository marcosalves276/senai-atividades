var eventos = "tecnologia";
var data_atual = "08/09/2021";
var data_evento = "18/09/2021";
var idade = 12;
var palestrante = 2;
var publico = 50;
var total = palestrante + publico;

console.log(`
descrição do evento: ${eventos }
data atual : ${data_atual}
data do evento: ${data_evento}
idade do participante : ${idade +  " anos"}
quantidade de palestrante : ${palestrante + " pessoas"}
quantidade de convidados : ${publico + " pessoas "}
publico total : ${total +  " pessoas"}
`)

if(data_evento < data_atual){
    console.log("data nao confere")
    console.log("motivo : data do evento devera ser maior que a data atual")
}
else if(idade< 18){
    console.log("idade nao confere")
    console.log("motivo : cadastro nao permite menor de 18 anos")
    
}else if(total>100 ){
    console.log("limite excedido")
    console.log("motivo: lotaçao maxima 100 pessoas")
}else{
    console.log("cadastro concluido !")
}