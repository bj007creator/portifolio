function funcaoDb(){
    let db = {
        "userPreferences": [
            {"clicks": 0},
            {"clicks": 0},
            {"clicks": 0},
            {"clicks": 0},
            {"clicks": 0},
            {"clicks": 0},
            
        ],
        "preferencias": [],
        "perfis": [],
        "perfilSelecionado": 0
    };
    let bd = JSON.parse(localStorage.getItem('results'));
    if(!bd){
        bd = db;
        localStorage.setItem('results', JSON.stringify(bd));
    }
}



