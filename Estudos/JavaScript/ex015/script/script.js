function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#id_txt_ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRo] Verifique os dados')
    }else{
        var sexo = document.getElementsByName('name_radio_sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '250px'
        img.style.borderRadius = '50%'
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebe-homem.jpg')
            }else if (idade < 21 ){
                img.setAttribute('src', 'img/homem-jovem.jpg')
            }else if( idade < 50 ){
                img.setAttribute('src', 'img/homem.jpg')
            }else{
                img.setAttribute('src', 'img/homem-idoso.jpg')
            }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebe-mulher.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'img/mulher-jovem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'img/mulher.jpg')
            }else{
                img.setAttribute('src', 'img/mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}