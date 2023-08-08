var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('D')
        break
    case 1:
        console.log('S')
        break
    case 2:
        console.log('T')
        break
    case 3:
        console.log('Q')
        break
    case 4:
        console.log('Q')
        break
    case 5: 
        console.log('S')
        break
    case 6:
        console.log('S')

    default:
        console.log('Dia invalido')
        break
}