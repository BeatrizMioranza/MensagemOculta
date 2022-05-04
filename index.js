var desloca = document.querySelector("#desloca")
var selecionar = document.querySelector("#seletor")
selecionar.addEventListener("change", function(){
    if(selecionar.value == "cesar"){
        desloca.style.display = "flex"
    } else{ 
        desloca.style.display = "none"
    }

})
// Botão decodificar e verificador de Base || César
var decodificar = document.querySelector("#decodificar")
decodificar.addEventListener("click", function () {
    var input = document.querySelector("#decodificar").value;
    var btn = document.querySelector("#btn")
    var remocao = document.querySelector('button')
    if (remocao) {
        remocao.remove()
    }
    var botao = document.createElement('button')
    botao.setAttribute("id", "idbotao")
    btn.append(botao)
    botao.innerText = `Decodificar Mensagem!`
    var prevent = document.querySelector('#idbotao')
    prevent.addEventListener("click", (e) => {
        e.preventDefault();
        var seletor = document.querySelector('#seletor').value
        var mensagem = document.querySelector("#msg").value
        if (seletor == "base" && mensagem != "") {
            return decodificadorBase64()
        } else if (seletor == "cesar") {
            return descodificarCesar()
        } else {
            alert("Selecione uma opção")
        }
    })
});

// Botão codificar e verificador de Base || César
var codificar = document.querySelector("#codificar")
codificar.addEventListener("click", function () {
    var input = document.querySelector("#codificar").value;
    var btn = document.querySelector("#btn")
    var remocao = document.querySelector('button')
    if (remocao) {
        remocao.remove()
    }
    var botao = document.createElement('button')
    botao.setAttribute("id", "idbotao")
    btn.append(botao)
    botao.innerText = `Codificar Mensagem!`
    var prevent = document.querySelector('#idbotao')
    prevent.addEventListener("click", (e) => {
        e.preventDefault();
        var seletor = document.querySelector('#seletor').value
        var mensagem = document.querySelector("#msg").value
        if (seletor == "base" && mensagem != "") {
            return codificadorBase64()
        } else if (seletor == "cesar") {
            return codificarCesar()
                  
        } else {
            alert("Selecione uma opção")
        }
    })
});
// Base 64 
function codificadorBase64() {
    var mensagem = document.querySelector("#msg").value
    var resultado = document.querySelector("#resultado")
    resultado.innerText = btoa(mensagem);
};

function decodificadorBase64() {
    var mensagem = document.querySelector("#msg").value
    var resultado = document.querySelector("#resultado")
    resultado.innerText = atob(mensagem);
};

// Cifra de César
function codificarCesar(){ 
    var deslocamento = document.querySelector("#deslocamento").value
    var resultado = document.querySelector("#resultado")
    var mensagem = document.querySelector("#msg").value
    var msgCodigo= ""
    var teste = parseInt(deslocamento)
    for (var i = 0; i < mensagem.length; i++) {
    var codAscii = mensagem[i].charCodeAt();
    if(codAscii >= 65 && codAscii <= 90){
       var operacao = (codAscii - 65 + teste) % 26
     msgCodigo += String.fromCharCode(operacao + 65);
    }
}
    resultado.innerText = msgCodigo

}
function descodificarCesar(){
    var deslocamento = document.querySelector("#deslocamento").value
    var resultado = document.querySelector("#resultado")
    var mensagem = document.querySelector("#msg").value
    var msgCodigo= ""
    var teste = parseInt(deslocamento)
    for (var i = 0; i < mensagem.length; i++) {
    var codAscii = mensagem[i].charCodeAt();
    if(codAscii >= 65 && codAscii <= 90){
       var operacao = (codAscii - 65 - teste + 26) % 26
     msgCodigo += String.fromCharCode(operacao + 65);
    }
    resultado.innerText= msgCodigo
}
}