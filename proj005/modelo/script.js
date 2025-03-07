function clicou(){
        let resposta1 = document.getElementsByName('resp1')
        let resposta2 = document.getElementsByName('resp2')
        let resposta3 = document.getElementsByName('resp3')
        let resposta4 = document.getElementsByName('resp4')
        let resposta5 = document.getElementsByName('resp5')
        let resposta6 = document.getElementsByName('resp6')
        let resposta7 = document.getElementsByName('resp7')
        let resposta8 = document.getElementsByName('resp8')
        let resposta9 = document.getElementsByName('resp9')
        let resposta10 = document.getElementsByName('resp10')

        let c = document.getElementById('camp1')
        let c2 = document.getElementById('camp2')
        let c3 = document.getElementById('camp3')
        let c4 = document.getElementById('camp4')
        let c5 = document.getElementById('camp5')
        let c6 = document.getElementById('camp6')
        let c7 = document.getElementById('camp7')
        let c8 = document.getElementById('camp8')
        let c9 = document.getElementById('camp9')
        let c10 = document.getElementById('camp10')

        if (resposta1[1].checked){
            c.style.background='green'    
        }
        else {
            c.style.background='red'
        }
        if (resposta2[2].checked){
            c2.style.background='green'
        }
        else{
            c2.style.background='red'
        }
        if(resposta3[1].checked){
            c3.style.background='green'
        }
        else {
            c3.style.background='red'
        }
        if (resposta4[2].checked) {
            c4.style.background='green'
        }
        else{
            c4.style.background='red'
        }
        if (resposta5[0].checked){
            c5.style.background='green'
        }
        else{
            c5.style.background='red'
        }
        if (resposta6[0].checked){
            c6.style.background='green'
        }
        else{
            c6.style.background='red'
        }
        if (resposta7[2].checked){
            c7.style.background='green'
        }
        else{
            c7.style.background='red'
        }
        if (resposta8[1].checked){
            c8.style.background='green'
        }
        else{
            c8.style.background='red'
        }
        if (resposta9[2].checked){
            c9.style.background='green'
        }
        else{
            c9.style.background='red'  
        }
        if (resposta10[2].checked){
            c10.style.background='green'
        }
        else{
            c10.style.background='red'
        }

}