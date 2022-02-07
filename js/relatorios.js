$(document).ready(function(){
    
    var dados = JSON.parse(localStorage.getItem('tabelaPrecos'))
    var garagem = document.getElementById('listaPrecos')
    garagem.innerHTML = ''

    for(var i = 0; i < dados.length; i++) {

        var tamanhoVeiculos = dados[i].tamanhoVeiculos
        var valorDiaria = dados[i].valorDiaria
        var valorFracao = dados[i].valorFracao
        var valorHora = dados[i].valorHora

        if(valorFracao != ''){

            garagem.innerHTML += '<tr>'+
                                        '<td>' + 'Sim' + '</td>'+
                                        '<td>' + tamanhoVeiculos + '</td>'+
                                        '<td>' + valorHora + '</td>'+
                                        '<td>' + valorDiaria + '</td>'+
                                        '<td>' + valorFracao + '</td>'+
                                        '<td><button onclick="removeProduto('+ tamanhoVeiculos +')" class="btn btn-danger">Editar</button></td>'+
                                 '</tr>'

        }

        if(valorFracao === ''){

            garagem.innerHTML += '<tr>'+
                                        '<td>' + 'Não' + '</td>'+
                                        '<td>' + tamanhoVeiculos + '</td>'+
                                        '<td>' + valorHora + '</td>'+
                                        '<td>' + valorDiaria + '</td>'+
                                        '<td>' + valorFracao + '</td>'+
                                        '<td><button onclick="removeProduto('+ tamanhoVeiculos +')" class="btn btn-danger">Editar</button></td>'+
                                 '</tr>'

        }

    }

    console.log(dados)
})