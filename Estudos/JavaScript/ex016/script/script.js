function contar(){
    let inicio = document.getElementById('id-txt-inicio')
    let fim = document.getElementById('id-txt-fim')
    let passo = document.getElementById('id-txt-passo')
    let res = document.getElementById('id-res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('faltam dados')
    }else{
        res.innerHTML = 'contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido, considerndo PASSO 1')
            p = 1
        }
        if(i < f){
            res.innerHTML = 'deu'
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c}, \u{1F449}` 
            }
            
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c}, \u{1F449}`
            }
        }
        res. innerHTML += ` \u{1F3C1}`
    }
}