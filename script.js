const constantes = {
    projetos : ["./lifeup/index.html", "./NewsWebsiteMockupWithCrud-master/index.html", "./lifeup/jogos/jogo1/index1.html", "./lifeup/jogos/jogo2/index2.html", "./lifeup/jogos/jogo3/index3.html"],
    indice : 1,
}

function funcaoAnimacao(){
    let imagem = document.querySelector(".div-principal > img");
    let projeto = document.querySelector(".div-principal > div > iframe");
    imagem.src = "./animacaonote.gif";
    imagem.removeEventListener('click', funcaoAnimacao, false);
    imagem.addEventListener('click', funcaoMostrarPortifolio, false);
    setTimeout( () => {
        imagem.src = "./telaestatica.png";
    }, 1500);
    setTimeout(() => {
        projeto.classList.remove('invisivel');
    }, 1800);
}

function funcaoMostrarPortifolio(){
    let projeto = document.querySelector(".div-principal > div > iframe");
    if(constantes.indice == constantes.projetos.length)
        constantes.indice = 0;
    projeto.src = constantes.projetos[constantes.indice++];
}