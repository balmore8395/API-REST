$('#guarda_producto').click(function(){
    var codigo = $('#codigo').val()
    var nombre = $('#nombre').val()
    var precio = $('#precio').val()
    var existencia = $('#existencia').val()

    var data_user = {'codigo': codigo, 'nombre':nombre, 'precio': precio, 'existencia':existencia}
    $.ajax({
        type:'POST',
        url:'http://localhost:9000/productos',
        contentType : 'application/json',
        data: JSON.stringify(data_user)
    }).done(function(){
        alert('Usuario grabado con exito')
        $('#codigo').val() = ''
    }).fail (function (error){
        alert(err)
    })
})

$('#obtener_producto').click(function(){
    var id =$('#id').val()
    fetch('http://localhost:9000/productos?='+id)
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data)))

})


$('#actualizar_producto').click(function(){
    var id = $('#id').val()
    var code = $('#codigo').val()
    var name = $('#nombre').val()
    var price = $('#precio').val()
    var stock = $('#existencia').val()
    var data_product = { 'codigo': code, 'nombre': name, 'precio': price, 'existencia': stock} 
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:9000/productos?id='+id,
        contentType: 'application/json',
        data: JSON.stringify(data_product)
    }).done(function(){
        alert("Producto actualizado")
    }).fail(function(err){
        alert(err)
    })
})


$('#eliminar_producto').click(function(){

    var id = $('#id').val()



    $.ajax({

        type: 'DELETE',

        url: 'http://localhost:9000/productos?id='+id,

        contentType: 'application/json'

    }).done(function(){

        alert("Producto eliminado")

    }).fail(function(err){

        alert(err)

    })

})