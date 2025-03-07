function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if ( idade >= 0 && idade < 13 ){
                //criança
                img.setAttribute('src','fotobebe.png')
            } else if (idade < 23){
                //Jovem
                img.setAttribute('src','fotojovem.png')
            } else if ( idade <50 ){
                //adulto
                img.setAttribute('src','fotoadulto.png')
            } else {
                //idoso
                img.setAttribute('src','fotoidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 13 ){
                //criança
                img.setAttribute('src','fotobebe2.png')
            } else if (idade < 23){
                //Jovem
                img.setAttribute('src','fotojovem2.png')
            } else if ( idade <50 ){
                //adulta
                img.setAttribute('src','fotoadulta.png')
            } else{
                //idosa
                img.setAttribute('src','fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 