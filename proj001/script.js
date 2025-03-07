function verificar(){ 

        var fmod = document.getElementsByName('radmod')
        var modalidade = ''
        var img = document.getElementById('imagem')   

        if (fmod[0].checked) {

            modalidade = 'Futebol'
            img.src='fotofutebol.png'
            
                     
        } else if (fmod[1].checked) {

            modalidade = 'Volêi'
            img.src='fotovolei.png'

        } else if (fmod[2].checked) {

            modalidade = 'Basquete'
            img.src='fotobasquete.png'
            
            
        } else if (fmod[3].checked) {

            modalidade = 'Judô'
            img.src='fotojudo.png'

        } else if (fmod[4].checked){

            modalidade = 'Natação'
            img.src='fotonatacao.png'
 
        } else if (fmod[5].checked){

            modalidade = 'Atletismo'
            img.src='fotoatletismo.png'

        } else if (fmod[6].checked){

            modalidade = 'Tênis'
            img.src='fototenis.png'

        } else if (fmod[7].checked){

            modalidade = 'Surfe'
            img.src='fotosurfe.png'

        } else if (fmod[8].checked){

            modalidade = 'Handebol'
            img.src='fotohand.png'

        } else if (fmod[9].checked){

            modalidade = 'Boxe'
            img.src='fotoboxe.png'

        }

        

        

}

