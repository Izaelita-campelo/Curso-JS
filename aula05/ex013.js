// Executando condição multipla:

var agora = new Date()
var diaSem = agora.getDay()

diaSem = 0
/*
Assim sao aprensetado os dias da semna em JavaScript
0-Domingo,
1-Segunda,
2-Terça,
3-Quarta,
4-Quinta ,
5-Sexta
6-Sabado
*/
//console.log(diaSem)

switch(diaSem){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quita feira")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("Dia invalido")
}