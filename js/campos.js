var btn_add = document.getElementById('add')
var box = document.getElementById('box')

var contador = 1

btn_add.addEventListener('click', function() {
    contador++
    criandoInput()
})

function criandoInput() {
    var elemento = document.createElement('input')
    elemento.setAttribute('type', 'text')
    elemento.setAttribute('id', 'placas' + contador)
    elemento.setAttribute('class', 'form-control')
    elemento.setAttribute('placeholder', 'Placa' + contador)

    box.appendChild(elemento)
}