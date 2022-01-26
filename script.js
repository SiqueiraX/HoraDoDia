window.onload = function carregar() {
    var titulo = window.document.querySelector("h1")
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //dia
        titulo.innerHTML = "Bom Dia!"
        img.src = "manhã.png"
        window.document.body.style.backgroundColor = "#ad6349"
    } else if (hora >= 12 && hora < 18) {
        //tarde
        titulo.innerHTML = "Boa Tarde!"
        img.src = "tarde.png"
        window.document.body.style.backgroundColor = "#018cec"
    } else {
        //noite
        titulo.innerHTML = "Boa Noite!"
        img.src = "noite.png"
        window.document.body.style.backgroundColor = "#2b0133"
    }
}
