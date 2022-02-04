var valorMensal = 50
var diaria = 20
var hora = 8
var placas = ['abc1d23', 'b']

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
    if(placas.includes(placa)) {
        //console.log(placa + "Mensalista" + dt)

        var dado = {
            placa: placa,
            tabela: "Mensalidade",
            entrada: dt
        }

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

    }

})

