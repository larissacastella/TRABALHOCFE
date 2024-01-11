//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botão-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botão-cadastrar").hide();
    })
})
