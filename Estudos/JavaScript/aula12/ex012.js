var obj_Date = new Date()
var h = obj_Date.getHours()

console.log('Agora são exatamente ' + h)
if(h >= 1 && h < 6){
    console.log('Boa madrugada')
}else if(h >= 6 && h <= 12){
    console.log('Bom dia')
}else if(h > 12 && h <= 18){
    console.log('Boa tarde')
}else if(h > 18 && h < 24){
    console.log('Boa noite')
}