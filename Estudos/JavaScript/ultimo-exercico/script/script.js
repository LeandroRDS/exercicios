let numero = document.querySelector('input#id-numero')
let fLista = document.querySelector('select#id-flista')
let res = document.querySelector('div#id-res')
let valores =  []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    res.innerHTML = ''
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado`
        fLista.appendChild(item)
    }else{
        res.innerHTML = 'Número Invalido'
    }

    numero.value = ''
    
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadatrados</p>`
        res.innerHTML += `<p>O maior valor emcontado foi ${maior}. </
        p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
        res.innerHTML += `<p>a media dos valores digitado são ${media} </p>`
    }
}