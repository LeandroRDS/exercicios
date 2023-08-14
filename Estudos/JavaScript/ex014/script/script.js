
function carregar(){
var id_msg = window.document.querySelector('div#id-msg')
var id_imagem = window.document.querySelector('img#id-imagem')
var data = new Date()
var hora = data.getHours()
hora = 19
id_msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    id_imagem.src = 'img/img-curso-js-manha.png'
    window.document.body.style.background = '#ffe46b'
}else if(hora >= 12 && hora < 18){
    id_imagem.src = 'img/img-curso-js-tarde.png'
    window.document.body.style.background = '#ff5100'
}else{
    id_imagem.src = 'img/img-curso-js-noite.png'
    document.body.style.background = '#04254b'
}
}