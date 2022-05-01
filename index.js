var decodificar = document.querySelector("#decodificar")
decodificar.addEventListener("click", function(){
    var input= document.querySelector("#decodificar").value;
    var btn = document.querySelector("#btn")
    var remocao = document.querySelector('button')
    if(remocao){
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
    if(seletor == "base" && mensagem != ""){
         return decodificadorBase64()
    } else if(seletor == "cesar"){
        return 
    } else {
        alert ("Escreva sua mensagem")
    }
 })
});

var codificar = document.querySelector("#codificar")
    codificar.addEventListener("click", function(){
    var input= document.querySelector("#codificar").value;
    var btn = document.querySelector("#btn")
    var remocao = document.querySelector('button')
    if(remocao){
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
    if(seletor == "base" && mensagem != ""){
         return codificadorBase64()
    } else if(seletor == "cesar"){
        return 
    } else {
        alert ("Escreva sua mensagem")
    }
 })
});
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