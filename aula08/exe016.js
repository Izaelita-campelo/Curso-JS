let num = [5, 8, 4, 6, 8]
num.push(7)
num.sort()//colca os elementos em ordem crescente
console.log(num)
console.log(`nosso vetor é ${num} e esta na posição ${num.length}`)
console.log(`a posicao do vetor ${num[1]}`)
let pos = num.indexOf(9)
if(pos = -1){
    console.log('Não encontrei valor nenhum')
}else{
    console.log(`o valor esta na posicão ${pos}`)
}

// obs: o valor 4 esta na posição 0, por conta do num.sort() que esta colcando em ordem crescente 