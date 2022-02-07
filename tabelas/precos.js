$('#usafracao').change(function() {
    var option = $('#usafracao').find(":selected").val();

    if(option === 'nao') {
        $("#valorFracao").prop('disabled', true)
    }

});




$("#registraPreco").click(function(){
    
    var tamanhoVeiculos = $("#tamanhoVeiculos").val()
    var valorHora = $("#valorHora").val()
    var valorDiaria = $("#valorDiaria").val()
    var valorFracao = $("#valorFracao").val()
    
    var dado = {
        tamanhoVeiculos: tamanhoVeiculos,
        valorHora: valorHora,
        valorDiaria: valorDiaria,
        valorFracao: valorFracao,
    }

    if(localStorage.getItem('tabelaPrecos') === null){
        var dados = [];
        dados.push(dado);
        localStorage.setItem('tabelaPrecos', JSON.stringify(dados));
    } else {
        var dados = JSON.parse(localStorage.getItem('tabelaPrecos'));
        dados.push(dado);
        localStorage.setItem('tabelaPrecos', JSON.stringify(dados));
    }

    alert("Tabela Registrada!")

    document.getElementById('formTabelaPrecos').reset()

})

function limpar() {
    document.getElementById('formTabelaPrecos').reset()
}
