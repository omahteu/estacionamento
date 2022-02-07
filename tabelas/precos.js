$('#usafracao').change(function() {
    var option = $('#usafracao').find(":selected").val();

    if(option === 'nao') {
        $("#valorFracao").prop('disabled', true)
    }

});




$("#registraPreco").click(function(){
    // var usafracao = $("#usafracao").val()
    var tamanhoVeiculos = $("#tamanhoVeiculos").val()
    var valorHora = $("#valorHora").val()
    var valorDiaria = $("#valorDiaria").val()
    var valorFracao = $("#valorFracao").val()
    console.log(valorFracao)
})

function limpar() {
    document.getElementById('formTabelaPrecos').reset()
}
