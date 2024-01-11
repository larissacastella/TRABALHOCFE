//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"
        }
    )
}

//Validação de Login

function loging(){
    var logado = 0;
    var usuário = document.getElementsByName('usuário')[0].value;
    usuário = usuário.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();

    if(usuário == 'admin' && senha == '123456'){
        window.location = "index.html"
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso Negado.")
    }
}

//Ativar alert no botão cadastrar
