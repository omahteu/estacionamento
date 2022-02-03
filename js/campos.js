var box = document.getElementById('box')

var contador = 1

$("#add").click(function(){
    contador++
    criandoInput()
})

function criandoInput() {
    var elemento = document.createElement('input')
    elemento.setAttribute('type', 'text')
    elemento.setAttribute('id', 'placas' + contador)
    elemento.setAttribute('placeholder', 'Placad')

    box.appendChild(elemento)
}