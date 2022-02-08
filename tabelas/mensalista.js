var valorMensal = 50
var diaria = 20
var hora = 8
var placas = ['a', 'b']
var tabelas = ['cg', 'cp', 'mt']


function dataAtual() {
    var horaEntrada = new Date();
    var dia = horaEntrada.getDate()
    var mes = horaEntrada.getMonth()
    var ano = horaEntrada.getFullYear()

    var data = dia + '/' + mes + '/' + ano
    return data
}

function horaAtual() {
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    var hora = hora + ':' + minutos
    return hora
}

function dataHora() {
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    var dia = horaEntrada.getDate()
    var mes = horaEntrada.getMonth()
    var ano = horaEntrada.getFullYear()

    var dataEhora = hora + ':' + minutos + ' ' +  '-' + ' ' + dia + '/' + mes + '/' + ano
    return dataEhora
}



$("#registrar").click(function(){
    var placa = $("#placa").val()
    var dt = dataHora()
    var hora_atual = horaAtual()
    var data_atual = dataAtual()
    var tabelaescolhida = $("#tipoVeiculo").val()
    

    if(placas.includes(placa)) {

        var dado = {
            placa: placa,
            tabela: "Mensalidade",
            entrada: dt,
            hora: hora_atual,
            data: data_atual
        }

        armazenamento(dado)

    }

    if(placas.includes(placa) == false && tabelaescolhida === '') {
        
        alert("Veículo não é mensalissta, escolha uma tabela!")

        var opcao = document.getElementById('tabelaCarroNovo')
        opcao.innerHTML = ''

        opcao.innerHTML += '<select name="" id="tipoVeiculo" class="form-control">'+
                                '<option value="" hidden>Veículo</option>'+
                                '<option value="cg">Carro Grande</option>'+
                                '<option value="cp">Carro Pequeno</option>'+
                                '<option value="mt">Moto</option>'+
                            '</select>'

        $("#tabelaCarroNovo").css('visibility', 'visible')
        // $("#registrar").css('visibility', 'hidden')
        // $("#registrar2").css('visibility', 'visible')
                             
    }

    if(placas.includes(placa) === false && tabelas.includes(tabelaescolhida)) {

        var dado = {
            placa: placa,
            tabela: tabelaescolhida,
            hora: hora_atual,
            data: data_atual
        }

        armazenamento(dado)
    }

})

function armazenamento(dado) {

    if(localStorage.getItem('patio') === null){
        var dados = [];
        dados.push(dado);
        localStorage.setItem('patio', JSON.stringify(dados));
    } else {
        var dados = JSON.parse(localStorage.getItem('patio'));
        dados.push(dado);
        localStorage.setItem('patio', JSON.stringify(dados));
    }

    alert("Veículo Registrado!")

    document.getElementById('registroPlacas').reset()
}