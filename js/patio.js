$(document).ready(function(){
    
    var dados = JSON.parse(localStorage.getItem('patio'))
    var garagem = document.getElementById('listaPatio')
    garagem.innerHTML = ''

    for(var i = 0; i < dados.length; i++) {

        var placa = dados[i].placa
        var tabela = dados[i].tabela
        var entrada = dados[i].entrada
        var data = dados[i].data
        var hora = dados[i].hora

        garagem.innerHTML += '<tr>'+
                                '<td>' + data + '</td>'+
                                '<td>' + 'Mauro' + '</td>'+
                                '<td>' + hora + '</td>'+
                                '<td>' + tabela + '</td>'+
                                '<td>' + placa + '</td>'+
                                '<td><button onclick="removeProduto('+ placa +')" class="btn btn-danger">Encerrar</button></td>'+
                            '</tr>'

    }

    console.log(dados)
})