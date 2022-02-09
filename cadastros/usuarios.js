$("#salvarUsuario").click(function(){
    var usuario = $("#usuario").val()
    var permissao = $("#permissao").val()

    console.log(usuario, permissao)
    

})

$("#limparUsuario").click(function(){
    document.getElementById('formUsuarios').reset()
})
