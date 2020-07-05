 function carregar(){
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#imagem")
    var date = new Date()
    //var horas = date.getHours()
    var minut = date.getMinutes() 
    var horas = 20
        msg.innerHTML = `Agora são exatamente ${horas}:${minut} min `
    if (horas >= 0 && horas <12){
            img.src = 'modelo/manha.png'
            document.body.style.background ='rgba(172, 219, 231, 0.966)'

    }else if(horas >=12 && horas < 18){
            img.src = 'modelo/tarde.png'
            document.body.style.background ='rgba(223, 109, 16, 0.849)'

    }else{
            img.src = 'modelo/noite.png'
            document.body.style.background='rgba(3, 10, 80, 0.849)'
    }
 }
 
 