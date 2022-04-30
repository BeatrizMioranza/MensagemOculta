var decodificar = document.querySelector("#decodificar")
decodificar.addEventListener("click", function(){
    var input= document.querySelector("#decodificar").value;
    var bnt = document.querySelector(".bnt")
    var remocao = document.querySelector('button')
    if(remocao){
        remocao.remove()
    }
    var botao= document.createElement('button')
    botao.setAttribute("id", "idbotao")
    bnt.append(botao)
    botao.innerText = `Decodificar Mensagem!`
    var prevent = document.querySelector('#idbotao')
    prevent.addEventListener("click", (e) => {
    e.preventDefault();
 })
});

var decodificar = document.querySelector("#codificar")
decodificar.addEventListener("click", function(){
    var input= document.querySelector("#codificar").value;
    var bnt = document.querySelector(".bnt")
    var remocao = document.querySelector('button')
    if(remocao){
        remocao.remove()
    }
    var botao = document.createElement('button')
    botao.setAttribute("id", "idbotao")
    bnt.append(botao)
    botao.innerText = `Codificar Mensagem!`
    var prevent = document.querySelector('#idbotao')
    prevent.addEventListener("click", (e) => {
    e.preventDefault();
 })
});
