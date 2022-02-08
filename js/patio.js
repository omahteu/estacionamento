$(document).ready(function(){
    
    var dados = JSON.parse(localStorage.getItem('patio'))
    var garagem = document.getElementById('patiocard')
    garagem.innerHTML = ''

    for(var i = 0; i < dados.length; i++) {

        var placa = dados[i].placa
        var tabela = dados[i].tabela
        // var entrada = dados[i].entrada
        // var data = dados[i].data
        var hora = dados[i].hora

        garagem.innerHTML += '<div class="col-md-6 col-6">'+
                                '<div class="card">'+
                                    '<div class="card-header mx-4 p-3 text-center">'+
                                        '<div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">'+
                                            '<i class="material-icons opacity-10">account_balance_wallet</i>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="card-body pt-0 p-3 text-center">'+
                                        '<h6 class="text-center mb-0">' + hora+ '</h6>'+
                                        '<span class="text-xs">' + tabela + '</span>'+
                                        '<hr class="horizontal dark my-3">'+
                                        '<h5 class="mb-0">' + placa + '</h5>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
    }

})
