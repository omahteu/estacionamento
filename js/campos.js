$("#teste").click(function(){
    var campo = document.getElementById(placas)
    campo.innerHTML = ''
    campo.innerHTML += '<div class="form-group" id="placas">'+
                        '<input type="text" class="form-control" placeholder="Placa">'+
                        '</div>'
})