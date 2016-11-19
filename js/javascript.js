// Função enviar do formulário

function Enviar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");

    if (nome.value != "" && email.value != "") {
        alert("Obrigado(a) " + nome.value + " os seus dados foram encaminhados com sucesso!");
    }
}

// Inicialização do tooltip no footer

$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();
})

// Função scroll nos itens da navbar

$(document).ready(function() { 
    (".menu-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
})
