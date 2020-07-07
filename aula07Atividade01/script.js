function contar() {
        let ini = document.getElementById("txti")
        let fim = document.getElementById("txtf")
        let passo = document.getElementById("txtp")
        let res = document.getElementById("res")

        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
                res.innerHTML="Impossivel contar"
                alert("[ERR] falta dados!")
        } else {
                res.innerHTML = " Contando..."
                var i = Number(ini.value)
                var f = Number(fim.value)
                var p = Number(passo.value)
                if(p<= 0){
                        alert('Passo invalido, considerando PASSO!')
                        p =1
                }
                if (i < f) {
                        //contagem crescente
                        for (let c = i; c <= f; c += p) {
                                res.innerHTML += `${c} \u{1F44D}`
                        }
                } else {
                        //contagem regressiva
                        for (let c = i; c >= f; c -= p) {
                                res.innerHTML += `${c} \u{1F44D}`
                        }
                }
         

        }
}