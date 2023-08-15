let amigo = {
    nome: 'Jose'
    , sexo: 'M', 
    peso: 85.4,
    engordar(p=0){
        console.log('Esgordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`o ${amigo.nome} pesa ${amigo.peso}Kg`)