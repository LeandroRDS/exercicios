let num = [1,4,3,2,5]
console.log(`num ${num} `)
num[5] = 6
console.log(`num ${num} `)
num.push(7)
console.log(`num ${num} `)
console.log(`num ${num.length} `)
num.sort()
console.log(`num ${num} `)
console.log(`a primeira posição do vetor é: ${num[0]} `)

for(let c = 0; c < num.length; c++){
    console.log(`pisição: ${c}, valor: ${num[c]}`)
}
console.log('------------------------------------')
for( let c  in num  ){
    console.log(`pisição: ${c}, valor: ${num[c]}`)
}

console.log(num.indexOf(8))

let pos = num.indexOf(7)
console.log(pos)

if(pos == -1){
    console.log('o valor nao foi encontrado')
}else{
    console.log('O valoer é: '+ pos)
}