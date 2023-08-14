function tabuada(){
    let numero = document.getElementById('id-numeros')
    let seletor_tabuada = document.getElementById('id-seletor-tabuada')
    if(numero.value.length == 0){
       window.alert('Por favor digite um número')
    }else{
        let n = Number(numero.value) 
        let c = 1
        seletor_tabuada.innerHTML = ''
        while(c <= 10){
            let intem = document.createElement('option')
            intem.text = `${n} X ${c} = ${n*c}`
            intem.value = `seletor_tabuada ${c}`
            seletor_tabuada.appendChild(intem)
            c++
        }
    }
    
   
}