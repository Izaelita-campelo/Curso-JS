function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.getElementById('res')
        if (fano.value.length == 0 || Number(fano.value) > ano) {
                alert("ERR, por favor verifique se os dados estao correto!")
        } else {
                var fsex = document.getElementsByName("radsex")
                var idade = ano - Number(fano.value)
                var genero = ""
                var img = document.createElement('img')
                img.setAttribute('id', 'foto')
                if (fsex[0].checked) {
                        genero = "Homem"
                        if (idade >= 0 && idade <= 10) {
                                img.setAttribute('src', 'modelo/crianM.png')
                        } else if (idade < 21) {
                                img.setAttribute('src', 'modelo/jovenM.png')
                        } else if (idade < 50) {
                                img.setAttribute('src', 'modelo/adultM.png')
                        } else {
                                img.setAttribute('src', 'modelo/idosoM.png')
                        }
                } else if (fsex[1].checked) {
                        genero = "Mulher"
                        if (idade >= 0 && idade <= 10) {
                                img.setAttribute('src', 'modelo/crianF.png')
                        } else if (idade < 21) {
                                img.setAttribute('src', 'modelo/jovenF.png')
                        } else if (idade < 50) {
                                img.setAttribute('src', 'modelo/adultF.png')
                        } else {
                                img.setAttribute('src', 'modelo/idosoF.png')
                        }
                }
                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                res.appendChild(img)
        }
}

