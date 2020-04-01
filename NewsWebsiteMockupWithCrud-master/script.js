function funcaoPersonalizar(){
  window.location.href= './index.html';
}

function funcaoInicial(){
    
    let arrayDecat = bancoDados.perfilSelecionado.split('-');
    let destaques = document.getElementById('destaques');
    let esp = document.getElementById('esp');
    let cars = document.getElementById('cars');
    let eco = document.getElementById('eco');
    let bit = document.getElementById('bitcoin');
    let politics = document.getElementById('politics');
    //display none all
    destaques.style.display = "none";
    esp.style.display = "none";
    cars.style.display = "none";
    eco.style.display = "none";
    bit.style.display = "none";
    politics.style.display = "none";

    for(let i in arrayDecat){
        switch(`${arrayDecat[i]}`){
            case "bitcoin":
                bit.style.display = "block";
                loadNotBit();
                break;
            case "politics":
                politics.style.display = "block";
                loadNotPoli();
                break;
            case "cars":
                cars.style.display = "block";
                loadNotCars();
                break;
            case "economic":
                eco.style.display = "block";
                loadNotEconomic();
                break;
            case "sport":
                esp.style.display = "block";
                loadNotSport();
                break;
            case "headlines":
                destaques.style.display = "block";
                loadNotDestaques();
                break;
        }
    }
}

let dados = {
    "indice": 0,
    "categoria": 0
}
let db = JSON.parse(localStorage.getItem('db_fake'));

if(!db){
    db = dados;
}


function funcaoConteudo(indice, categoria){
    db.indice = Number(indice);
    db.categoria = categoria;
    localStorage.setItem('db_fake', JSON.stringify(db));
    setTimeout(function(){
        window.location.href = 'pg1.html';
    }, 500);
    
}

function loadNotEconomic(){
    let url = `https://newsapi.org/v2/everything?q=economic&apiKey=e9b4fc19c40040019027457ac04d9695`;
    let xmlhttp=new XMLHttpRequest();
    let esquerdadecada = document.getElementsByClassName('esquerda')[3];
    let direitadecada = document.getElementsByClassName('direitaeco')[0];
    let somentetxt = document.getElementsByClassName('somentetxt')[6];
    let somentetxt1 = document.getElementsByClassName('somentetxt')[7];
    let noteprincipal = document.getElementsByClassName('notprincipal')[3];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            let dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let categoria = "economic";
            for(let i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiseco">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="./img/logoeconomia2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
                
                
                        
        }
        for(let j = 0; j < 2; j++){
            result3 += `    <div>
                                <img src=${dado.articles[j].urlToImage} alt="not1">
                                <p>${dado.articles[j].title}</p>
                            </div>`;
        }
        for(let v = 0; v < 3; v++){
            result2 += `    <div>
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        
        esquerdadecada.innerHTML = result;
        direitadecada.innerHTML = result1;
        somentetxt.innerHTML = result2;
        noteprincipal.innerHTML = result3;
        somentetxt1.innerHTML = result2;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}


function loadNotCars(){
    let url = `https://newsapi.org/v2/everything?q=cars&apiKey=e9b4fc19c40040019027457ac04d9695`;
    let xmlhttp=new XMLHttpRequest();
    let esquerdadecada = document.getElementsByClassName('esquerda')[2];
    let direitadecada = document.getElementsByClassName('direitacarros')[0];
    let somentetxt = document.getElementsByClassName('somentetxt')[4];
    let somentetxt1 = document.getElementsByClassName('somentetxt')[5];
    let noteprincipal = document.getElementsByClassName('notprincipal')[2];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            let dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let categoria = "cars";
            for(let i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiscarros">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="./img/logocarros2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
            }
            for(let j = 0; j < 2; j++){
                result3 += `    <div>
                                    <img src=${dado.articles[j].urlToImage} alt="not1">
                                    <p>${dado.articles[j].title}</p>
                                </div>`;
            }
            for(let v = 0; v < 3; v++){
                result2 += `    <div>
                                    <h1>${dado.articles[v].title}</h1>
                                    <p>${dado.articles[v].description}</p>
                                </div>`;
            }
            
            esquerdadecada.innerHTML = result;
            direitadecada.innerHTML = result1;
            somentetxt.innerHTML = result2;
            noteprincipal.innerHTML = result3;
            somentetxt1.innerHTML = result2;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}

function loadNotSport(){
        let url = `https://newsapi.org/v2/everything?q=sport&apiKey=e9b4fc19c40040019027457ac04d9695`;
        let xmlhttp=new XMLHttpRequest();
        let esquerdadecada = document.getElementsByClassName('esquerda')[1];
        let direitadecada = document.getElementsByClassName('direitaesp')[0];
        let somentetxt = document.getElementsByClassName('somentetxt')[2];
        let somentetxt1 = document.getElementsByClassName('somentetxt')[3];
        let noteprincipal = document.getElementsByClassName('notprincipal')[1];
        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4&&xmlhttp.status==200){
                let dado = JSON.parse(xmlhttp.responseText);
                let result = " ";
                let result1 = " ";
                let result2 = " ";
                let result3 = " ";
                let categoria = "sport";
                for(let i = 0; i < dado.articles.length; i++){
                    result += ` <div class="leiamais leiamaisesp">
                                    <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                    <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                    <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                                </div>`;

                        result1 += `<article class="blocos">
                                        <div>
                                            <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                        </div>
                                        <section>
                                            <img src="./img/logoesporte2.png" alt="img">
                                            <p>Gostou, leia mais clicando abaixo.</p>
                                            <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                                <h1>Leia mais...</h1>
                                            </div>
                                        </section>
                                    </article>`;
                    }
                    for(let j = 0; j < 2; j++){
                        result3 += `    <div>
                                            <img src=${dado.articles[j].urlToImage} alt="not1">
                                            <p>${dado.articles[j].title}</p>
                                        </div>`;
                    }
                    for(let v = 0; v < 3; v++){
                        result2 += `    <div>
                                            <h1>${dado.articles[v].title}</h1>
                                            <p>${dado.articles[v].description}</p>
                                        </div>`;
                    }
                    
                    esquerdadecada.innerHTML = result;
                    direitadecada.innerHTML = result1;
                    somentetxt.innerHTML = result2;
                    noteprincipal.innerHTML = result3;
                    somentetxt1.innerHTML = result2;
            }
        }
        xmlhttp.open("GET", url ,true); 
        xmlhttp.send();
    }

function loadNotDestaques(){
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=e9b4fc19c40040019027457ac04d9695';
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            let dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let categoria = "destaques";
            let esquerdadecada = document.getElementsByClassName('esquerda')[0];
            let direitadecada = document.getElementsByClassName('direita')[0];
            let somentetxt = document.getElementsByClassName('somentetxt')[0];
            let somentetxt1 = document.getElementsByClassName('somentetxt')[1];
            let noteprincipal = document.getElementsByClassName('notprincipal')[0];
            for(let i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais">
                                <img src=${dado.articles[i].urlToImage} alt=${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo(${i}, '${categoria}')">Leia mais...</h1>
                            </div>`;

                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="./img/logodestaques2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo(${i}, '${categoria}')">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
            }
            for(let j = 0; j < 2; j++){
                result3 += `    <div>
                                    <img src=${dado.articles[j].urlToImage} alt="not1">
                                    <p>${dado.articles[j].title}</p>
                                </div>`;
            }
            for(let v = 0; v < 3; v++){
                result2 += `    <div>
                                    <h1>${dado.articles[v].title}</h1>
                                    <p>${dado.articles[v].description}</p>
                                </div>`;
            }
            
            esquerdadecada.innerHTML = result;
            direitadecada.innerHTML = result1;
            somentetxt.innerHTML = result2;
            noteprincipal.innerHTML = result3;
            somentetxt1.innerHTML = result2;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}



function loadNotBit(){
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=e9b4fc19c40040019027457ac04d9695`;
    let xmlhttp=new XMLHttpRequest();
    let esquerdadecada = document.getElementsByClassName('esquerda')[4];
    let direitadecada = document.getElementsByClassName('direitabit')[0];
    let somentetxt = document.getElementsByClassName('somentetxt')[8];
    let somentetxt1 = document.getElementsByClassName('somentetxt')[9];
    let noteprincipal = document.getElementsByClassName('notprincipal')[4];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            let dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let categoria = "bitcoin";
            for(let i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiseco">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="./img/logoeconomia2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
                
                
                        
        }
        for(let j = 0; j < 2; j++){
            result3 += `    <div>
                                <img src=${dado.articles[j].urlToImage} alt="not1">
                                <p>${dado.articles[j].title}</p>
                            </div>`;
        }
        for(let v = 0; v < 3; v++){
            result2 += `    <div>
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
       
        esquerdadecada.innerHTML = result;
        direitadecada.innerHTML = result1;
        somentetxt.innerHTML = result2;
        noteprincipal.innerHTML = result3;
        somentetxt1.innerHTML = result2;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}



function loadNotPoli(){
    let url = `https://newsapi.org/v2/everything?q=politics&apiKey=e9b4fc19c40040019027457ac04d9695`;
    let xmlhttp=new XMLHttpRequest();
    let esquerdadecada = document.getElementsByClassName('esquerda')[5];
    let direitadecada = document.getElementsByClassName('direitapoli')[0];
    let somentetxt = document.getElementsByClassName('somentetxt')[9];
    let somentetxt1 = document.getElementsByClassName('somentetxt')[10];
    let noteprincipal = document.getElementsByClassName('notprincipal')[5];
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4&&xmlhttp.status==200){
            let dado = JSON.parse(xmlhttp.responseText);
            let result = " ";
            let result1 = " ";
            let result2 = " ";
            let result3 = " ";
            let categoria = "politics";
            for(let i = 0; i < dado.articles.length; i++){
                result += ` <div class="leiamais leiamaiseco">
                                <img src=${dado.articles[i].urlToImage} alt= ${dado.articles[i].title} width="200%" height="100%">
                                <p><span>${dado.articles[i].title}</span> </br> ${dado.articles[i].description}</p>
                                <h1 onclick="funcaoConteudo('${i}', '${categoria}');">Leia mais...</h1>
                            </div>`;
                result1 += `<article class="blocos">
                                <div>
                                    <p>${dado.articles[i].title}</br> <span>${dado.articles[i].description}</span></p>
                                </div>
                                <section>
                                    <img src="./img/logoeconomia2.png" alt="img">
                                    <p>Gostou, leia mais clicando abaixo.</p>
                                    <div onclick="funcaoConteudo('${i}', '${categoria}');">
                                        <h1>Leia mais...</h1>
                                    </div>
                                </section>
                            </article>`;
                
                
                        
        }
        for(let j = 0; j < 2; j++){
            result3 += `    <div>
                                <img src=${dado.articles[j].urlToImage} alt="not1">
                                <p>${dado.articles[j].title}</p>
                            </div>`;
        }
        for(let v = 0; v < 3; v++){
            result2 += `    <div>
                                <h1>${dado.articles[v].title}</h1>
                                <p>${dado.articles[v].description}</p>
                            </div>`;
        }
        
        esquerdadecada.innerHTML = result;
        direitadecada.innerHTML = result1;
        somentetxt.innerHTML = result2;
        noteprincipal.innerHTML = result3;
        somentetxt1.innerHTML = result2;
        }
    }
    xmlhttp.open("GET", url ,true); 
    xmlhttp.send();
}