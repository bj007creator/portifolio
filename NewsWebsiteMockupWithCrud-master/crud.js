
let arranjoDeCategoriasSelecionadas = ["bitcoin", "politics", "cars", "economic", "sport", "headlines"];

let bancoDados = JSON.parse(localStorage.getItem('results'));

const objetoOrganizarCategorias = {
    "funcaoCategorizar": function(indice){
            let arrays = bancoDados.userPreferences[indice];
            arrays.clicks += 1;
            if(arrays.clicks == 1){
                bancoDados.preferencias.push(arranjoDeCategoriasSelecionadas[indice]);
            }
            let funcaoMostrar = objetoOrganizarCategorias["mostrarArray"];
            funcaoMostrar();

            localStorage.setItem('results', JSON.stringify(bancoDados));
    },
    "mostrarArray": function(){
        let content = "";
        let caixaPreselecionados = document.getElementById('selecionados-ate-o-momento');
        for (let i in bancoDados.preferencias){
            content += `<div onclick="preSelecionado('${i}');" class="opcoes-selecionadas">
                    <button type="button" class="botao laranja">${bancoDados.preferencias[i]}</button>
                </div>`;
        }
        caixaPreselecionados.innerHTML = content;
    }
};
function criarMenu(){
    if(!bancoDados){
      funcaoDb();
      window.location.href = "./index.html";
    }
    else{
      let content = "";
      //setando tudo vázio
      bancoDados.preferencias.length = 0;
      for(let indice in bancoDados.userPreferences){
          let arrays = bancoDados.userPreferences[indice];
          arrays.clicks = 0;
      }
      localStorage.setItem('results', JSON.stringify(bancoDados));
      //-----
      let menuCrud = document.getElementById('menu-crud');
      for(let i = 0; i < 6; i++){
          content += `<div onclick="funcaoIncluirOpcao('${i}');" class="opcoes-escolha-box">
                          <button type="button" class="botao laranja">${arranjoDeCategoriasSelecionadas[i]}</button>
                      </div>`;
      }
      menuCrud.innerHTML = content;
    }
    
}

function funcaoInserir(){
    
    if(bancoDados.preferencias.length != 0){
      let botao = document.getElementsByClassName('ferramenta-box')[0];
      let resposta = document.getElementById('resposta');
      let conteudo = "";
      botao.classList.add('verdeEfeito');

      let perfil = bancoDados.preferencias.join('-');
      console.log(perfil);
      for(let indice in bancoDados.userPreferences){
          let arrays = bancoDados.userPreferences[indice];
          arrays.clicks = 0;
      }
      bancoDados.preferencias = [];
      let mostrar = objetoOrganizarCategorias["mostrarArray"];
      mostrar();
      bancoDados.perfis.push(perfil);
      localStorage.setItem('results', JSON.stringify(bancoDados));
      conteudo = `<h2>PERFIL SALVO COM SUCESSO</h2>`;
      resposta.innerHTML = conteudo;
      resposta.style.display = 'block';
      setTimeout(function(){
          botao.classList.remove('verdeEfeito');
          resposta.style.display = 'none';
      }, 2000);
    }
}
function funcaoExcluirPerfil(indice){
    bancoDados.perfis.splice(indice, 1);
    localStorage.setItem("results", JSON.stringify(bancoDados));
    funcaoMostrarPerfis();
}
var perfilSelecionado;
function funcaoMostrarFeed(perfil){
    perfilSelecionado = perfil;
    console.log(perfil);
    bancoDados.perfilSelecionado = perfil;
    localStorage.setItem('results',JSON.stringify(bancoDados));
    setTimeout(function(){
        window.location.href = "exibicao.html";
    }, 1000);
    
}
function funcaoReturn(){
  window.location.href = "./index.html";
}
function funcaoMostrarPerfis(){
    let resposta = document.getElementById('resposta');
    let botao = document.getElementsByClassName('ferramenta-box')[1];
    let menu = document.getElementById('menu-de-perfis');
    let volta = document.getElementsByClassName('voltar-crud')[0];
    let conteudo = "";
    let contador = 0;
    botao.classList.add('azulEfeito');
    if(bancoDados.perfis.length == 0){
        conteudo = `<h2>NENHUM PERFIL SALVO</h2>`;
        resposta.innerHTML = conteudo;
        resposta.style.display = 'block';
        setTimeout(function(){
            botao.classList.remove('azulEfeito');
            resposta.style.display = 'none';
        }, 1000);
        menu.innerHTML = "";
        setTimeout( () => {
          window.location.href = "./index.html";
        }, 2000);
    }
    else{
        //display none ----------
        document.getElementById('selecionados-ate-o-momento').style.display = "none";
        document.getElementById('menu-crud').style.display = "none";
        document.getElementById('ferramentas-crud').style.display = "none";
        document.getElementById('texto1').style.display = "none";
        document.getElementById('texto2').style.display = "none";
        //-------------
        document.getElementById('menu-de-perfis-texto').style.display = "block";
        for(let i in bancoDados.perfis){
            let perfil = bancoDados.perfis[i];
            let arrayDeCategorias = perfil.split('-');
            contador++;
            conteudo += `<div>
                            <h3>Perfil ${contador}</h3>`;
            for(let j in arrayDeCategorias){
                conteudo += `<p>${arrayDeCategorias[j]}</p>
                                `;
            }

            conteudo += `   <button onclick="funcaoMostrarFeed('${perfil}')"; type="button" class="verde ">Selecionar</button>
                            <button onclick="funcaoExcluirPerfil('${i}')"; type="button" class="vermelho">Excluir</button>
                        </div>`;
            
        }
        volta.innerHTML =`
                            <button style="width: 100%;" onclick="funcaoReturn()"; type="button">Voltar</button>
                          `;
        menu.innerHTML = conteudo;
    }
}

function funcaoExcluir(){
    let botao = document.getElementsByClassName('ferramenta-box')[2];
    botao.classList.add('vermelhoEfeito');
    
    if(posicaoParaExcluir == -1){
        window.alert('Nenhuma opção selecionada para ser excluída');
    }
    else{
        bancoDados.preferencias.splice(posicaoParaExcluir, 1);
        let funcaoMostrar = objetoOrganizarCategorias["mostrarArray"];
        funcaoMostrar();
        localStorage.setItem('results', JSON.stringify(bancoDados));
        posicaoParaExcluir = -1;
    }
    setTimeout(function(){
        botao.classList.remove('vermelhoEfeito');
    }, 2000);
}
function funcaoIncluirOpcao(indice){
    let opcao = document.getElementsByClassName('opcoes-escolha-box')[Number(indice)];
    opcao.classList.add('laranjaEfeito');
    let selecionado = arranjoDeCategoriasSelecionadas[indice];
    setTimeout(function(){
        opcao.classList.remove('laranjaEfeito');
    }, 2000);
    let funcao = objetoOrganizarCategorias["funcaoCategorizar"];
    funcao(indice);
}
let posicaoParaExcluir = -1;
let cont = 0;
function preSelecionado(indice){
    let opcao = document.getElementsByClassName('opcoes-selecionadas');
    if(indice != posicaoParaExcluir){
      cont = 0;
      if(posicaoParaExcluir != -1)
        opcao[posicaoParaExcluir].classList.remove('laranjaEfeito');
    }
    cont++;
    if(cont == 1){
        posicaoParaExcluir = indice;
        opcao[posicaoParaExcluir].classList.add('laranjaEfeito');
    }
    else{
        if(bancoDados.preferencias.length != 1){
          opcao[posicaoParaExcluir].classList.remove('laranjaEfeito');
          cont = 0;
        }

    }
    
}