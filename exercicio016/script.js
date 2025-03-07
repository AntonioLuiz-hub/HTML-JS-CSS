function contar(){
let ini = document.getElementById("inic")
let fim = document.getElementById("fim")
let passo = document.getElementById("pas")
let res = document.getElementById("res")
if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {

    window.alert("Verifique as informações e tente novamente !") 
    
} else {
    res.innerHTML = 'Contando:'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if( i < f ){

        //contagem crescente
        
    for(let c = i; c <= f; c+= p ){
        res.innerHTML += ` ${c} \u{1F449}	  `
        }
    } else{
        //contagem regressiva 
        for( let c = 1; c >= f; c -= p ) {
            res.innerHTML += ` ${c} \u{f449}`
        }
    }
    res.innerHTML += ` \u{1F3A2} `
  }
}

