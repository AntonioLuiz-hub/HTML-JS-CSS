function carregar(){ 
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 12
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 5 && hora < 12) {
    // Bom dia!
    img.src='fotodia.png'
    document.body.style.background = '#c8b686'
} else if (hora >= 12 && hora <= 18) {
    // Boa tarde!
    img.src='fototarde.png'
    document.body.style.background = '#ec7511'
} else {
    //Boa noite!
    img.src='fotonoite.png'
    document.body.style.background = '#9473a8'
} 
}