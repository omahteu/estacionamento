$(document).ready(function(){
    
    var dados = JSON.parse(localStorage.getItem('patio'))
    var garagem = document.getElementById('listaPatio')
    garagem.innerHTML = ''

    for(var i = 0; i < dados.length; i++) {

        var placa = dados[i].placa
        var tabela = dados[i].tabela
        var entrada = dados[i].entrada

        garagem.innerHTML += '<tr>'+
                                '<td>' + entrada + '</td>'+
                                '<td>' + 'Mauro' + '</td>'+
                                '<td>' + entrada + '</td>'+
                                '<td>' + tabela + '</td>'+
                                '<td>' + placa + '</td>'+
                                '<td><button onclick="removeProduto('+ placa +')" class="btn btn-danger">Encerrar</button></td>'+
                            '</tr>'

    }

    console.log(dados)
})