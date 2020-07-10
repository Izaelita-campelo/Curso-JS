let num =[2, 3, 4, 5]
/*for(let pos =0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

//versao mais simplificada
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
