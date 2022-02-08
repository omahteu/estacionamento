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

        if(tabela === 'mt'){
            garagem.innerHTML += '<div class="col-md-6 col-6">'+
                                    '<div class="card">'+
                                        '<div class="card-header mx-4 p-3 text-center">'+
                                            '<div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">'+
                                                '<img class="imgem" src="../img/mt.png" alt="">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="card-body pt-0 p-3 text-center">'+
                                            '<h6 class="text-center mb-0"><span id="minuto">00</span><span>:</span><span id="segundo">00</span></h6>'+
                                            '<span class="text-xs">' + tabela + '</span>'+
                                            '<hr class="horizontal dark my-3">'+
                                            '<h5 class="mb-0">' + placa + '</h5>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'
        } else if(tabela === 'cg'){
            garagem.innerHTML += '<div class="col-md-6 col-6">'+
                                    '<div class="card">'+
                                        '<div class="card-header mx-4 p-3 text-center">'+
                                            '<div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">'+
                                                '<img class="imgem" src="../img/cg.png" alt="">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="card-body pt-0 p-3 text-center">'+
                                            '<h6 class="text-center mb-0"><span id="minuto">00</span><span>:</span><span id="segundo">00</span></h6>'+
                                            '<span class="text-xs">' + tabela + '</span>'+
                                            '<hr class="horizontal dark my-3">'+
                                            '<h5 class="mb-0">' + placa + '</h5>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'
        } else if(tabela === 'cp'){
            garagem.innerHTML += '<div class="col-md-6 col-6">'+
                                    '<div class="card">'+
                                        '<div class="card-header mx-4 p-3 text-center">'+
                                            '<div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">'+
                                                '<img class="imgem" src="../img/cp.png" alt="">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="card-body pt-0 p-3 text-center">'+
                                            '<h6 class="text-center mb-0"><span id="minuto">00</span><span>:</span><span id="segundo">00</span></h6>'+
                                            '<span class="text-xs">' + tabela + '</span>'+
                                            '<hr class="horizontal dark my-3">'+
                                            '<h5 class="mb-0">' + placa + '</h5>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'
        } else (
            garagem.innerHTML += '<div class="col-md-6 col-6">'+
                                    '<div class="card">'+
                                        '<div class="card-header mx-4 p-3 text-center">'+
                                            '<div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">'+
                                                '<img class="imgem" src="../img/hmt.png" alt="">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="card-body pt-0 p-3 text-center">'+
                                            '<h6 class="text-center mb-0"><span id="minuto">00</span><span>:</span><span id="segundo">00</span></h6>'+
                                            '<span class="text-xs">' + tabela + '</span>'+
                                            '<hr class="horizontal dark my-3">'+
                                            '<h5 class="mb-0">' + placa + '</h5>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'
        )
    }
})
